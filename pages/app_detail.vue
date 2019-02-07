<template>
  <LayoutMain>
    <AppDetail :app="steem_app" />
  </LayoutMain>
</template>

<script>
import LayoutMain from '~/components/LayoutMain'
import AppDetail from '~/components/appDetail/AppDetail'
import { getApp } from '~/helpers/api'

export default {
  components: {
    LayoutMain, AppDetail
  },
  data() {
    return {
      steem_app: {}
    }
  },
  async asyncData({ params, query, app }) {
    const steem_app = await getApp(app.$axios, params.name)
    return { steem_app: steem_app }
  }
}
</script>

<style>

</style>
