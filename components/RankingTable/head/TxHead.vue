<template>
  <div class="component-ranking-table-tx-head">
    <nuxt-link
      v-if="sort"
      :to="{query: {sort: 'tx', order, time}}"
      :class="$route.query.sort === 'tx' && $route.query.time === time ? 'is-active' : ''"
      class="label head-link">Transactions</nuxt-link>
    <span 
      v-else 
      class="label">Transactions
    </span>
    <Help :tooltip="tooltip"/>
  </div>
</template>

<script>
import Help from '~/components/partials/Help'
export default {
  computed: {
    order() {
      return this.$route.query.sort === 'tx' ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
    }
  },
  data() {
    return {
      tooltip: 'Transactions are all actions users of an app make, that are recorded on the blockchain and which can be pinned to a specific app (posts, comments, incoming transfers & custom_jsons). Outgoing transfers from users as well as votes are not able to be pinned to a specific app.'
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

.component-ranking-table-tx-head {
  display:flex;
}

</style>
