<template>
  <svg viewBox="0 0 1280 720">
    <mask id="maskLeft">
      <rect x="-50%" width="100%" height="100%" fill="#fff" />
    </mask>
    <mask id="maskRight">
      <rect x="50%" width="100%" height="100%" fill="#fff" />
    </mask>
    <g font-size="150">
      <g mask="url(#maskLeft)" fill="#fff" class="left">
        <text y="120">XAquiKserit@</text>
        <text y="250">Mapa de la feria</text>
        <text y="380">16 de julio</text>
      </g>
      <g mask="url(#maskRight)" fill="#aaa" class="right">
        <text y="120">XAquiKserit@</text>
        <text y="250">Mapa de la feria</text>
        <text y="380">16 de julio</text>
      </g>
    </g>
  </svg>

  <div class="content">
    <section class="section">
      <div class="section-inner">
        <h1 class="title">Intro<br />duccion</h1>
        <p class="description">
          La feria 16 de Julio, situada en la ciudad de El Alto, Bolivia, es reconocida como una de
          las ferias más grandes y dinámicas de Sudamérica. Se extiende por varios kilómetros y
          acoge a miles de comerciantes y visitantes cada jueves y domingo, convirtiéndose en un
          núcleo económico, cultural y social de vital importancia para la región. Sin embargo, su
          gran extensión, densidad de puestos, y la escasa señalización hacen que la experiencia de
          navegación peatonal por la feria sea compleja, especialmente para visitantes primerizos,
          personas con discapacidad o adultos mayores. En este contexto, se evidencia la necesidad
          de una herramienta digital que facilite la orientación, exploración y desplazamiento
          dentro de la feria, permitiendo a los visitantes ubicar rutas peatonales seguras,
          identificar puntos de interés (puestos específicos, zonas de comida, servicios higiénicos,
          primeros auxilios, entre otros) y optimizar su tiempo dentro del espacio ferial. Una
          aplicación web para la gestión de rutas peatonales y zonas de interés en la feria 16 de
          Julio puede representar una solución innovadora a este reto urbano. Este tipo de
          herramienta no solo puede mejorar la experiencia del visitante, sino también contribuir al
          ordenamiento espacial, a la gestión inteligente de flujos de personas y al fortalecimiento
          de la identidad ferial. Además, puede ser una base útil para autoridades municipales o
          asociaciones de comerciantes que buscan digitalizar y mejorar la infraestructura de
          servicios dentro de la feria. La propuesta sugiere la implementación de funcionalidades
          como mapas interactivos, filtros de búsqueda por tipo de puesto, visualización de rutas
          seguras o accesibles, localización en tiempo real y la posibilidad de sugerir zonas nuevas
          o reportar puntos críticos. De este modo, la aplicación se convierte en una plataforma
          tanto informativa como participativa, abriendo un canal digital de interacción directa
          entre el visitante y la feria.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h1 class="title">Objetivo <br />General</h1>
        <p class="description">
          Desarrollar una aplicación web interactiva que permita gestionar y visualizar rutas
          peatonales y puntos de interés dentro de la feria 16 de Julio, con el fin de mejorar la
          orientación, seguridad y experiencia del visitante, promoviendo al mismo tiempo el
          ordenamiento y modernización del espacio ferial.
        </p>
      </div>
    </section>

    <div class="images">
      <ul class="slider">
        <li
          class="item"
          style="
            background-image: url('https://i.pinimg.com/736x/3f/d8/e8/3fd8e83dd3abedc5390f7efe51b27720.jpg');
          "
        >
          <div class="contentimage">
            <h2 class="titleimage">"Lossless Youths"</h2>
            <p class="descriptionimage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style="
            background-image: url('https://i.pinimg.com/736x/b0/0c/80/b00c809e553c6038ddf11f821421025a.jpg');
          "
        >
          <div class="contentimage">
            <h2 class="titleimage">"Estrange Bond"</h2>
            <p class="descriptionimage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style="
            background-image: url('https://i.pinimg.com/736x/24/45/b8/2445b8f19541641eca82f8d8c5efe368.jpg');
          "
        >
          <div class="contentimage">
            <h2 class="titleimage">"The Gate Keeper"</h2>
            <p class="descriptionimage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style="
            background-image: url('https://i.pinimg.com/736x/73/28/de/7328ded5cfdbe6f98beeb541063c3d08.jpg');
          "
        >
          <div class="contentimage">
            <h2 class="titleimage">"Last Trace Of Us"</h2>
            <p class="descriptionimage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style="
            background-image: url('https://i.pinimg.com/736x/a2/76/09/a276095010acc397fa28735360843750.jpg');
          "
        >
          <div class="contentimage">
            <h2 class="titleimage">"Urban Decay"</h2>
            <p class="descriptionimage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          class="item"
          style="
            background-image: url('https://i.pinimg.com/736x/66/49/4b/66494bbd8cfd428b43d1ed2901d7354f.jpg');
          "
        >
          <div class="contentimage">
            <h2 class="titleimage">"The Migration"</h2>
            <p class="descriptionimage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <nav class="nav">
        <ion-icon class="btn prev" name="arrow-back-outline"></ion-icon>
        <ion-icon class="btn next" name="arrow-forward-outline"></ion-icon>
      </nav>
    </div>

    <section class="section">
      <div class="section-inner">
        <h1 class="title">Objetivo <br />Específicos</h1>
        <p class="description">
          1. Diseñar e implementar un sistema de rutas peatonales optimizadas que considere factores
          como accesibilidad, seguridad y densidad de tráfico dentro de la feria. <br />2. Mapear y
          clasificar los puntos de interés más relevantes, incluyendo zonas de comida, servicios
          básicos, comercio especializado y áreas de descanso. <br />3. Desarrollar una interfaz
          interactiva y responsiva que permita al visitante visualizar su ubicación, buscar rutas,
          explorar categorías y recibir sugerencias de desplazamiento.<br />4. Implementar filtros y
          criterios de búsqueda avanzados, que permitan al visitante encontrar rápidamente lo que
          busca según ubicación, categoría de productos o nivel de congestión.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <h1 class="title">Definición<br />del Problema</h1>
        <p class="description">
          La feria 16 de Julio enfrenta un problema estructural relacionado con la desorganización
          espacial, la falta de señalización clara y la ausencia de herramientas tecnológicas que
          orienten a los visitantes dentro de su complejo entramado. Esta situación genera
          experiencias confusas, pérdida de tiempo, riesgos de extravío o accidentes, y una baja
          capacidad de respuesta ante emergencias. Además, limita la posibilidad de aprovechar
          eficientemente las oportunidades comerciales y culturales que la feria ofrece. Pese a su
          importancia económica y social, la feria aún no cuenta con una solución digital que
          permita gestionar de forma integral las rutas peatonales ni los puntos de interés
          distribuidos en su extenso territorio. Esto constituye una brecha tecnológica
          significativa, especialmente en un contexto donde la transformación digital urbana es cada
          vez más prioritaria.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.11.0/ScrollTrigger'

onMounted(() => {
  const slider = document.querySelector('.slider')

  function activate(e) {
    const items = document.querySelectorAll('.item')
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1])
  }

  document.addEventListener('click', activate, false)
  const tl = gsap
    .timeline({
      defaults: {
        duration: 2,
        yoyo: true,
        ease: 'power2.inOut',
      },
    })
    .fromTo(
      ['.left', '.right'],
      {
        svgOrigin: '640 500',
        skewY: (i) => [-30, 15][i],
        scaleX: (i) => [0.6, 0.85][i],
        x: 200,
      },
      {
        skewY: (i) => [-15, 30][i],
        scaleX: (i) => [0.85, 0.6][i],
        x: -200,
      },
    )
    .play(0.5)

  const tl2 = gsap.timeline()

  document.querySelectorAll('text').forEach((t, i) => {
    tl2.add(
      gsap.fromTo(
        t,
        {
          xPercent: -100,
          x: 700,
        },
        {
          duration: 1,
          xPercent: 0,
          x: 575,
          ease: 'sine.inOut',
        },
      ),
      (i % 3) * 0.2,
    )
  })

  window.onpointermove = (e) => {
    tl.pause()
    tl2.pause()
    gsap.to([tl, tl2], {
      duration: 2,
      ease: 'power4',
      progress: e.x / innerWidth,
    })
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  // Initialize scene, camera, and renderer
  const scene = new THREE.Scene()
  scene.background = null // Set to null for transparency

  // Set up camera with centered position
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, 5)
  camera.lookAt(0, 0, 0)

  // Set up renderer with transparency
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0) // Transparent background
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  document.body.appendChild(renderer.domElement)

  // Set canvas to appear above content
  const canvas = renderer.domElement
  canvas.style.position = 'fixed'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.zIndex = '10' // Higher than content
  canvas.style.pointerEvents = 'none' // Allow clicking through

  // Create an enhanced star texture for brighter, more distinct particles
  function createStarTexture() {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')

    // Create more detailed radial gradient for star with brighter core
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)') // Core
    gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.95)') // Near core - brighter
    gradient.addColorStop(0.3, 'rgba(200, 200, 255, 0.7)') // Middle - brighter
    gradient.addColorStop(0.6, 'rgba(140, 140, 230, 0.4)') // Outer middle - brighter
    gradient.addColorStop(1, 'rgba(40, 40, 120, 0)') // Edge

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 64, 64)

    // Add stronger cross shape for enhanced sparkle effect
    ctx.globalCompositeOperation = 'lighten'
    const linearGradient = ctx.createLinearGradient(32, 0, 32, 64)
    linearGradient.addColorStop(0, 'rgba(100, 100, 230, 0)')
    linearGradient.addColorStop(0.5, 'rgba(250, 250, 255, 0.7)') // Brighter center
    linearGradient.addColorStop(1, 'rgba(100, 100, 230, 0)')

    ctx.fillStyle = linearGradient
    ctx.fillRect(28, 0, 8, 64)

    // Horizontal line - brighter
    const horizontalGradient = ctx.createLinearGradient(0, 32, 64, 32)
    horizontalGradient.addColorStop(0, 'rgba(100, 100, 230, 0)')
    horizontalGradient.addColorStop(0.5, 'rgba(250, 250, 255, 0.7)') // Brighter center
    horizontalGradient.addColorStop(1, 'rgba(100, 100, 230, 0)')

    ctx.fillStyle = horizontalGradient
    ctx.fillRect(0, 28, 64, 8)

    const texture = new THREE.Texture(canvas)
    texture.needsUpdate = true
    return texture
  }

  // Create a group to hold the cube and its wireframe
  const cubeGroup = new THREE.Group()
  scene.add(cubeGroup)

  // Create higher-resolution cube geometry
  const geometry = new THREE.BoxGeometry(2, 2, 2, 4, 4, 4)

  // Create custom vertex shader with enhanced position and normal data
  const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

  // Create shader material with enhanced uniforms
  const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2(512, 512) },
    scrollProgress: { value: 0.0 }, // Track scroll progress
  }

  // Enhanced galaxy shader with nebula and color shifts
  const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform float scrollProgress;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void mainImage(out vec4 O, vec2 I) {
      vec2 r = iResolution.xy;
      vec2 z;
      vec2 i;
      vec2 f = I*(z+=4.-4.*abs(.7-dot(I=(I+I-r)/r.y, I)));
      
      // Add subtle movement to pattern
      float timeOffset = sin(iTime * 0.2) * 0.1;
      f.x += timeOffset;
      f.y -= timeOffset;
      
      // More iterations based on scroll progress for increasing detail
      float iterations = mix(8.0, 12.0, scrollProgress);
      
      for(O *= 0.; i.y++<iterations;
          O += (sin(f += cos(f.yx*i.y+i+iTime)/i.y+.7)+1.).xyyx
          * abs(f.x-f.y));
      
      O = tanh(7.*exp(z.x-4.-I.y*vec4(-1,1,2,0))/O);
      
      // Add pulsing effect
      float pulse = 1.0 + 0.2 * sin(iTime * 0.5);
      O.rgb *= pulse;
      
      // Add color shifting nebula effect
      float nebula = sin(I.x * 0.01 + iTime * 0.3) * sin(I.y * 0.01 - iTime * 0.2);
      nebula = abs(nebula) * 0.5;
      
      // Create shifting color palette that changes with scroll
      vec3 color1 = mix(vec3(0.1, 0.2, 0.8), vec3(0.8, 0.1, 0.5), scrollProgress); // Blue to purple
      vec3 color2 = mix(vec3(0.8, 0.2, 0.7), vec3(0.2, 0.8, 0.7), scrollProgress); // Purple to teal
      vec3 colorMix = mix(color1, color2, sin(iTime * 0.2) * 0.5 + 0.5);
      
      // Apply nebula color to darker areas
      O.rgb = mix(O.rgb, colorMix, nebula * (1.0 - length(O.rgb)));
  }
  
  void main() {
      // Map the position on the cube face to shader coordinates
      vec2 cubeUV = vUv * iResolution;
      
      vec4 fragColor;
      mainImage(fragColor, cubeUV);
      
      // Add depth effect based on normals and position
      float depthFactor = abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
      fragColor.rgb *= 0.7 + 0.3 * depthFactor;
      
      // Add edge glow - intensity increases with scroll
      float edge = 1.0 - max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) * 2.0;
      edge = pow(edge, 4.0);
      fragColor.rgb += edge * vec3(0.1, 0.2, 0.8) * (0.6 + scrollProgress * 0.4);
      
      // Boost brightness
      fragColor.rgb *= 2.0;
      
      gl_FragColor = fragColor;
  }
`

  // Create material with optimized settings for visibility
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: uniforms,
    transparent: true,
    opacity: 1.0,
    side: THREE.DoubleSide,
  })

  // Create cube mesh
  const cube = new THREE.Mesh(geometry, material)
  cube.castShadow = true
  cube.receiveShadow = true
  cubeGroup.add(cube)

  // Create wireframe for edges
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry, 10), // Lower threshold for more visible edges
    new THREE.LineBasicMaterial({
      color: 0x4488ff,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.1,
    }),
  )
  wireframe.scale.setScalar(1.001) // Slightly larger to prevent z-fighting
  cubeGroup.add(wireframe)

  // Helper function for smooth interpolation
  function lerp(start, end, amt) {
    return start * (1 - amt) + end * amt
  }

  // Enhanced particle system with zoom effect
  function createEnhancedParticles() {
    const particleSettings = {
      PARTICLE_COUNT: 2000, // More individual particles instead of connections
      PARTICLE_MOUSE_INFLUENCE: 0.0001, // Subtle mouse effect
      PARTICLE_REPULSION_RADIUS: 0.8,
      PARTICLE_REPULSION_STRENGTH: 0.00008,
      PARTICLE_CONNECTION_DISTANCE: 0.5, // Much smaller connection distance
      PARTICLE_DEPTH_RANGE: 12, // How far particles extend in Z-direction
    }

    const particles = new THREE.BufferGeometry()
    const particleCount = particleSettings.PARTICLE_COUNT
    const positions = new Float32Array(particleCount * 3)
    const originalPositions = new Float32Array(particleCount * 3) // Store original positions
    const velocities = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const colors = new Float32Array(particleCount * 3)
    const depths = new Float32Array(particleCount) // Store depth for zoom effect

    // Distribute particles in 3D volume with more depth variation
    for (let i = 0; i < particleCount; i++) {
      // Use spherical distribution for wider spread
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      // Create deeper z-range for zoom effect
      const radius = 3 + Math.random() * 3 // Base radius 3-6
      const depthExtension =
        Math.random() * particleSettings.PARTICLE_DEPTH_RANGE -
        particleSettings.PARTICLE_DEPTH_RANGE / 2

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi) + depthExtension

      // Store original positions for resetting
      originalPositions[i * 3] = positions[i * 3]
      originalPositions[i * 3 + 1] = positions[i * 3 + 1]
      originalPositions[i * 3 + 2] = positions[i * 3 + 2]

      // Store original depth for zoom calculation
      depths[i] = positions[i * 3 + 2]

      // Gentler velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.0004
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0004
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0002 // Less z movement

      // Size based on depth - farther particles are smaller
      const z = positions[i * 3 + 2]
      const normalizedDepth =
        (z + particleSettings.PARTICLE_DEPTH_RANGE / 2) / particleSettings.PARTICLE_DEPTH_RANGE
      sizes[i] = 0.008 + 0.03 * (1 - normalizedDepth) // Closer particles are larger

      // Color based on depth - create depth perception
      const brightness = 0.5 + 0.5 * (1 - normalizedDepth) // Brighter in front
      colors[i * 3] = 0.4 + 0.3 * brightness // R
      colors[i * 3 + 1] = 0.4 + 0.3 * brightness // G
      colors[i * 3 + 2] = 0.7 + 0.3 * brightness // B - bluer in front
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('originalPosition', new THREE.BufferAttribute(originalPositions, 3))
    particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particles.setAttribute('depth', new THREE.BufferAttribute(depths, 1))

    const particleTexture = createStarTexture()

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03, // Slightly larger individual particles
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      opacity: 0.9, // More visible individual particles
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true, // Important for size to change with distance
    })

    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Create very subtle constellation lines
    const constellationMaterial = new THREE.LineBasicMaterial({
      color: 0x3366ff,
      transparent: true,
      opacity: 0.08, // Lower opacity for subtler effect
      blending: THREE.AdditiveBlending,
    })

    const constellationGeometry = new THREE.BufferGeometry()
    const constellationSystem = new THREE.LineSegments(constellationGeometry, constellationMaterial)
    scene.add(constellationSystem)

    return {
      particleSystem,
      constellationSystem,
      settings: particleSettings,
    }
  }

  // Create enhanced particles
  const enhancedParticles = createEnhancedParticles()

  // Update particle zoom based on scroll
  function updateParticleZoom(scrollProgress) {
    if (!enhancedParticles || !enhancedParticles.particleSystem) return

    const particleSystem = enhancedParticles.particleSystem
    const positions = particleSystem.geometry.attributes.position.array
    const originalPositions = particleSystem.geometry.attributes.originalPosition.array
    const sizes = particleSystem.geometry.attributes.size.array
    const colors = particleSystem.geometry.attributes.color.array
    const particleCount = positions.length / 3

    // Create bell curve for zoom effect - matches cube zoom curve
    let zoomCurve
    if (scrollProgress < 0.5) {
      // First half - zoom in (0 to 1)
      zoomCurve = gsap.utils.clamp(0, 1, scrollProgress * 2)
    } else {
      // Second half - zoom out (1 to 0)
      zoomCurve = gsap.utils.clamp(0, 1, 2 - scrollProgress * 2)
    }

    // Apply easing to make the zoom feel more natural
    zoomCurve = gsap.parseEase('power2.inOut')(zoomCurve)

    // Enhanced particle zoom effect that matches cube zoom
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Zoom effect - particles move outward during extreme zoom to create "flying through space" effect
      const zPosition = originalPositions[i3 + 2]
      const radialPosition = Math.sqrt(
        originalPositions[i3] * originalPositions[i3] +
          originalPositions[i3 + 1] * originalPositions[i3 + 1],
      )

      // Push particles outward during zoom
      const pushFactor = 1 + zoomCurve * 1.5 // Max 2.5x distance at peak zoom
      positions[i3] = originalPositions[i3] * pushFactor
      positions[i3 + 1] = originalPositions[i3 + 1] * pushFactor

      // Z-position is special - particles move toward camera during zoom
      let targetZ = zPosition
      if (Math.abs(zPosition) > 1) {
        // Distant particles move toward camera
        targetZ = zPosition * (1 - zoomCurve * 0.5)
      } else {
        // Close particles move past camera
        targetZ = zPosition - zoomCurve * Math.sign(zPosition) * 2
      }

      // Apply smooth transition
      positions[i3 + 2] = lerp(positions[i3 + 2], targetZ, 0.1)

      // Size increases dramatically during zoom
      const distFromCamera = Math.abs(positions[i3 + 2])
      const closenessFactor = Math.max(0, 1 - distFromCamera / 5)
      const sizeBoost = 1 + zoomCurve * 4.0 // Much larger at max zoom
      sizes[i] = (0.008 + 0.03 * closenessFactor) * sizeBoost

      // Brighten particles during zoom
      const brightnessBoost = zoomCurve * 0.3 // Additional brightness at max zoom
      const baseBrightness = 0.5 + closenessFactor * 0.5
      const brightness = baseBrightness + brightnessBoost

      colors[i3] = 0.4 + 0.3 * brightness // R
      colors[i3 + 1] = 0.4 + 0.3 * brightness // G
      colors[i3 + 2] = 0.7 + 0.3 * brightness // B
    }

    particleSystem.geometry.attributes.position.needsUpdate = true
    particleSystem.geometry.attributes.size.needsUpdate = true
    particleSystem.geometry.attributes.color.needsUpdate = true
  }

  // Add special particle effects based on interactions
  function createParticleEffects() {
    const effects = {
      // Create burst of particles from the cube
      emitFromCube: function (count = 15) {
        if (!enhancedParticles || !enhancedParticles.particleSystem) return

        const particleSystem = enhancedParticles.particleSystem
        const positions = particleSystem.geometry.attributes.position.array
        const velocities = particleSystem.geometry.attributes.velocity.array
        const sizes = particleSystem.geometry.attributes.size.array
        const colors = particleSystem.geometry.attributes.color.array
        const particleCount = positions.length / 3

        // Get random vertices from cube
        const cubeVertices = []
        const positionAttr = cube.geometry.attributes.position

        for (let i = 0; i < positionAttr.count; i++) {
          cubeVertices.push(
            new THREE.Vector3(positionAttr.getX(i), positionAttr.getY(i), positionAttr.getZ(i)),
          )
        }

        // Emit particles from random vertices
        for (let i = 0; i < count; i++) {
          // Select random particles to repurpose
          const particleIndex = Math.floor(Math.random() * particleCount)
          const i3 = particleIndex * 3

          // Get random vertex
          const vertexIndex = Math.floor(Math.random() * cubeVertices.length)
          const vertex = cubeVertices[vertexIndex].clone()

          // Apply cube's transformation
          vertex.applyMatrix4(cube.matrixWorld)

          // Position particle at vertex
          positions[i3] = vertex.x
          positions[i3 + 1] = vertex.y
          positions[i3 + 2] = vertex.z

          // Set outward velocity
          const speed = 0.02 + Math.random() * 0.04
          velocities[i3] = (Math.random() - 0.5) * speed
          velocities[i3 + 1] = (Math.random() - 0.5) * speed
          velocities[i3 + 2] = (Math.random() - 0.5) * speed

          // Increase size for visibility
          sizes[particleIndex] = 0.03 + Math.random() * 0.03

          // Brighten color
          colors[i3] = 0.8 + Math.random() * 0.2 // R
          colors[i3 + 1] = 0.8 + Math.random() * 0.2 // G
          colors[i3 + 2] = 1.0 // B
        }

        particleSystem.geometry.attributes.position.needsUpdate = true
        particleSystem.geometry.attributes.velocity.needsUpdate = true
        particleSystem.geometry.attributes.size.needsUpdate = true
        particleSystem.geometry.attributes.color.needsUpdate = true
      },

      // Create whirlpool effect around cube
      createWhirlpool: function (duration = 2.0) {
        if (!enhancedParticles || !enhancedParticles.particleSystem) return

        const particleSystem = enhancedParticles.particleSystem
        const positions = particleSystem.geometry.attributes.position.array
        const velocities = particleSystem.geometry.attributes.velocity.array
        const particleCount = positions.length / 3

        // Store original state
        const originalVelocities = new Float32Array(velocities)

        // Start animation
        let startTime = performance.now()

        function animateWhirlpool() {
          const elapsed = (performance.now() - startTime) / 1000
          const progress = Math.min(elapsed / duration, 1.0)

          if (progress < 1.0) {
            // Continue animation
            for (let i = 0; i < particleCount; i++) {
              const i3 = i * 3

              // Get vector from cube to particle
              const dx = positions[i3] - cubeGroup.position.x
              const dy = positions[i3 + 1] - cubeGroup.position.y
              const dz = positions[i3 + 2] - cubeGroup.position.z

              // Distance from cube
              const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

              if (distance < 8) {
                // Create whirlpool effect - spiral around cube
                const strength = (1 - Math.min(distance / 8, 1)) * 0.001
                const angle = Math.atan2(dy, dx) + 0.05 // Small increment for spiral

                // Apply spiral force
                const fx = -dy * strength
                const fy = dx * strength
                const fz = -0.0002 * distance // Pull slightly toward cube

                velocities[i3] = originalVelocities[i3] + fx
                velocities[i3 + 1] = originalVelocities[i3 + 1] + fy
                velocities[i3 + 2] = originalVelocities[i3 + 2] + fz
              }
            }

            particleSystem.geometry.attributes.velocity.needsUpdate = true
            requestAnimationFrame(animateWhirlpool)
          } else {
            // Reset velocities to original
            for (let i = 0; i < velocities.length; i++) {
              velocities[i] = originalVelocities[i]
            }
            particleSystem.geometry.attributes.velocity.needsUpdate = true
          }
        }

        animateWhirlpool()
      },

      // Pulse wave emanating from cube
      emitPulseWave: function () {
        if (!enhancedParticles || !enhancedParticles.particleSystem) return

        const particleSystem = enhancedParticles.particleSystem
        const positions = particleSystem.geometry.attributes.position.array
        const sizes = particleSystem.geometry.attributes.size.array
        const colors = particleSystem.geometry.attributes.color.array
        const particleCount = positions.length / 3

        // Store original sizes
        const originalSizes = new Float32Array(sizes)
        const originalColors = new Float32Array(colors)

        // Wave parameters
        const waveSpeed = 3 // Units per second
        const waveDuration = 2.5 // Seconds
        const waveWidth = 1.0 // Width of the wave pulse

        // Animation
        let startTime = performance.now()

        function animatePulseWave() {
          const elapsed = (performance.now() - startTime) / 1000
          const waveDistance = elapsed * waveSpeed

          if (elapsed < waveDuration) {
            for (let i = 0; i < particleCount; i++) {
              const i3 = i * 3

              // Distance from cube center
              const dx = positions[i3] - cubeGroup.position.x
              const dy = positions[i3 + 1] - cubeGroup.position.y
              const dz = positions[i3 + 2] - cubeGroup.position.z
              const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

              // Check if particle is in the wave front
              const distFromWave = Math.abs(distance - waveDistance)

              if (distFromWave < waveWidth) {
                // Calculate wave intensity (strongest at center of wave)
                const waveIntensity = 1 - distFromWave / waveWidth

                // Increase size at wave front
                sizes[i] = originalSizes[i] * (1 + waveIntensity * 2)

                // Change color at wave front - blue/purple glow
                colors[i3] = originalColors[i3] + waveIntensity * 0.4 // R
                colors[i3 + 1] = originalColors[i3 + 1] + waveIntensity * 0.2 // G
                colors[i3 + 2] = originalColors[i3 + 2] + waveIntensity * 0.7 // B
              } else {
                // Reset to original properties
                sizes[i] = originalSizes[i]
                colors[i3] = originalColors[i3]
                colors[i3 + 1] = originalColors[i3 + 1]
                colors[i3 + 2] = originalColors[i3 + 2]
              }
            }

            particleSystem.geometry.attributes.size.needsUpdate = true
            particleSystem.geometry.attributes.color.needsUpdate = true
            requestAnimationFrame(animatePulseWave)
          } else {
            // Reset to original values
            for (let i = 0; i < particleCount; i++) {
              const i3 = i * 3
              sizes[i] = originalSizes[i]
              colors[i3] = originalColors[i3]
              colors[i3 + 1] = originalColors[i3 + 1]
              colors[i3 + 2] = originalColors[i3 + 2]
            }

            particleSystem.geometry.attributes.size.needsUpdate = true
            particleSystem.geometry.attributes.color.needsUpdate = true
          }
        }

        animatePulseWave()
      },
    }

    return effects
  }

  // Initialize particle effects
  const particleEffects = createParticleEffects()

  // Add lighting for better 3D perception
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
  directionalLight.position.set(5, 10, 7)
  directionalLight.castShadow = true
  scene.add(directionalLight)

  const pointLight = new THREE.PointLight(0x3366ff, 1.5, 20)
  pointLight.position.set(-3, 2, 5)
  scene.add(pointLight)

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  // Set up mouse interaction with improved stability
  const mouse = new THREE.Vector2(0, 0)

  window.addEventListener('mousemove', (event) => {
    // Update mouse position for cube rotation
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    // Only apply mouse rotation when not scrolling
    if (!ScrollTrigger.isScrolling()) {
      gsap.to(cubeGroup.rotation, {
        x: '+=' + (mouse.y * 0.03 - cubeGroup.rotation.x * 0.02),
        y: '+=' + (mouse.x * 0.03 - cubeGroup.rotation.y * 0.02),
        duration: 1,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
  })

  // Update click handler to include particle effects
  document.addEventListener('click', () => {
    // Random animation on click
    gsap.to(cubeGroup.rotation, {
      x: cubeGroup.rotation.x + Math.PI * 0.25 * (Math.random() - 0.5),
      y: cubeGroup.rotation.y + Math.PI * 0.25 * (Math.random() - 0.5),
      z: cubeGroup.rotation.z + Math.PI * 0.25 * (Math.random() - 0.5),
      duration: 1,
      ease: 'back.out(1.5)',
    })

    // Choose a random effect
    const effectChoice = Math.floor(Math.random() * 3)
    switch (effectChoice) {
      case 0:
        particleEffects.emitFromCube()
        break
      case 1:
        particleEffects.createWhirlpool()
        break
      case 2:
        particleEffects.emitPulseWave()
        break
    }
  })

  // Text animation function
  function animateTextElements() {
    // Get all section titles and descriptions
    const titles = document.querySelectorAll('.title')
    const descriptions = document.querySelectorAll('.description')

    // Create a timeline for each section
    document.querySelectorAll('.section').forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(
        titles[index],
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        0,
      )

      tl.to(
        descriptions[index],
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.2,
        },
        0,
      )

      // Add parallax effect
      tl.to(
        cubeGroup.position,
        {
          z: -1 * index, // Move cube deeper with each section
          duration: 1,
        },
        0,
      )
    })
  }

  // Create enhanced rotation timeline with extreme zoom effect
  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.content',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5,
      markers: false,
      onUpdate: (self) => {
        // Update scroll progress uniform in shader
        uniforms.scrollProgress.value = self.progress

        // Create bell curve for zoom effect - max zoom at middle of scroll
        let zoomCurve
        if (self.progress < 0.5) {
          // First half - zoom in (0 to 1)
          zoomCurve = gsap.utils.clamp(0, 1, self.progress * 2)
        } else {
          // Second half - zoom out (1 to 0)
          zoomCurve = gsap.utils.clamp(0, 1, 2 - self.progress * 2)
        }

        // Apply easing to make the zoom feel more natural
        zoomCurve = gsap.parseEase('power2.inOut')(zoomCurve)

        // Update FOV based on zoom curve - dramatic narrow FOV at max zoom
        const minFOV = 20 // Very narrow FOV at max zoom
        const maxFOV = 60 // Normal FOV at start/end
        camera.fov = maxFOV - (maxFOV - minFOV) * zoomCurve
        camera.updateProjectionMatrix()

        // Update cube scale - make it slightly larger at max zoom
        const maxScale = 1.2
        cubeGroup.scale.setScalar(1 + (maxScale - 1) * zoomCurve)
      },
    },
  })

  // Extreme zoom effect as we scroll
  scrollTimeline
    .to(cubeGroup.rotation, {
      x: Math.PI * 1.2,
      y: Math.PI * 2,
      z: Math.PI * 0.3,
      ease: 'power2.inOut',
      immediateRender: false,
    })
    .to(
      camera.position,
      {
        z: 0.8, // Extreme zoom - gets very close to the cube
        y: 0.2,
        x: 0,
        ease: 'power2.inOut',
      },
      0.5, // Place this at the middle of the timeline
    )
    .to(
      camera.position,
      {
        z: 4.0, // Zoom back out
        y: 0,
        x: 0,
        ease: 'power2.inOut',
      },
      1.0, // Place this at the end of the timeline
    )
    .to(
      {},
      {
        duration: 1,
        onUpdate: function () {
          camera.lookAt(cubeGroup.position)
        },
      },
      0,
    )

  // Add ambient light adjustment based on scroll
  scrollTimeline.to(
    ambientLight,
    {
      intensity: 1.2, // Increase ambient light as we scroll
      ease: 'power1.inOut',
    },
    0,
  )

  // Animation loop with enhanced zoom effect and constellations
  function animate(timestamp) {
    requestAnimationFrame(animate)

    const timeSeconds = timestamp * 0.001

    // Update time uniform for galaxy shader
    uniforms.iTime.value = timeSeconds

    // Add subtle continuous rotation to cube when not scrolling
    if (!ScrollTrigger.isScrolling()) {
      cubeGroup.rotation.x += 0.0005
      cubeGroup.rotation.y += 0.0008
    }

    // Update particle animation with zoom effect
    if (enhancedParticles && enhancedParticles.particleSystem) {
      const particleSystem = enhancedParticles.particleSystem
      const constellationSystem = enhancedParticles.constellationSystem
      const settings = enhancedParticles.settings

      const positions = particleSystem.geometry.attributes.position.array
      const velocities = particleSystem.geometry.attributes.velocity.array
      const colors = particleSystem.geometry.attributes.color.array
      const particleCount = positions.length / 3

      // Get current scroll progress for zoom effect
      const scrollProgress = uniforms.scrollProgress.value

      // Update particle zoom based on scroll
      updateParticleZoom(scrollProgress)

      // Create arrays for constellation lines
      const connectedPoints = []

      // Pulse factor
      const pulseFactor = 1.0 + 0.1 * Math.sin(timeSeconds * 0.5)

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Apply gentle movement
        positions[i3] += velocities[i3]
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2]

        // Apply subtle mouse influence
        positions[i3] += (mouse.x * 3 - positions[i3]) * settings.PARTICLE_MOUSE_INFLUENCE
        positions[i3 + 1] += (mouse.y * 3 - positions[i3 + 1]) * settings.PARTICLE_MOUSE_INFLUENCE

        // Get distance from center for boundary check
        const distFromCenter = Math.sqrt(
          positions[i3] * positions[i3] +
            positions[i3 + 1] * positions[i3 + 1] +
            positions[i3 + 2] * positions[i3 + 2],
        )

        // Reset particles if they go too far
        if (distFromCenter > 10) {
          // Create new position on sphere
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(2 * Math.random() - 1)
          const radius = 5 + Math.random() * 2

          positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
          positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
          positions[i3 + 2] = radius * Math.cos(phi) * (1 - scrollProgress * 0.3) // Closer at higher scroll

          // Reset velocity
          velocities[i3] = (Math.random() - 0.5) * 0.0004
          velocities[i3 + 1] = (Math.random() - 0.5) * 0.0004
          velocities[i3 + 2] = (Math.random() - 0.5) * 0.0002
        }

        // Create minimal constellation connections - only very close particles
        if (i % 50 === 0 && scrollProgress > 0.6) {
          // Much fewer connections, only at deep scroll
          // Connect only to very close particles
          for (let j = i + 1; j < Math.min(i + 100, particleCount); j += 10) {
            const j3 = j * 3
            const dx = positions[i3] - positions[j3]
            const dy = positions[i3 + 1] - positions[j3 + 1]
            const dz = positions[i3 + 2] - positions[j3 + 2]
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

            // Significantly smaller connection distance
            const connectionThreshold = 0.5

            if (distance < connectionThreshold) {
              // Only connect particles that are in front of camera
              if (positions[i3 + 2] < 3 && positions[j3 + 2] < 3) {
                connectedPoints.push(
                  positions[i3],
                  positions[i3 + 1],
                  positions[i3 + 2],
                  positions[j3],
                  positions[j3 + 1],
                  positions[j3 + 2],
                )
              }
            }
          }
        }
      }

      // Update constellation lines
      const constellationGeometry = constellationSystem.geometry
      constellationGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(connectedPoints, 3),
      )
      constellationGeometry.attributes.position.needsUpdate = true

      // Very subtle constellation effect that only appears when deeply scrolled
      constellationSystem.material.opacity = Math.max(0, scrollProgress - 0.6) * 0.15

      particleSystem.geometry.attributes.position.needsUpdate = true
    }

    renderer.render(scene, camera)
  }

  // Initialize text animations when page loads
  window.addEventListener('DOMContentLoaded', () => {
    animateTextElements()
  })

  // Start animation loop
  animate(0)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Boldonse&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@100..900&display=swap');
svg {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  background: #000;
  overflow: hidden;
  width: 100%;
  height: 60vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  background-color: var(--color-primary);
  color: var(--color-text);
  overflow-x: hidden;
  line-height: 1.5;
  place-items: center;
  height: 100vh;
  display: grid;
}

.images {
  position: relative;
  width: 100%;
  height: 60vh;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.item {
  width: 200px;
  height: 300px;
  list-style-type: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(255, 255, 255, 0.3) inset;
  transition:
    transform 0.1s,
    left 0.75s,
    top 0.75s,
    width 0.75s,
    height 0.75s;

  &:nth-child(1),
  &:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
  }

  &:nth-child(3) {
    left: 50%;
  }
  &:nth-child(4) {
    left: calc(50% + 220px);
  }
  &:nth-child(5) {
    left: calc(50% + 440px);
  }
  &:nth-child(6) {
    left: calc(50% + 660px);
    opacity: 0;
  }
}

.contentimage {
  width: min(30vw, 400px);
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  font:
    400 0.85rem helvetica,
    sans-serif;
  color: white;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: none;

  & .titleimage {
    font-family: 'arial-black';
    text-transform: uppercase;
  }

  & .descriptionimage {
    line-height: 1.7;
    margin: 1rem 0 1.5rem;
    font-size: 0.8rem;
  }

  & button {
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
    border: 2px solid white;
    border-radius: 0.25rem;
    padding: 0.75rem;
    cursor: pointer;
  }
}

.item:nth-of-type(2) .content {
  display: block;
  animation: show 0.75s ease-in-out 0.3s forwards;
}

@keyframes show {
  0% {
    filter: blur(5px);
    transform: translateY(calc(-50% + 75px));
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

.nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  user-select: none;

  & .btn {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(0, 0, 0, 0.6);
    margin: 0 0.25rem;
    padding: 0.75rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

@media (width > 650px) and (width < 900px) {
  .content {
    & .titleimage {
      font-size: 1rem;
    }
    & .descriptionimage {
      font-size: 0.7rem;
    }
    & button {
      font-size: 0.7rem;
    }
  }
  .item {
    width: 160px;
    height: 270px;

    &:nth-child(3) {
      left: 50%;
    }
    &:nth-child(4) {
      left: calc(50% + 170px);
    }
    &:nth-child(5) {
      left: calc(50% + 340px);
    }
    &:nth-child(6) {
      left: calc(50% + 510px);
      opacity: 0;
    }
  }
}

@media (width < 650px) {
  .content {
    & .titleimage {
      font-size: 0.9rem;
    }
    & .descriptionimage {
      font-size: 0.65rem;
    }
    & button {
      font-size: 0.7rem;
    }
  }
  .item {
    width: 130px;
    height: 220px;

    &:nth-child(3) {
      left: 50%;
    }
    &:nth-child(4) {
      left: calc(50% + 140px);
    }
    &:nth-child(5) {
      left: calc(50% + 280px);
    }
    &:nth-child(6) {
      left: calc(50% + 420px);
      opacity: 0;
    }
  }
}

/* Canvas styling */
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none; /* Allow clicks to pass through to content */
}

/* Content positioned above canvas */
.content {
  position: relative;
  z-index: 2;
}

.section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.section-inner {
  width: 100%;
  padding: 0 var(--panel-padding);
  max-width: 1600px;
  margin: 0 auto;
  pointer-events: auto; /* Ensure clickable */
}

.title {
  font-family: var(--font-display);
  font-size: var(--text-mega);
  line-height: 1.2;
  margin-top: var(--space-8);
  margin-bottom: var(--space-6);
  font-weight: 700;
  opacity: 0; /* For GSAP animation */
  transform: translateY(50px); /* Initial state for animation */
  text-transform: uppercase;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.description {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  max-width: 1600px;
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
  opacity: 0; /* For GSAP animation */
  transform: translateY(30px); /* Initial state for animation */
  color: var(--color-text-muted);
  font-weight: 300;
}
</style>
