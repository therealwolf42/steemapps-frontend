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
    <Help :tooltip="tooltip"/>
  </div>
</template>

<script>
import Help from '~/components/partials/Help'
export default {
  computed: {
    order() {
      return this.$route.query.sort === `volume_${this.asset.toLowerCase()}` ? (this.$route.query.order === 'desc' ? 'asc' : 'desc') : 'desc'
    }
  },
  data() {
    return {
      tooltip: 'The volume is calculated from incoming transfers of all accounts from the specific app.'
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
  },
  components: {
    Help
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-volume-head {
  display:flex;
}

</style>
