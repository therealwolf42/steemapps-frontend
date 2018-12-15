import Vuex from 'vuex'
import apps from './modules/apps'
import Vue from 'vue'

const state = () => ({
})

const actions = {
  defaultAction({ commit }) {
    commit('DEFAULT')
  }
}

const getters = {
  defaultGetter: state => {
    return state.default
  }
}

const mutations = {
  default(state) {
    Vue.set(state, 'asd'. test)
  }
}


const createStore = () => {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      apps
    },
    mutations,
    state
  })
}

export default createStore
