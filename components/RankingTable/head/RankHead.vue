<template>
  <div class="component-ranking-table-rank-head">
    <nuxt-link
    v-if="sort"
    :to="{query: {sort: 'rank', order, time }}"
    :class="!$route.query.sort || $route.query.sort === 'rank' && $route.query.time === time ? 'is-active' : ''"
    class="label head-link">
    Rank</nuxt-link>
  </div>
</template>

<script>

export default {
  computed: {
    order() {
      return this.$route.query.sort === 'rank' ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'asc'
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
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-rank-head {
  text-align: center;
}
</style>
