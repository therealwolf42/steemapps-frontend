<template>
  <div class="component-ranking-table-rank-head">
    <nuxt-link
    v-if="sort"
    :to="{query: {sort: 'rank', order, time }}"
    :class="!$route.query.sort || $route.query.sort === 'rank' && $route.query.time === time ? 'is-active' : ''"
    class="label head-link">
    Rank</nuxt-link>
    <Help :tooltip="tooltip"/>
  </div>
</template>

<script>

import Help from '~/components/partials/Help'
export default {
  computed: {
    order() {
      return this.$route.query.sort === 'rank' ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'asc'
    }
  },
  data() {
    return {
      tooltip: 'The rank is calculated from different metrics (incl. DAU, Transactions, Volume, Rewards, Steempower & more). Keep in mind: the rank is not an exact metric to determine the value of an app.'
    }
  },
  props: {
    sort: {
      type: Boolean,
      default: false
    },
    time: {
      type: String,
      required: true
    }
  },
  components: {
    Help
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-rank-head {
  text-align: center;
  display:flex;
}
</style>
