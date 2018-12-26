<template>
  <div class="component-app-detail-info">
    {{ name }} {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-app-detail-info {
  padding:20px;
}
</style>
