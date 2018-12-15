<template>
  <div class="component-ranking-table-volume-head">
    <nuxt-link
      v-if="sort"
      :to="{query: {sort: `volume_${asset.toLowerCase()}`, order, time }}"
      :class="$route.query.sort === `volume_${asset.toLowerCase()}` ? 'is-active' : ''"
      class="label head-link">Volume {{ asset }}</nuxt-link>
    <span 
      v-else 
      class="label">Volume {{ asset }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$route.query.sort === `volume_${this.asset.toLowerCase()}` ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
    }
  },
  props: {
    sort: {
      type: Boolean,
      default: false
    },
    asset: {
      type: String,
      required: true
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
