import Vue from 'vue'
import Vuex from 'vuex'
import AppModule from './modules/app'
import UserModule from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    app: AppModule
  },
  getters
})
