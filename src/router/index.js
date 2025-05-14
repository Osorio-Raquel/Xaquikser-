import { createRouter, createWebHistory } from 'vue-router'
import LugaresView from '../views/LugaresView.vue'
import AlgoritmoView from '../views/AlgoritmoView.vue'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioView,
    },
    {
      path: '/algoritmo',
      name: 'algoritmo',
      component: AlgoritmoView,
    },
    {
      path: '/lugares',
      name: 'lugares',
      component: LugaresView,
    },
  ],
})

export default router
