import Vue from 'vue'
import Vuex from 'vuex'
import AppModule from './modules/app'
import UserModule from './modules/user'
import RouterModule from './modules/router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    app: AppModule,
    router: RouterModule
  },
  getters
})
