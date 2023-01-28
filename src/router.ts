import { createRouter, createWebHistory } from 'vue-router'
import * as NProgress from 'nprogress'

/**
 * routes are generated using vite-plugin-pages
 * each .vue files located in the ./src/pages are registered as a route
 * @see https://github.com/hannoeru/vite-plugin-pages
 */
import routes from 'pages-generated'

import { isAuthenticated } from '/@src/pages/auth/auth.ts'

/*Here is how a simple route is generated:
 */
import { RouteRecordRaw } from 'vue-router'

const routesCustom: RouteRecordRaw = [
  {
    component: () => import('/src/pages/landing/member/updated.vue'),
    name: 'landing-member-updated',
    path: '/landing/member/updated',
    props: true,
  },
  {
    component: () => import('/src/pages/waiver/index.vue'),
    name: 'waiver',
    path: '/waiver',
    props: true,
  },
]

//* Here is how nested routes are generated:

// import { RouteRecordRaw } from 'vue-router'

// const routesCustom: RouteRecordRaw = [{
//    component: () => import('/src/pages/members/edit.vue'),
//    path: 'membders/edit/:id',
//    props: true,
//    // children: [
//    //   {
//    //     component: () => import('/src/pages/auth/login-1.vue'),
//    //     name: 'auth-login-1',
//    //     path: 'login-1',
//    //     props: true,
//    //   },
//    // ],
// }]

// console.log('custom',routesCustom)
/*
 * Uncomment the line below to view the generated routes
 */

routes.value = routes.concat(routesCustom)

// console.log('routes', routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const routesPublic = [
  'auth',
  'auth-register',
  'auth-register-steps',
  'landing-member-updated',
  'wizard-v1',
  'waiver',
]

router.beforeResolve((to, from, next) => {
  if (!routesPublic.includes(to.name) && !isAuthenticated.value) {
    sessionStorage.clear()
    localStorage.clear()

    next({ name: 'auth' })
  } else next()
})
/**
 * Handle NProgress display on page changes
 */
router.beforeEach(() => {
  NProgress.start()
})
// routesCustom.beforeEach(() => {
//   NProgress.start()
// })
// routesCustom.afterEach(() => {
//   NProgress.start()
// })
router.afterEach(() => {
  NProgress.done()
})

export default router
