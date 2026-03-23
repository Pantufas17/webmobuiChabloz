import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TemperatureView from './views/TemperatureView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/temperature', component: TemperatureView }
  ]
})

export default router