<template>
  <div class="help" v-tooltip.bottom="{ content: tooltip, class: direction }">
    <div class="help-inner">
      ?
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'bottom'
    },
    tooltip: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.help {
  margin-left:5px;
  cursor: help;
  display:flex;
  justify-content: center;
  align-items: center;
}

.help-inner {
  background-color:#d6d6d6;
  border-radius:50%;
  width:15px;
  height:15px;
  font-size:0.8rem;
  color:white;
  display:flex;
  align-items: center;
  justify-content:center;
}
</style>
