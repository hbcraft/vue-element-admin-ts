import Cookies from 'js-cookie'
import { ActionTree, Module, MutationTree } from 'vuex'
import { getLangs } from '@/utils/lang'
import { RootState } from '@/types/store'

const state: AppState = {
  lang: Cookies.get('lang') || 'zh-cn',
  langs: getLangs(),
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!Number(Cookies.get('sidebarStatus')) : true
  }
}

const mutations: MutationTree<AppState> = {
  SET_LANGUAGE: (state, language) => {
    state.lang = language
    Cookies.set('lang', language)
  },
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', '1')
    } else {
      Cookies.set('sidebarStatus', '0')
    }
  }
}

const actions: ActionTree<AppState, RootState> = {
  setLanguage ({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
  toggleSidebar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
} as Module<AppState, RootState>
