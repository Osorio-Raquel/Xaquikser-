<template>
  <v-app>
    <!-- AppBar -->
    <v-app-bar color="#E9E4DA" elevation="1">
      <v-toolbar-title class="font-logo text-xl text-gray-800">XaquiKserita</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs v-model="tab" bg-color="#D8CFC4" class="rounded-xl px-2" slider-color="transparent">
        <v-tab
          v-for="t in tabs"
          :key="t"
          class="text-gray-700 text-capitalize hover-tab"
        >
          {{ t }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Banner con carrusel y título -->
    <v-container class="mt-4">
      <v-row class="d-flex align-center">
        <!-- Carrusel -->
        <v-col cols="12" md="6">
          <v-carousel
            hide-delimiters
            height="300"
            show-arrows="hover"
            cycle
            interval="4000"
            class="rounded-xl"
          >
            <v-carousel-item
              v-for="(item, i) in images"
              :key="i"
              :src="item"
              cover
            />
          </v-carousel>
        </v-col>

        <!-- Nombre del proyecto -->
        <v-col cols="12" md="6" class="text-center text-md-start px-6">
          <h1 class="text-3xl text-gray-800 font-logo mb-2">XaquiKserita</h1>
          <p class="text-lg text-gray-700 font-body">
            cin&lt;&lt;chance
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contenido principal -->
    <v-main>
      <v-container class="mt-10">
        <transition-group name="fade-slide" tag="div">
          <v-card
            v-for="(section, index) in secciones"
            :key="section.titulo"
            class="mb-6 py-4 px-6 rounded-xl shadow-md"
            color="#F9F8F6"
            elevation="2"
          >
            <v-card-title class="text-xl text-gray-800 font-bold">
              <v-icon left class="me-2 text-gold">mdi-book-open-page-variant</v-icon>
              {{ section.titulo }}
            </v-card-title>
            <v-card-text
              class="text-gray-700 font-body"
              v-html="section.texto"
            ></v-card-text>
          </v-card>
        </transition-group>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="#D8CFC4" class="text-center text-gray-700 font-body">
      <v-col>&copy; 2025 XaquiKserita · Proyecto Analisis de Algoritmos WORKSHOP 2025</v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref(null)
const tabs = ['Inicio', 'Objetivo', 'Fundamento', 'Propuesta', 'Contacto']

const secciones = [
  {
    titulo: 'Introducción',
    texto: `La feria 16 de Julio, situada en la ciudad de El Alto, Bolivia, es reconocida como una de las ferias más grandes y dinámicas de Sudamérica. Se extiende por varios kilómetros y acoge a miles de comerciantes y visitantes cada jueves y domingo, convirtiéndose en un núcleo económico, cultural y social de vital importancia para la región. Sin embargo, su gran extensión, densidad de puestos, y la escasa señalización hacen que la experiencia de navegación peatonal por la feria sea compleja, especialmente para visitantes primerizos, personas con discapacidad o adultos mayores.

En este contexto, se evidencia la necesidad de una herramienta digital que facilite la orientación, exploración y desplazamiento dentro de la feria, permitiendo a los visitantes ubicar rutas peatonales seguras, identificar puntos de interés (puestos específicos, zonas de comida, servicios higiénicos, primeros auxilios, entre otros) y optimizar su tiempo dentro del espacio ferial.

Una aplicación web para la gestión de rutas peatonales y zonas de interés en la feria 16 de Julio puede representar una solución innovadora a este reto urbano. Este tipo de herramienta no solo puede mejorar la experiencia del visitante, sino también contribuir al ordenamiento espacial, a la gestión inteligente de flujos de personas y al fortalecimiento de la identidad ferial. Además, puede ser una base útil para autoridades municipales o asociaciones de comerciantes que buscan digitalizar y mejorar la infraestructura de servicios dentro de la feria.

La propuesta sugiere la implementación de funcionalidades como mapas interactivos, filtros de búsqueda por tipo de puesto, visualización de rutas seguras o accesibles, localización en tiempo real y la posibilidad de sugerir zonas nuevas o reportar puntos críticos. De este modo, la aplicación se convierte en una plataforma tanto informativa como participativa, abriendo un canal digital de interacción directa entre el visitante y la feria.`
  },
  {
    titulo: 'Objetivo General',
    texto: `Desarrollar una aplicación web interactiva que permita gestionar y visualizar rutas peatonales y puntos de interés dentro de la feria 16 de Julio, con el fin de mejorar la orientación, seguridad y experiencia del visitante, promoviendo al mismo tiempo el ordenamiento y modernización del espacio ferial.`
  },
  {
  titulo: 'Objetivos Específicos',
  texto: `
<ol>
  <li>Diseñar e implementar un sistema de rutas peatonales optimizadas que considere factores como accesibilidad, seguridad y densidad de tráfico dentro de la feria.</li>
  <li>Mapear y clasificar los puntos de interés más relevantes, incluyendo zonas de comida, servicios básicos, comercio especializado y áreas de descanso.</li>
  <li>Desarrollar una interfaz interactiva y responsiva que permita al visitante visualizar su ubicación, buscar rutas, explorar categorías y recibir sugerencias de desplazamiento.</li>
  <li>Implementar filtros y criterios de búsqueda avanzados, que permitan al visitante encontrar rápidamente lo que busca según ubicación, categoría de productos o nivel de congestión.</li>
</ol>
`
},
  {
    titulo: 'Definición del Problema',
    texto: `La feria 16 de Julio enfrenta un problema estructural relacionado con la desorganización espacial, la falta de señalización clara y la ausencia de herramientas tecnológicas que orienten a los visitantes dentro de su complejo entramado. Esta situación genera experiencias confusas, pérdida de tiempo, riesgos de extravío o accidentes, y una baja capacidad de respuesta ante emergencias. Además, limita la posibilidad de aprovechar eficientemente las oportunidades comerciales y culturales que la feria ofrece.

Pese a su importancia económica y social, la feria aún no cuenta con una solución digital que permita gestionar de forma integral las rutas peatonales ni los puntos de interés distribuidos en su extenso territorio. Esto constituye una brecha tecnológica significativa, especialmente en un contexto donde la transformación digital urbana es cada vez más prioritaria.`
  }
]


const images = [
  'https://pxcdn.reduno.com.bo/reduno/032024/1709736287672.webp?cw=800&ch=450&extw=jpg',
  'https://scontent.flpb2-1.fna.fbcdn.net/v/t1.6435-9/75552792_242806090036651_4742061374195105792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2285d6&_nc_ohc=jfpvPWMMLHYQ7kNvwGKDPjo&_nc_oc=AdkIdp7kK0S0S2sU39dPRCve5gko7kNE5dAQx_S8jR15C1ItxcqAbToJFzIw1yaNLy4&_nc_zt=23&_nc_ht=scontent.flpb2-1.fna&_nc_gid=9AFoWOf18zW22YP4PeCEpA&oh=00_AfLd4yy1FFIUypmyqkUDhtrIaJWv8yQMBj9yTSmaazXA8Q&oe=6848DE30',
  'https://abi.bo/images/2024/Diciembre/12/FAIR_1.png',
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caviar+Dreams&display=swap');

.font-logo {
  font-family: 'Caviar Dreams', sans-serif;
  font-weight: 600;
}

.font-body {
  font-family: 'Caviar Dreams', sans-serif;
}

.hover-tab:hover {
  background-color: #E6DED3 !important;
  border-radius: 12px;
  transition: 0.3s ease;
}

.text-gold {
  color: #B99A63;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.7s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
