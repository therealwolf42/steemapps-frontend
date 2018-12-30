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
      <Help :tooltip="tooltip"/>
  </div>
</template>

<script>
import Help from '~/components/partials/Help'
export default {
  computed: {
    order() {
      return this.$route.query.sort === 'dau' ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
    }
  },
  data() {
    return {
      tooltip: `DAU are unique users over a specific timeframe, who are either transferring to the app, creating custom_jsons of the app or creating posts/comments with the app. Important: The real number of users can be much higher with specific apps due to missing data, which we're not able to fetch.`
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

.component-ranking-table-dau-head {
  display:flex;
}

</style>
