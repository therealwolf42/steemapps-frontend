<template>
  <div class="component-ranking-table-time" v-bind:class="{ active_left: time_selection === '24h', active_mid: time_selection === '7d', active_right: time_selection === '30d' }">
    <div v-bind:class="{ active: time_selection === '24h', inactive: time_selection !== '24h' }" class="option-wrapper option-wrapper-left" @click="$store.dispatch('apps/rankings/changeTimeSelection', '24h')">24h</div>
    <div v-bind:class="{ active: time_selection === '7d', inactive: time_selection !== '7d' }" class="option-wrapper option-wrapper-middle" @click="$store.dispatch('apps/rankings/changeTimeSelection', '7d')">7d</div>
    <div v-bind:class="{ active: time_selection === '30d', inactive: time_selection !== '30d' }" class="option-wrapper option-wrapper-right" @click="$store.dispatch('apps/rankings/changeTimeSelection', '30d')">30d</div>
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
  created() {
    if(this.$route.query && this.$route.query.time) {
      let time = this.$route.query.time
      time = time === 'last_month' ? '30d' : (time === 'last_day' ? '24h' : '7d')
      this.$store.dispatch('apps/rankings/changeTimeSelection', time)
    }
  }
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
  padding:6px 18px;
  cursor:pointer;
  background-color:#fafafa;
  border-top: 1px solid #a8a8a8;
  border-right: 1px solid #a8a8a8;
  border-bottom: 1px solid #a8a8a8;
  margin:0;
  font-size: 0.6rem;
}

.option-wrapper-left {
  border-radius: 6px 0 0 6px;
  border-left: 1px solid #a8a8a8;
  border-right: 0px;
}

.option-wrapper-middle {
  border-right: 1px solid #a8a8a8;
  border-left: 1px solid #a8a8a8;
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

.inactive {
  border-color: #a8a8a8;
}

.inactive.option-wrapper-middle {
  border-color: #a8a8a8;
}

.active_left > .option-wrapper-middle {
  border-left: 1px solid #106bdb;
}

.active_right > .option-wrapper-middle {
  border-right: 1px solid #106bdb;
}

</style>
