<template>
  <v-app>
    <!-- AppBar -->
    <v-app-bar color="#E9E4DA" elevation="1">
      <v-toolbar-title class="font-logo text-xl text-gray-800">XaquiKserita</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs bg-color="#D8CFC4" class="rounded-xl px-2" slider-color="transparent">
        <v-tab
          v-for="t in tabs"
          :key="t.label"
          class="text-gray-700 text-capitalize hover-tab"
          @click="goToRoute(t.path)"
        >
          {{ t.label }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Contenido dinámico por ruta -->
    <v-main>
      <v-container class="mt-10">
        <router-view />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="#D8CFC4" class="text-center text-gray-700 font-body">
      <v-col>&copy; 2025 XaquiKserita · Proyecto Análisis de Algoritmos WORKSHOP 2025</v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const tabs = [
  { label: 'Inicio', path: '/' },
  { label: 'Algoritmo', path: '/algoritmo' },
  { label: 'Lugares de interes', path: '/lugares' },
]

function goToRoute(path) {
  router.push(path)
}
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
  background-color: #e6ded3 !important;
  border-radius: 12px;
  transition: 0.3s ease;
}

.text-gold {
  color: #b99a63;
}
</style>
