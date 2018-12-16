import Vue from "vue";

const sort_arr = ['rank', 'dau', 'tx', 'volume_steem', 'volume_sbd', 'rewards_steem', 'rewards_sbd']
const time_arr = ['last_day', 'last_week', 'last_month']
const order_arr = ['asc', 'desc']

const state = () => ({
  display_columns: {
    rank_24h: false,
    rank_7d: true,
    rank_30d: false,
    name: true,
    app_type: true,
    users_24h: false,
    users_7d: true,
    users_30d: false,
    tx_24h: false,
    tx_7d: true,
    tx_30d: false,
    volume_steem_24h: false,
    volume_steem_7d: true,
    volume_steem_30d: false,
    volume_sbd_24h: false,
    volume_sbd_7d: true,
    volume_sbd_30d: false,
    rewards_steem_24h: false,
    rewards_steem_7d: true,
    rewards_steem_30d: false,
    rewards_sbd_24h: false,
    rewards_sbd_7d: false,
    rewards_sbd_30d: false
  },
  time_selection: '7d', // 24h || 7d
  time_selection_converted: 'last_week'
})

const actions = {
  displayColumn({ state, commit }, { column, toggle }) {
    commit('setDisplayColumn', { column, toggle })
  },
  changeTimeSelection({ commit }, selection) {
    for (let column of ['rank_', 'users_', 'tx_', 'volume_steem_', 'volume_sbd_', 'rewards_steem_']) {
      let others = selection === '24h' ? ['7d', '30d'] : (selection === '7d' ? ['24h', '30d'] : ['24h', '7d'])
      for (let other of others) {
        //console.log('NO', `${column}${other}`)
        commit('setDisplayColumn', { column: `${column}${other}`, toggle: false })
      }
      //console.log('YES', `${column}${selection}`)
      commit('setDisplayColumn', { column: `${column}${selection}`, toggle: true })
    }
    let converted = 'last_day'
    if (selection === '7d') converted = 'last_week'
    if (selection === '30d') converted = 'last_month'
    commit('setTimeSelection', { selection, converted })

    let sort = this.$router.currentRoute.query.sort
    let order = this.$router.currentRoute.query.order
    
    let q = { time: converted }
    if (sort && sort_arr.includes(sort)) q.sort = sort
    if (order && order_arr.includes(order)) q.order = order
    this.$router.push({ query: q })
  }
}

const mutations = {
  setDisplayColumn(state, { column, toggle }) {
    const display_columns = state.display_columns
    display_columns[column] = toggle
    Vue.set(state, 'display_columns', display_columns)
  },
  setTimeSelection(state, { selection, converted }) {

    Vue.set(state, 'time_selection', selection)
    Vue.set(state, 'time_selection_converted', converted)
  }
}

const getters = {
  display_columns: state => {
    return state.display_columns
  },
  time_selection: state => {
    return state.time_selection
  },
  time_selection_converted: state => {
    return state.time_selection_converted
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}