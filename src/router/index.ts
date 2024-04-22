import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/404View.vue'
const router = createRouter({
  // modo de historial en la navegación
  history: createWebHashHistory(),
  // Lsita de rutas
  routes: [
    { path: '/404', component: NotFound },
    { path: '/:catchAll(.*)*', redirect: '/404' }, // redirect to 404
    // referencia sincrona
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: ['/myhome'],
      meta: {
        requiresAuth: false
      }
    }, // Sync
    { path: '/home', redirect: '/' },
    {
      path: '/session',
      name: 'session',
      component: () => import('@/views/SessionView.vue'),
      children: [
        {
          path: '/',
          components: {
            default: () => import('@/views/LoginView.vue'),
            register: () => import('@/views/RegisterView.vue')
          }
        }
      ]
    },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') }, // Async
    {
      path: '/chat',
      name: 'chats',
      component: () => import('@/views/ChatsView.vue'),
      children: [
        //
        {
          path: ':chatId(\\d+)' /* Regular expression to use just numbers */,
          name: 'chat',
          component: () => import('@/views/ChatView.vue'),
          // props: true // use all params and send like props
          // props: {
          //   chatId: '1' // use a constant
          // }
          props: (route) => {
            return { chatId: route.params.chatId } // return the specific params
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// GUARDS
router.beforeEach((to, from) => {
  // if (to.meta?.requiresAuth) {
  //   console.log(to.path, 'Requires Auth')
  //   return { name: 'session' }
  // }
  // if (to.name === 'home') return { name: 'about' } // redirect
  // return true // next()
  // return {} // next()
})
//
export default router
