<template>
  <div class="component-ranking-table-rewards-head">
    <nuxt-link
      v-if="sort"
      :to="{query: {sort: `rewards_${asset.toLowerCase()}`, order, time}}"
      :class="$route.query.sort === `rewards_${asset.toLowerCase()}` && $route.query.time === time ? 'is-active' : ''"
      class="label head-link">Rewards {{ asset }}</nuxt-link>
    <span 
      v-else 
      class="label">Rewards {{ asset }}
    </span>
    <Help :tooltip="tooltip"/>
  </div>
</template>

<script>
import Help from '~/components/partials/Help'
export default {
  computed: {
    order() {
      return this.$route.query.sort === `rewards_${this.asset.toLowerCase()}` ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
    }
  },
  data() {
    return {
      tooltip: 'Rewards are benefactor- & curation-rewards an app generates.'
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
  },
  components: {
    Help
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-rewards-head {
  display:flex;
}

</style>
