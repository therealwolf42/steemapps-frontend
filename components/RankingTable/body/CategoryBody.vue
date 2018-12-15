<template>
  <div>
    <nuxt-link
      v-if="category"
      :class="[
        category.toLowerCase() === $route.params.category ? 'is-selected' : '',
        '-' + category
      ]"
      :to="{name: 'rankings-category', params: { category: category.toLowerCase() }}"
      class="value">{{ category | capitalize }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
