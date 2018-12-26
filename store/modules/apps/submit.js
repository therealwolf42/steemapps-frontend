import Vue from "vue";

const state = () => ({
  
})

const actions = {
  async submitApp({ state, commit }, payload) {
    try {
      
      let { name, display_name, accounts, app_type, link, category, custom_jsons, custom_json, description, short_description, image, status, social, product_screenshot } = payload
      if(!custom_jsons) custom_jsons = []
      if(custom_json && custom_json !== '' && !custom_jsons.includes(custom_json)) custom_jsons.push(custom_json)

      if(accounts) accounts = accounts.filter(x => x.name).map(x => { x.name = x.name.replace('@', ''); return x; })
      let response = await this.$axios.post('apps/submit/new',  {
        name, display_name, accounts, app_type, link, category, custom_jsons, description, short_description, image, status, social, product_screenshot
      })
      return response
    } catch (error) {
      return error.response
    }
  },
  
}

const mutations = {
  setSelectedAppType(state, app_type) {
    Vue.set(state, 'selected_app_type', app_type)
  }
}

const getters = {
  selected_app_type: state => {
    return state.selected_app_type
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}