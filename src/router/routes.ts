import Layout from '@/layout/index.vue'
import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */'@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: {
      name: 'Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */'@/views/dashboard/index.vue'),
        meta: {
          title: 'dashboard',
          icon: 'tachometer-alt'
        }
      }
    ]
  },
  {
    path: '/test',
    meta: {
      title: 'test',
      icon: 'tachometer-alt'
    },
    children: [
      {
        path: 'test1',
        meta: {
          title: 'test1',
          icon: 'tachometer-alt'
        }
      },
      {
        path: 'test2',
        meta: {
          title: 'test2',
          icon: 'tachometer-alt'
        }
      }
    ]
  }
]

export default routes
