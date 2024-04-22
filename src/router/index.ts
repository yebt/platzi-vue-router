import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // modo de historial en la navegación
  history: createWebHistory(),
  // Lsita de rutas
  routes: [
    // referencia sincrona
    { path: '/', name: 'home', component: HomeView }, // Sync
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') }, // Async
    {
      path: '/chat',
      name: 'chats',
      component: () => import('@/views/ChatsView.vue'),
      children: [
        //
        { path: ':chatId', name: 'chat', component: () => import('@/views/ChatView.vue') }
      ]
    }
  ]
})

export default router
