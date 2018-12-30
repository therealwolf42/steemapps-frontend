<template>
  <div class="component-ranking-table-category-head">
    <span class="label">Category</span>
    <Help :tooltip="tooltip"/>
  </div>
</template>

<script>
import Help from '~/components/partials/Help'
export default {
  data() {
    return {
      tooltip: ''
    }
  },
  components: {
    Help
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-category-head {
  display:flex;
}
</style>
