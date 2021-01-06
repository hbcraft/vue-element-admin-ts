import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */'@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: {
      name: 'Dashboard'
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */'@/views/dashboard/index.vue'),
        meta: {
          title: 'dashboard'
        }
      }
    ]
  }
]

export default routes
