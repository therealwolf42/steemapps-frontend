<template>
  <div class="layout-default">
    <no-ssr>
    <notifications position="top center" />
    </no-ssr>
    <div class="wrapper">
      <div class="main">
        <Navigation/>
        <slot/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer/Footer.vue'
export default {
  components: {
    Navigation, Footer
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.layout-default {
  height: 100%;
  position: relative;
  
}

.main {
  min-height: 98%;
  position: relative;
  min-height:750px;
}


</style>
