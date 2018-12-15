<template>
  <div class="component-ranking-table-rewards-head">
    <nuxt-link
      v-if="sort"
      :to="{query: {sort: `rewards_${asset.toLowerCase()}`, order, time}}"
      :class="$route.query.sort === `rewards_${asset.toLowerCase()}` && $route.query.time === time ? 'is-active' : ''"
      class="label head-link">Rewards {{ asset }}</nuxt-link>
    <span 
      v-else 
      class="label">Rewards {{ asset }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$route.query.sort === `rewards_${this.asset.toLowerCase()}` ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
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
    },
    asset: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
