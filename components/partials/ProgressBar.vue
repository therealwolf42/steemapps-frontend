<template>
  <div class="shell">
    <div class="bar" :style="{ width: (percentage < 0 ? 0 : (percentage > 100 ? 100 : percentage)) + '%' }">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 70
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.shell {
  height: 24px;
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 13px;
  padding: 3px;
}

.bar {
  transition: all .2s ease-out;
  background: linear-gradient(to right, #8000de, #5f00de);
  height: 16px;
  width: 15px;
  border-radius: 9px;
  span {
    float: right;
    padding: 4px 5px;
    color: #fff;
    font-size: 0.7em
  }
}

button {
  margin: 10px;
  border: 1px solid #aaa;
  background: none;
  border-radius: 50%;
  padding: 5px 8px;
  outline: none;
  cursor: pointer;
}
</style>
