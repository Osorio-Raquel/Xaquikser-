<template>
  <div class="algoritmo">
    <h1 class="titulo" >Mapa con área ajustada y búsqueda de ruta</h1>
    <div id="map" style="height: 90vh; max-width: 1000px; margin: 0 auto; border: 2px solid black;"></div>
    
    <div class="control-panel">
      <div class="route-controls">
        <button @click="startSelectingRoute" :disabled="routeSelectionMode" class="primary-btn">Buscar ruta más corta</button>
        <div v-if="routeSelectionMode" class="selection-status">
          <span v-if="!startNodeId">Selecciona nodo de inicio</span>
          <span v-else-if="!endNodeId">Selecciona nodo de destino</span>
        </div>
        <button v-if="routeCalculated" @click="clearRoute" class="secondary-btn">Limpiar ruta</button>
      </div>
      
      <div class="graph-controls">
        <button @click="exportGraph" class="secondary-btn">Exportar grafo JSON (consola)</button>
        <button @click="downloadGraph" class="secondary-btn">Descargar grafo JSON</button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <h2>Agregar Nodo</h2>
        <form @submit.prevent="confirmAddNode">
          <label>
            Nombre de la sección:
            <input v-model="form.nombre" required maxlength="30" />
          </label>

          <label>
            Color:
            <input type="color" v-model="form.color" />
          </label>

          <label>
            Descripción:
            <textarea v-model="form.descripcion" rows="3" maxlength="200" placeholder="Descripción del nodo"></textarea>
          </label>

          <label>
            Tipo de nodo:
            <select v-model="form.tipo" required>
              <option disabled value="">Seleccione tipo</option>
              <option value="seccion">Sección</option>
              <option value="almacen">Almacén</option>
              <option value="control">Punto Control</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          <label style="display:flex; align-items:center; gap: 8px;">
            <input type="checkbox" v-model="form.activo" />
            Nodo activo
          </label>

          <div class="modal-buttons">
            <button type="submit">Guardar</button>
            <button type="button" @click="closeModal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

let map;
const nodes = ref([]);
const edges = ref([]);
let selectedNodeId = null;
let routeLines = [];

// Nuevas variables para selección de ruta
const routeSelectionMode = ref(false);
const startNodeId = ref(null);
const endNodeId = ref(null);
const routeCalculated = ref(false);

const boundsCoords = [
  [-16.505, -68.194],  // Suroeste (lat, lng)
  [-16.505, -68.160],  // Sureste
  [-16.485, -68.160],  // Noreste
  [-16.485, -68.194]   // Noroeste
];

let polygonArea;

const showModal = ref(false);
const form = ref({
  nombre: '',
  color: '#ff0000',
  descripcion: '',
  tipo: '',
  activo: true,
});
let pendingNodeLatLng = null;

function distance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const toRad = deg => deg * Math.PI / 180;
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a = Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function onMapClick(e) {
  // Si estamos en modo de selección de ruta, ignoramos los clics en el mapa
  if (routeSelectionMode.value) return;
  
  const latlng = L.latLng(e.latlng.lat, e.latlng.lng);
  if (!polygonArea.getBounds().contains(latlng)) {
    alert('No puedes agregar nodos fuera del área delimitada');
    return;
  }

  pendingNodeLatLng = latlng;
  form.value = {
    nombre: '',
    color: '#ff0000',
    descripcion: '',
    tipo: '',
    activo: true,
  };
  showModal.value = true;
}

function confirmAddNode() {
  if (!pendingNodeLatLng) return;

  const id = 'N' + (nodes.value.length + 1);
  const { nombre, color, descripcion, tipo, activo } = form.value;

  const markerEl = document.createElement('div');
  markerEl.style.backgroundColor = color;
  markerEl.style.width = '24px';
  markerEl.style.height = '24px';
  markerEl.style.borderRadius = '50%';
  markerEl.style.border = '3px solid black';
  markerEl.style.cursor = 'pointer';
  markerEl.title = nombre;

  const marker = L.marker(pendingNodeLatLng, { icon: L.divIcon({ className: '', html: markerEl.outerHTML }) }).addTo(map);
  marker.bindPopup(`
    <b>${nombre}</b><br>ID: ${id}<br>Color: <span style="color:${color}">${color}</span><br>
    Descripción: ${descripcion}<br>Tipo: ${tipo}<br>Activo: ${activo ? 'Sí' : 'No'}
  `);
  marker.on('click', () => onNodeClick(id));

  nodes.value.push({ id, lat: pendingNodeLatLng.lat, lng: pendingNodeLatLng.lng, marker, nombre, color, descripcion, tipo, activo });

  showModal.value = false;
  pendingNodeLatLng = null;
}

function closeModal() {
  showModal.value = false;
  pendingNodeLatLng = null;
}

function onNodeClick(id) {
  // Modo selección de ruta
  if (routeSelectionMode.value) {
    if (!startNodeId.value) {
      startNodeId.value = id;
      highlightRouteNode(id, '#0055ff');
    } else if (!endNodeId.value && id !== startNodeId.value) {
      endNodeId.value = id;
      highlightRouteNode(id, '#ff5500');
      calculateShortestPath();
    }
    return;
  }
  
  // Modo normal (creación de aristas)
  if (!selectedNodeId) {
    selectedNodeId = id;
    highlightNode(selectedNodeId, true);
  } else if (selectedNodeId === id) {
    highlightNode(selectedNodeId, false);
    selectedNodeId = null;
  } else {
    createEdge(selectedNodeId, id);
    highlightNode(selectedNodeId, false);
    selectedNodeId = id;
    highlightNode(selectedNodeId, true);
  }
}

function highlightNode(id, highlight) {
  const node = nodes.value.find(n => n.id === id);
  if (!node) return;
  const el = node.marker.getElement();
  if (highlight) {
    el.style.filter = 'drop-shadow(0 0 8px yellow)';
  } else {
    el.style.filter = '';
  }
}

function highlightRouteNode(id, color) {
  const node = nodes.value.find(n => n.id === id);
  if (!node) return;
  const el = node.marker.getElement();
  el.style.filter = `drop-shadow(0 0 8px ${color})`;
}

function createEdge(fromId, toId) {
  const fromNode = nodes.value.find(n => n.id === fromId);
  const toNode = nodes.value.find(n => n.id === toId);
  if (!fromNode || !toNode) return;

  // Función para verificar si la arista ya existe
  function edgeExists(a, b) {
    return edges.value.some(e => 
      (e.fromId === a && e.toId === b)
    );
  }

  const weight = distance(fromNode.lat, fromNode.lng, toNode.lat, toNode.lng);
  
  // Crear arista de fromId a toId si no existe
  if (!edgeExists(fromId, toId)) {
    const latlngs = [
      [fromNode.lat, fromNode.lng],
      [toNode.lat, toNode.lng]
    ];
    const line = L.polyline(latlngs, { color: 'blue', weight: 3 }).addTo(map);
    edges.value.push({ fromId, toId, weight, line });
  }

  // Crear arista inversa de toId a fromId si no existe
  if (!edgeExists(toId, fromId)) {
    const latlngsInv = [
      [toNode.lat, toNode.lng],
      [fromNode.lat, fromNode.lng]
    ];
    const lineInv = L.polyline(latlngsInv, { color: 'blue', weight: 3 }).addTo(map);
    edges.value.push({ fromId: toId, toId: fromId, weight, line: lineInv });
  }
}

// Nuevas funciones para la ruta más corta
function startSelectingRoute() {
  // Limpiar cualquier ruta anterior
  clearRoute();
  
  // Iniciar modo de selección de ruta
  routeSelectionMode.value = true;
  startNodeId.value = null;
  endNodeId.value = null;
  
  // Desactivar modo normal
  if (selectedNodeId) {
    highlightNode(selectedNodeId, false);
    selectedNodeId = null;
  }
}

function clearRoute() {
  // Eliminar líneas de ruta
  routeLines.forEach(line => map.removeLayer(line));
  routeLines = [];
  
  // Limpiar resaltado de nodos de ruta
  if (startNodeId.value) {
    const startEl = nodes.value.find(n => n.id === startNodeId.value)?.marker.getElement();
    if (startEl) startEl.style.filter = '';
  }
  
  if (endNodeId.value) {
    const endEl = nodes.value.find(n => n.id === endNodeId.value)?.marker.getElement();
    if (endEl) endEl.style.filter = '';
  }
  
  // Resetear variables
  startNodeId.value = null;
  endNodeId.value = null;
  routeSelectionMode.value = false;
  routeCalculated.value = false;
}

// Implementación del algoritmo de Dijkstra
function calculateShortestPath() {
  if (!startNodeId.value || !endNodeId.value) return;
  
  // Construir grafo para el algoritmo
  const graph = buildGraph();
  
  // Ejecutar algoritmo de Dijkstra
  const { distances, previous } = dijkstra(graph, startNodeId.value);
  
  // Reconstruir el camino desde el final hasta el inicio
  const path = [];
  let current = endNodeId.value;
  
  // Si no hay camino al destino
  if (previous[current] === undefined) {
    alert('No existe una ruta entre estos nodos');
    clearRoute();
    return;
  }
  
  while (current !== startNodeId.value) {
    path.unshift(current);
    current = previous[current];
  }
  path.unshift(startNodeId.value);
  
  // Mostrar la ruta en el mapa
  displayRoute(path);
  
  // Salir del modo selección
  routeSelectionMode.value = false;
  routeCalculated.value = true;
  
  // Mostrar información de la ruta
  alert(`Ruta más corta encontrada: ${path.join(' → ')}\nDistancia total: ${Math.round(distances[endNodeId.value])} metros`);
}

function buildGraph() {
  const graph = {};
  for (const node of nodes.value) {
    graph[node.id] = [];
  }
  for (const edge of edges.value) {
    graph[edge.fromId].push({ node: edge.toId, weight: edge.weight });
  }
  return graph;
}

function dijkstra(graph, startNode) {
  const distances = {};
  const previous = {};
  const unvisited = new Set();
  
  // Inicialización
  for (const node in graph) {
    if (node === startNode) {
      distances[node] = 0;
    } else {
      distances[node] = Infinity;
    }
    unvisited.add(node);
  }
  
  while (unvisited.size > 0) {
    // Encontrar el nodo con la distancia más corta
    let current = null;
    let shortestDistance = Infinity;
    
    for (const node of unvisited) {
      if (distances[node] < shortestDistance) {
        shortestDistance = distances[node];
        current = node;
      }
    }
    
    // Si no hay nodos alcanzables, terminamos
    if (current === null || distances[current] === Infinity) break;
    
    // Eliminar el nodo actual de los no visitados
    unvisited.delete(current);
    
    // Para cada vecino del nodo actual
    for (const { node: neighbor, weight } of graph[current]) {
      const distance = distances[current] + weight;
      
      // Si encontramos un camino más corto
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = current;
      }
    }
  }
  
  return { distances, previous };
}

function displayRoute(path) {
  // Dibujar las líneas de la ruta en verde
  for (let i = 0; i < path.length - 1; i++) {
    const fromNode = nodes.value.find(n => n.id === path[i]);
    const toNode = nodes.value.find(n => n.id === path[i + 1]);
    
    if (fromNode && toNode) {
      const latlngs = [
        [fromNode.lat, fromNode.lng],
        [toNode.lat, toNode.lng]
      ];
      
      // Agregar línea verde de ruta
      const routeLine = L.polyline(latlngs, { 
        color: '#00cc00', 
        weight: 6,
        opacity: 0.8,
        dashArray: '10, 5'
      }).addTo(map);
      
      routeLines.push(routeLine);
    }
  }
}

function exportGraph() {
  const simpleNodes = nodes.value.map(({ id, lat, lng, nombre, color, descripcion, tipo, activo }) => ({ id, lat, lng, nombre, color, descripcion, tipo, activo }));
  const graphJSON = {
    nodes: simpleNodes,
    edges: edges.value.map(({ fromId, toId, weight }) => ({ fromId, toId, weight }))
  };
  console.log('Grafo exportado:', JSON.stringify(graphJSON, null, 2));
  alert('Grafo exportado en consola.');
}

function downloadGraph() {
  const simpleNodes = nodes.value.map(({ id, lat, lng, nombre, color, descripcion, tipo, activo }) => ({ id, lat, lng, nombre, color, descripcion, tipo, activo }));
  const graphJSON = {
    nodes: simpleNodes,
    edges: edges.value.map(({ fromId, toId, weight }) => ({ fromId, toId, weight }))
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(graphJSON, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "grafo.json");
  document.body.appendChild(dlAnchorElem);
  dlAnchorElem.click();
  dlAnchorElem.remove();
  alert('Archivo JSON descargado.');
}

onMounted(() => {
  map = L.map('map', {
    minZoom: 15.3,
    maxZoom: 18
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  polygonArea = L.polygon(boundsCoords, { color: 'transparent', fillOpacity: 0 }).addTo(map);

  map.fitBounds(polygonArea.getBounds());
  map.setMaxBounds(polygonArea.getBounds());

  map.on('click', onMapClick);
});
</script>

<style>
#map {
  border: 2px solid black;
  margin-bottom: 15px;
}

.control-panel {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
}

.route-controls, .graph-controls {
  display: flex;
  gap: 10px;
  align-items: center;
}

.selection-status {
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-weight: bold;
}

/* Botones */
button {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.primary-btn {
  background-color: #007bff;
  color: white;
}

.primary-btn:hover {
  background-color: #0069d9;
}

.primary-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.secondary-btn {
  background-color: #6c757d;
  color: white;
}

.secondary-btn:hover {
  background-color: #5a6268;
}

/* Modal estilos */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  width: 320px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.modal h2 {
  margin-bottom: 15px;
}

.modal label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 14px;
}

.modal input[type="text"],
.modal input[type="color"],
.modal select,
.modal textarea {
  width: 100%;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal-buttons button {
  padding: 7px 15px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

.modal-buttons button[type="submit"] {
  background-color: #007bff;
  color: white;
}

.modal-buttons button[type="button"] {
  background-color: #ddd;
  color: #333;
}


.algoritmo{
  background-color: #1a1c20;
}



/* Fondo sutil */
body::before {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url('https://i.imgur.com/3f4FX3a.jpg') no-repeat center center fixed;
  background-size: cover;
  opacity: 0.06;
  z-index: -1;
  filter: blur(2px);
}

/* --- Título principal --- */
h1 {
  font-weight: 700;
  font-size: 2.8rem;
  color: #bac1c8;
  text-align: center;
  margin: 25px auto 50px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-shadow:
    0 0 6px #888c93;
  transition: color 0.3s ease;
}

h1:hover {
  color: #9aa1a8;
}

/* --- Contenedor del mapa --- */
#map {
  border-radius: 16px;
  border: 2px solid #4b4f59;
  box-shadow:
    0 0 12px #3a3d45,
    inset 0 0 30px #2a2c34;
  transition: box-shadow 0.3s ease;
  max-width: 1000px;
  margin: 0 auto 35px;
  height: 90vh;
  background-color: #24272f;
}

#map:hover {
  box-shadow:
    0 0 25px #616670,
    inset 0 0 40px #3d4151;
}

/* --- Panel de controles --- */
.control-panel {
  max-width: 1000px;
  margin: 0 auto 25px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}

.route-controls, .graph-controls {
  display: flex;
  gap: 14px;
  align-items: center;
}

/* Texto de selección de ruta */
.selection-status {
  background: #2f333ccc;
  padding: 7px 16px;
  border-radius: 22px;
  font-weight: 600;
  font-size: 1.05rem;
  color: #b0b5be;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow:
    0 0 6px #444851;
  user-select: none;
}

/* --- Botones --- */
button {
  padding: 12px 30px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 26px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.1em;
  user-select: none;
  transition: all 0.35s ease;
  background: linear-gradient(145deg, #43474e, #2f3239);
  color: #c6c8cd;
  box-shadow:
    5px 5px 12px #25272d,
    -5px -5px 12px #595d66;
}

button:hover:not(:disabled) {
  background: linear-gradient(145deg, #575c63, #3e424a);
  box-shadow:
    8px 8px 15px #212329,
    -8px -8px 15px #6b6f78;
  color: #e0e3e8;
  transform: scale(1.05);
}

button:disabled {
  background: #3a3d43;
  color: #7a7d84;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* --- Modal Overlay --- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(12, 15, 23, 0.85);
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: modalFadeIn 0.4s ease forwards;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* --- Modal caja --- */
.modal {
  background: #2a2d36;
  padding: 28px 36px;
  border-radius: 20px;
  width: 380px;
  max-width: 90%;
  box-shadow:
    0 0 20px #444a54,
    inset 0 0 40px #1e222a;
  border: 1px solid #3d424c;
  color: #c8ccd0;
  font-weight: 600;
  user-select: text;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 0 0 3px #1a1c20;
  transition: box-shadow 0.3s ease;
}

.modal:hover {
  box-shadow:
    0 0 30px #5a6171,
    inset 0 0 55px #292e3a;
}

/* Modal título */
.modal h2 {
  margin-bottom: 28px;
  font-weight: 800;
  font-size: 1.9rem;
  color: #adb3bb;
  letter-spacing: 0.07em;
  text-align: center;
  text-shadow: 0 0 3px #30353f;
}

/* Etiquetas del formulario */
.modal label {
  display: block;
  margin-bottom: 18px;
  font-weight: 600;
  font-size: 1.05rem;
  color: #a4a9b1;
  letter-spacing: 0.04em;
  user-select: none;
}

/* Inputs, select y textarea */
.modal input[type="text"],
.modal input[type="color"],
.modal select,
.modal textarea {
  width: 100%;
  padding: 11px 14px;
  font-size: 1.05rem;
  border-radius: 12px;
  border: 1.5px solid #565b64;
  background: #3a3f48;
  color: #cfd3db;
  outline: none;
  transition: all 0.35s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow:
    inset 0 0 8px #1e222a;
}

.modal input[type="text"]:focus,
.modal input[type="color"]:focus,
.modal select:focus,
.modal textarea:focus {
  border-color: #7f85a0;
  box-shadow:
    0 0 11px #8b92a7,
    inset 0 0 12px #8991a7;
  color: #e1e5f0;
}

/* Botones modal */
.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  margin-top: 32px;
}

.modal-buttons button {
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow:
    0 0 10px #59606c88,
    inset 0 -4px 13px #565f78aa;
  color: #e4e7f1;
  background: linear-gradient(145deg, #404754, #5a6278);
  text-transform: uppercase;
}

.modal-buttons button:hover {
  background: linear-gradient(145deg, #5a6278, #404754);
  box-shadow:
    0 0 20px #7c86a4cc,
    inset 0 -6px 20px #6d7899cc;
  color: #c5cbd9;
  transform: scale(1.1);
}


</style>