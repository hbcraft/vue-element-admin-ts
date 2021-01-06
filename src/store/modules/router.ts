import routes from '@/router/routes'
import { RootState } from '@/types/store'
import { RouterState } from '@/types/store/modules/router'
import { Module } from 'vuex'

const state: RouterState = {
  routes: routes
}

export default {
  state
} as Module<RouterState, RootState>
