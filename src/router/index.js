import { createRouter, createWebHistory } from 'vue-router'
import isRegister from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'isRegister',
      component: isRegister
    },
    {
      path: '/produtos',
      name: 'products',
      //meta: { requiresAuth: true }, //requer autenticação
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Products.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = localStorage.getItem('auth_token') !== null
//   if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
//     next({
//       path: '/',
//       query: { errorMessage: 'Faça login para acessar esta página' }
//     })
//   } else {
//     next()
//   }
// })

export default router
