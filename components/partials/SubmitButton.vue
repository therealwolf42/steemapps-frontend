<template>
  <nuxt-link class="submit button" :to="{ name: to }">
    <span>Submit App</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';
    
</style>
