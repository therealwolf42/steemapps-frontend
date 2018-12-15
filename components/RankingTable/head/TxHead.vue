<template>
  <div class="component-ranking-table-tx-head">
    <nuxt-link
      v-if="sort"
      :to="{query: {sort: 'tx', order, time}}"
      :class="$route.query.sort === 'tx' && $route.query.time === time ? 'is-active' : ''"
      class="label head-link">Transactions</nuxt-link>
    <span 
      v-else 
      class="label">Transactions</span>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$route.query.sort === 'tx' ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
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

<style>

</style>
