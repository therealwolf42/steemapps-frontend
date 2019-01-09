<template>
  <div
    :class="'rank-' + rank"
    class="component-ranking-table-rank">
    <span class="current-rank">
      {{ rank }}
    </span>
    <span 
      v-if="rank_change === null  || rank_change === 0 || !rank_change" 
      class="past-rank"></span>
    <span 
      v-else 
      :class="getValuePosNegClass(rank_change)" 
      class="past-rank">
      <span v-if="rank_change > 0" class="rank-plus">+</span>{{ rank_change }}</span>
  </div>
</template>

<script>
import { getValuePosNegClass } from '~/helpers/mixins'
import Media from 'vue-media'
export default {
  mixins: [getValuePosNegClass],
  computed: {
    rank_change() {
      
      if(!this.past_rank) {
        return 0
      } else {
        return this.past_rank - this.rank
      }
    }
  },
  props: {
    rank: {
      type: Number,
      required: true
    },
    past_rank: {
      type: Number,
      required: false
    }
  },
  components: {
    Media
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.value {
  display:flex;
  align-items: center;
}

.before-rank {
  display:none;
}

.component-ranking-table-rank {
  font-weight: 700;
  width: 100%;
  padding: 0;
  
  display: flex;
  flex-flow:column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.past-rank {
  font-size:0.8rem;
  display:flex;
  text-align: center;
  font-weight:500;
  .rank-plus {
    margin-right:-1px;
    margin-top:-0.5px,
  }
}
.is-positive {
  color: $color--positive;
}
.is-negative {
  color: $color--negative;
}

@media (max-width: 750px) {
  .before-rank {
    display:initial;
  }
}
</style>
