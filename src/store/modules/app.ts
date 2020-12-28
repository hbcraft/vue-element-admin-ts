import { ActionTree, Module, MutationTree } from 'vuex'

const state: SystemState = {
  lang: localStorage.getItem('lang') || navigator.language.toLocaleLowerCase()
}

const actions: ActionTree<SystemState, RootState> = {
  setLanguage ({ commit }, language) {
    commit('SET_LANGUAGE', language)
  }
}

const mutations: MutationTree<SystemState> = {
  SET_LANGUAGE: (state, language) => {
    state.lang = language
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
} as Module<SystemState, RootState>
