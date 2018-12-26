<template>
  <div v-bind:class="{ selected: selected }" class="component-app-category" >
    <p>{{ category | capitalize }}</p>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    },
    selected: {
      category: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-app-category {
  width: 50%;
  min-width:240px;
  margin: 5px;
  padding: 10px 20px;
  box-shadow: 0 0 20px rgba(51,51,51,.05);
  border: 1px solid #7e7e7e;
  border-radius: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  transition: all .2s ease-out;
}

p {
  margin-bottom: 0;
}

.selected {
  background-color: #0080de;
  color: white;
  border-color: #0080de;
}
</style>
