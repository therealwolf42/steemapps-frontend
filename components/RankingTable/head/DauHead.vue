<template>
  <div class="component-ranking-table-dau-head">
    <nuxt-link
      v-if="sort"
      :to="{query: {sort: 'dau', order, time }}"
      :class="$route.query.sort === 'dau' && $route.query.time === time ? 'is-active' : ''"
      class="label head-link">Users</nuxt-link>
    <span 
      v-else 
      class="label">Users</span>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$route.query.sort === 'dau' ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
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
