<template>
  <div
    :class="'rank-' + rank"
    class="component-ranking-table-rank">
    {{ rank }}
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  props: {
    rank: {
      type: Number,
      required: true
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

  align-items: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

@media (max-width: 750px) {
  .before-rank {
    display:initial;
  }
}
</style>
