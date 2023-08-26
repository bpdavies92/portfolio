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
        path: '/project/:id',
        name: 'Project',
        component: () => import('@/views/project.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about.vue')
      },
      {
        path: '/filter',
        name: 'Filter',
        component: () => import('@/views/filter.vue')
      }
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

export default router
