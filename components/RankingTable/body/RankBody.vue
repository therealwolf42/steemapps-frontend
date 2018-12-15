<template>
  <div
    :class="'rank-' + rank"
    class="component-ranking-table-rank">
    <span
      class="value"><span class="before-rank">#</span>{{ rank }}</span>
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
  padding: 0;
  background: darken($color--white, 2%);
  border-right: 1px solid darken($color--gray, 5%);
  display: flex;
  height: 80px;
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
