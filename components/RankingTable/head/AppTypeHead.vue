<template>
  <div class="component-ranking-table-app-type-head">
    <!--
      v-if="$route.params.type && false"
      :to="{ name: 'rankings', params: {}}"
      :class="$route.query.sort === 'dau' && $route.query.time === time ? 'is-active' : ''"
      class="reset-apptype">
      <svg class="svg-icon" viewBox="0 0 20 20">
				<path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
			</svg>
    </nuxt-link>-->
    <span class="label">Type</span>
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

.component-ranking-table-app-type-head {
  display:flex;
}

.reset-apptype {
  display:flex;
  background-color:#a4a4a4;
  padding:3px 10px;
  border-radius:25px;
  transition: all .2s ease-out;
}

.reset-apptype:hover {
  background-color:#b6b6b6;
  
}

.svg-icon {
  width: 1em;
  height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: white;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
</style>
