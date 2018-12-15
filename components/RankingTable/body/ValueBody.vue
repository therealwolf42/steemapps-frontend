<template>
  <div class="component-ranking-table-value-pct">

    <span 
      v-if="value === null || value === 0 || !value" 
      class="value">-</span>
    <span 
      v-else 
      class="value">{{ Number(value || 0).toLocaleString(undefined, {maximumFractionDigits: 0}) }}</span>
    <span 
      v-if="value_pct === null  || value_pct === 0 || !value_pct" 
      class="pct"></span>
    <span 
      v-else 
      :class="getValuePosNegClass(value_pct)" 
      class="pct"><span v-if="value_pct >= 1">+</span>{{((value_pct - 1) * 100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}%</span>
  </div>
</template>

<script>
import { getValuePosNegClass } from '~/helpers/mixins'
export default {
  mixins: [getValuePosNegClass],
  props: {
    value: {
      type: Number,
      default: null
    },
    value_pct: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-value-pct {
  display: flex;
  flex-direction: column;
  @include font-monospace;
}

.pct {
  font-size: 0.75rem;
  &.is-positive {
    color: $color--positive;
  }
  &.is-negative {
    color: $color--negative;
  }
}

.value {
  font-size: 0.9rem;
}

</style>
