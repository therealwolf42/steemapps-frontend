<template>
  <div>
    <div v-if="app_type.toLowerCase() === 'dapp'" class="is-general is-dapp">DApp</div>
    <div v-if="app_type.toLowerCase() === 'app'" class="is-general is-app">App</div>
    <div v-if="app_type.toLowerCase() === 'interface'" class="is-general is-interface">Interface</div>
  </div>
</template>

<script>
export default {
  props: {
    app_type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';


.is-general {
  font-size: 0.7rem;
  padding: 3px 15px 4.5px 15px;
  border-radius: 20px;
  color: white;
  cursor:default;
  width: fit-content;
  width:78px;
  text-align:center;
}

.is-dapp {
  /* border: 1px solid #cb57eabf; */
  background-color: #bc17ff;
}

.is-interface {
  background-color: #179eff;
  font-size: 0.75rem;
}

.is-app {
  background-color: #6717ff;
}

.is-general {
  h4 {
    margin: 0;
    color: white;
    font-weight:300;
  }
}

</style>
