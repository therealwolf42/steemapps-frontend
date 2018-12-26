<template>
  <div class="component-app-select">
    <select>
      <option v-for="o in options" :key="o" :value="o">{{ o }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-app-select {

}
</style>
