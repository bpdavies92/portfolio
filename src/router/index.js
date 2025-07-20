// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: '/filter',
        name: 'Filter',
        component: () => import('@/views/Filter.vue')
      },
      {
        path: '/:id',
        name: 'Project',
        component: () => import('@/views/Project.vue'),
        children: [
          {
            path: '/project/:id',
            component: () => import('@/views/Project.vue')
            
          }
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes,
})

router.afterEach(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, 100)
})

export default router
