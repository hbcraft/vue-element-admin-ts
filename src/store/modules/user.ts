import { ActionTree, Module, MutationTree } from 'vuex'
import { LoginAPI } from '@/api/user'
import { setToken, getToken } from '@/utils/auth'

const state: UserState = {
  token: getToken() || ''
}

const mutations: MutationTree<UserState> = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions: ActionTree<UserState, RootState> = {
  login ({ commit }, loginParams: LoginParams) {
    return new Promise<void>((resolve, reject) => {
      LoginAPI(loginParams).then((res) => {
        if (res.code === 200) {
          const { data } = res
          commit('SET_TOKEN', data!.token)
          setToken(data!.token)
          resolve()
        } else {
          reject(new Error(res.message))
        }
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
} as Module<UserState, RootState>
