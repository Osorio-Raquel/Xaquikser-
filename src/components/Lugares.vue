<template>
  <v-container fluid class="fondo-app pa-6">
    <h1
      class="text-h4 text-sm-h3 text-md-h2 font-weight-bold mb-6 text-center"
      style="color: #000000;"
    >
      🗺️ Lugares de la Feria 16 de Julio
    </h1>

    <v-row class="mb-4 justify-center" align="stretch">
      <v-col cols="12" sm="6" md="4">
        <v-select
          v-model="criterioSeleccionado"
          :items="criterios"
          label="Ordenar por"
          variant="solo-filled"
          density="comfortable"
          class="estilo-select"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          v-model="ubicacionSeleccionada"
          :items="ubicacionesDisponibles"
          label="Filtrar por ubicación"
          variant="solo-filled"
          density="comfortable"
          class="estilo-select"
        />
      </v-col>
    </v-row>

    <v-row class="justify-center mb-6">
      <v-btn
        v-if="ubicacionSeleccionada"
        @click="ubicacionSeleccionada = null"
        style="background-color: #B6B09F; color: #fff;"
        variant="elevated"
        class="mb-6"
      >
        Quitar filtro de ubicación
      </v-btn>
    </v-row>

    <v-row>
      <v-col
        v-for="lugar in lugaresOrdenados"
        :key="lugar.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-hover v-slot:default="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 10 : 4"
            class="transition-card mb-4"
          >
            <v-card-title class="text-primary font-weight-bold">
              {{ lugar.nombre }}
            </v-card-title>
            <v-card-subtitle class="text-grey">
              <v-icon icon="mdi-map-marker" class="me-1" />
              {{ lugar.direccion }}
            </v-card-subtitle>
            <v-card-text>
              <v-chip
                class="me-2 mb-2"
                style="background-color: #B6B09F; color: white;"
                label
                small
              >
                {{ lugar.categoria }}
              </v-chip>

              <v-chip
                class="me-2 mb-2"
                style="background-color: #B6B09F; color: white;"
                label
                small
              >
                Seguridad: {{ lugar.seguridad }}
              </v-chip>

              <v-chip
                class="me-2 mb-2"
                style="background-color: #B6B09F; color: white;"
                label
                small
              >
                Popularidad: {{ lugar.popularidad }}
              </v-chip>

              <v-chip
                class="mb-2"
                style="background-color: #B6B09F; color: white;"
                label
                small
              >
                ⭐ Calificación: {{ lugar.calificacion }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <h2
      class="text-h5 text-sm-h4 text-md-h3 font-weight-bold mt-12 mb-6 text-center"
      style="color: #000000;"
    >
      🔐 Guía de Áreas Seguras
    </h2>
    <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="(item, index) in guia"
        :key="index"
      >
        <v-card class="mb-4 pa-4 elevation-3 transition-card">
          <v-card-title class="text-indigo font-weight-medium">
            {{ item.titulo }}
          </v-card-title>
          <v-card-text class="text-grey-darken-2">
            {{ item.descripcion }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const criterioSeleccionado = ref('Seguridad')
const criterios = ['Seguridad', 'Popularidad', 'Calificación']
const ubicacionSeleccionada = ref(null)

const lugares = ref([
  {
    id: 1,
    nombre: 'Venta de Plantas Carnívoras',
    categoria: 'Plantas',
    direccion: 'Calle Eliodoro Nery',
    seguridad: 6,
    popularidad: 4,
    calificacion: 5.5
  },
  {
    id: 2,
    nombre: 'Venta de Animales',
    categoria: 'Animales',
    direccion: 'Calle Fournier',
    seguridad: 4,
    popularidad: 9,
    calificacion: 6.5
  },
  {
    id: 3,
    nombre: 'Venta de Animales',
    categoria: 'Animales',
    direccion: 'Calle Alfredo Pascoe',
    seguridad: 4,
    popularidad: 9,
    calificacion: 6.5
  },
  {
    id: 4,
    nombre: 'Sector de Plantas',
    categoria: 'Plantas',
    direccion: 'Calle Fourier - 3ra Sección',
    seguridad: 6,
    popularidad: 8,
    calificacion: 7
  },
  {
    id: 5,
    nombre: 'Venta de Llantas',
    categoria: 'Automotriz',
    direccion: 'Calle Santa Cruz - 2da Sección',
    seguridad: 9,
    popularidad: 3,
    calificacion: 6
  },
  {
    id: 6,
    nombre: 'Repuestos de Vehículos',
    categoria: 'Automotriz',
    direccion: 'Av. 16 de Julio - 2da Sección',
    seguridad: 6,
    popularidad: 5,
    calificacion: 5.5
  },
  {
    id: 7,
    nombre: 'Venta de Carpas',
    categoria: 'Camping',
    direccion: 'Calle Luis De La Vega',
    seguridad: 9,
    popularidad: 4,
    calificacion: 6.5
  },
  {
    id: 8,
    nombre: 'Venta de Carpas',
    categoria: 'Camping',
    direccion: 'Calle Luis Torres',
    seguridad: 6,
    popularidad: 6,
    calificacion: 6
  },
  {
    id: 9,
    nombre: 'Venta de Ropa',
    categoria: 'Vestimenta',
    direccion: 'Calle Jorge Eulert',
    seguridad: 4,
    popularidad: 9,
    calificacion: 6.5
  },
  {
    id: 10,
    nombre: 'Venta de Ropa',
    categoria: 'Vestimenta',
    direccion: 'Calle Alberto Montaño',
    seguridad: 3,
    popularidad: 9,
    calificacion: 6
  },
  {
    id: 11,
    nombre: 'Venta de Ropa',
    categoria: 'Vestimenta',
    direccion: 'Calle Arturo Valle',
    seguridad: 6,
    popularidad: 5,
    calificacion: 5.5
  },
  {
    id: 12,
    nombre: 'Venta de Peluches',
    categoria: 'Juguetería',
    direccion: 'Calle Arturo Valle',
    seguridad: 6,
    popularidad: 5,
    calificacion: 5.5
  },
  {
    id: 13,
    nombre: 'Venta de Vehículos',
    categoria: 'Automotriz',
    direccion: 'Calle Emilio Beltrán',
    seguridad: 6,
    popularidad: 9,
    calificacion: 7.5
  },
  {
    id: 14,
    nombre: 'Venta de Vehículos',
    categoria: 'Automotriz',
    direccion: 'Calle Jose Arzabe',
    seguridad: 6,
    popularidad: 9,
    calificacion: 7.5
  },
  {
    id: 15,
    nombre: 'Venta de Vehículos',
    categoria: 'Automotriz',
    direccion: 'Calle Alberto Montaño',
    seguridad: 3,
    popularidad: 9,
    calificacion: 6
  },
  {
    id: 16,
    nombre: 'Venta de Vehículos',
    categoria: 'Automotriz',
    direccion: 'Calle Rene Dorado',
    seguridad: 6,
    popularidad: 4,
    calificacion: 5
  },
  {
    id: 17,
    nombre: 'Venta de Vehículos',
    categoria: 'Automotriz',
    direccion: 'Calle Jorge Eulert',
    seguridad: 4,
    popularidad: 9,
    calificacion: 6.5
  },
  {
    id: 18,
    nombre: 'Venta de Vehículos',
    categoria: 'Automotriz',
    direccion: 'Plaza del Maestro',
    seguridad: 6,
    popularidad: 10,
    calificacion: 8
  },
  {
    id: 19,
    nombre: 'Venta de Bicicletas',
    categoria: 'Deportes',
    direccion: 'Avenida Panamericana',
    seguridad: 6,
    popularidad: 5,
    calificacion: 5.5
  },
  {
    id: 20,
    nombre: 'Venta de Mochilas',
    categoria: 'Accesorios',
    direccion: 'Calle Jorge Eulert',
    seguridad: 4,
    popularidad: 9,
    calificacion: 6.5
  },
  {
    id: 21,
    nombre: 'Venta de Electrodomésticos',
    categoria: 'Tecnología',
    direccion: 'Av. Alfonso Ugarte',
    seguridad: 3,
    popularidad: 9,
    calificacion: 6
  },
  {
    id: 22,
    nombre: 'Venta de Muebles',
    categoria: 'Hogar',
    direccion: 'Calle Alfredo Pascoe',
    seguridad: 6,
    popularidad: 6,
    calificacion: 6
  }
])

// Merge
function mergeSort(arr, key) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid), key)
  const right = mergeSort(arr.slice(mid), key)
  return merge(left, right, key)
}

function merge(left, right, key) {
  let result = []
  let i = 0,
    j = 0

  while (i < left.length && j < right.length) {
    if (left[i][key] > right[j][key]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

const ubicacionesDisponibles = computed(() =>
  [...new Set(lugares.value.map(l => l.direccion))].sort()
)

const lugaresOrdenados = computed(() => {
  const keyMap = {
    Seguridad: 'seguridad',
    Popularidad: 'popularidad',
    Calificación: 'calificacion'
  }

  const key = keyMap[criterioSeleccionado.value]

  let filtrados = ubicacionSeleccionada.value
    ? lugares.value.filter(l => l.direccion === ubicacionSeleccionada.value)
    : lugares.value

  return mergeSort(filtrados, key)
})

const guia = ref([
  {
    titulo: 'Evita calles poco transitadas',
    descripcion:
      'Siempre procura caminar por calles concurridas. La presencia de más personas reduce los riesgos.'
  },
  {
    titulo: 'Puntos de referencia seguros',
    descripcion:
      'Identifica previamente casetas policiales, centros de salud y puntos de información.'
  },
  {
    titulo: 'Lleva lo necesario',
    descripcion:
      'Evita portar objetos de mucho valor. Lleva lo justo para hacer tus compras.'
  },
  {
    titulo: 'Mantente comunicado',
    descripcion:
      'Asegúrate de que tu teléfono tenga batería y saldo para emergencias.'
  }
])
</script>

<style scoped>
.estilo-select .v-input__control {
  background-color: #eae4d5;
  border: 2px solid #b6b09f;
  color: #000000;
  border-radius: 8px;
}

.v-label {
  color: #000000 !important;
}

.v-select .v-field__input {
  color: #000000 !important;
}

.fondo-app {
  background-color: #f2f2f2;
  min-height: 100vh;
  padding-top: 20px;
}

.transition-card {
  transition: all 0.3s ease;
  background-color: #eae4d5;
  color: #000000;
}

.v-card-title,
.v-card-subtitle,
.v-card-text {
  color: #000000 !important;
}
</style>
