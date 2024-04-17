import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // modo de historial en la navegación
  history: createWebHistory(),
  // Lsita de rutas
  routes: [
    // referencia sincrona
    { path: '/', component: HomeView }, // Sync
    { path: '/about', component: () => import('@/views/AboutView.vue') }, // Async
    { path: '/chat', component: () => import('@/views/ChatView.vue') },
    { path: '/chat/:chatId', component: () => import('@/views/ChatView.vue') }
  ]
})

export default router
