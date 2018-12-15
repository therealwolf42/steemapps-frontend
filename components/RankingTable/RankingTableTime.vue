<template>
  <div class="component-ranking-table-time">
    <div v-bind:class="{ active: time_selection === '24h' }" class="option-wrapper option-wrapper-left" @click="$store.dispatch('apps/rankings/changeTimeSelection', '24h')">24h</div>
    <div v-bind:class="{ active: time_selection === '7d' }" class="option-wrapper option-wrapper-right" @click="$store.dispatch('apps/rankings/changeTimeSelection', '7d')">7d</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    time_selection() {
      return this.$store.getters['apps/rankings/time_selection']
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-time {
  display:flex;
  flex-flow:row;
  width:fit-content;
}

.option-wrapper {
  display:flex;
  flex: 1;
  padding:5px 18px;
  cursor:pointer;
  background-color:#fafafa;
  border-top: 1px solid #a8a8a8;
  border-right: 1px solid #a8a8a8;
  border-bottom: 1px solid #a8a8a8;
  margin:0;
  font-size: 0.6rem;
}

.active {
  
}

.active > .option-wrapper-right {
  
}

.option-wrapper-left {
  border-radius: 6px 0 0 6px;
  border-left: 1px solid #a8a8a8;
  border-right: 1px solid #106bdb;
}

.option-wrapper-right {
  border-radius: 0 6px 6px 0;
  border-right: 1px solid #a8a8a8;
}

.option-wrapper:hover {
  color: #106bdb;
  transition: all .2s ease-out;
}

.active {
  color: #106bdb;
  border-color: #106bdb;

}

</style>
