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
    const urlParams = { ...params, ...query }
    if (!query.sort) urlParams.sort = 'rank'
    if (!query.order) urlParams.order = 'asc'
    if (!query.time) urlParams.time = app.time_selection_converted
    const data = await getApps(app.$axios, urlParams)
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
      if (!this.$route.query.sort) urlParams.sort = 'rank'
      if (!this.$route.query.order) urlParams.order = 'asc'
      if (!this.$route.query.time) urlParams.time = this.time_selection_converted
      
      console.log(urlParams)
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

<style>

</style>
