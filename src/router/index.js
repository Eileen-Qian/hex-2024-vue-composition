import { createRouter, createWebHistory } from 'vue-router'
import Week1View from '../views/Week1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/week1',
      name: 'week1',
      component: Week1View
    }
  ]
})

export default router
