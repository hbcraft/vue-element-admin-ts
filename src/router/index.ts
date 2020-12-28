import { getToken } from '@/utils/auth'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const whiteList = ['/login']

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.name === 'Login') {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ name: 'Login', query: { redirect: to.name } })
    }
  }
})

export default router
