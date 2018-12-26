<template>
  <LayoutMain>
    <RankingTable
      :apps="apps"
      :is-loading="isLoading"
    />
  </LayoutMain>
</template>

<script>
import { getApps } from '~/helpers/api'
import RankingTable from '~/components/RankingTable/RankingTable'
import RankingTableTime from '~/components/RankingTable/RankingTableTime'
import LayoutMain from '~/components/LayoutMain'

import { mapGetters } from 'vuex'
export default {
  computed: {
    time_selection_converted() {
      return this.$store.getters['apps/rankings/time_selection_converted']
    },
    order_arr() {
      return this.$store.getters['apps/rankings/order_arr']
    },
    sort_arr() {
      return this.$store.getters['apps/rankings/sort_arr']
    },
    time_arr() {
      return this.$store.getters['apps/rankings/time_arr']
    }
  },
  components: {
    RankingTable, LayoutMain, RankingTableTime
  },
  data() {
    return {
      apps: [],
      isLoading: false
    }
  },
  async asyncData({ params, query, app }) {
    let q = { ...params }

    q.sort = !query.sort || !['rank', 'dau', 'tx', 'volume_steem', 'volume_sbd', 'rewards_steem', 'rewards_sbd'].includes(query.sort) ? q.sort = 'rank' : query.sort
    q.order = !query.order || !['asc', 'desc'].includes(query.order) ? 'asc' : query.order
    q.time = !query.time || !['last_day', 'last_week', 'last_month'].includes(query.time) ? 'last_week' : query.time

    const data = await getApps(app.$axios, q)
    return { apps: data.apps }
  },
  watch: {
    '$route.query'() {
      //this.$refs.table.scrollIntoView()
      this.fetchApps()
    }
  },
  methods: {
    async fetchApps() {
      //this.resetData()
      this.isLoading = true
      const urlParams = { ...this.$route.params, ...this.$route.query }

      if (!this.$route.query.sort || !['rank', 'dau', 'tx', 'volume_steem', 'volume_sbd', 'rewards_steem', 'rewards_sbd'].includes(this.$route.query.sort)) urlParams.sort = 'rank'
      if (!this.$route.query.order || !['asc', 'desc'].includes(this.$route.query.order)) urlParams.order = 'asc'
      if (!this.$route.query.time || !['last_day', 'last_week', 'last_month'].includes(this.$route.query.time)) urlParams.time = this.time_selection_converted

      const data = await getApps(this.$axios, urlParams)
      this.isLoading = false
      this.apps = data.apps
    },
    async resetData() {
      this.apps = []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';


</style>
