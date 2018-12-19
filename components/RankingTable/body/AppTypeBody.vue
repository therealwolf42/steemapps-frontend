<template>
  <div class="component-ranking-table-apptype">
    <nuxt-link
      v-if="app_type"
      :to="{ name: 'rankings-type', params: { type: app_type.toLowerCase() }}">
      <div :class="`is-${app_type}`" class="is-general">
        {{ app_type | capitalize }}
      </div>
    </nuxt-link>
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
  cursor:pointer;
  width: fit-content;
  width:78px;
  text-align:center;
  transition: all .2s ease-out;
}

.is-dapp {
  /* border: 1px solid #cb57eabf; */
  background-color: #bc17ff;
}

.is-dapp:hover {
  background-color: #c330fd;
}

.is-interface {
  background-color: #27a4fd;
  font-size: 0.75rem;
}

.is-interface:hover {
  background-color: #33aaff;
}

.is-app {
  background-color: #6717ff;
}

.is-app {
  background-color: #762cff;
}

.is-general {
  h4 {
    margin: 0;
    color: white;
    font-weight:300;
  }
}

</style>
