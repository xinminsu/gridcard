import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '@/views/HomeView.vue'
//import Cards from '@/views/Cards.vue'
import GridCards from '@/views/GridCards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GridCards
    }
  ]
})

export default router
