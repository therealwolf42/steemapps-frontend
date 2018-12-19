<template>
  <div class="component-footer">
    <div class="main">
      <p class="info-text" v-if="$route.name.includes('rankings')">Interested in having your App listed here? A submit option will be available soon, but for now, please join our discord server: <a href="https://discord.gg/ug4HdcU" target="_blank">https://discord.gg/ug4HdcU</a></p>
      <p class="info-text" v-if="$route.name.includes('rankings')">Info: Some of the data can't be pinned to specific Apps (for example: votes or passive users), which means the data is in reality quite higher than displayed; especially for interfaces. We're working on possible solutions, but the current blockchain data structure makes this difficult.<!--<a href="https://steemit.com/steem/@therealwolf/alpha-steemapps-com-the-frontpage-for-apps-on-steem" target="_blank">this article</a>.--></p>
      <p class="made-text">Made with <span style="color:black;">🔥</span> by <a href="https://steemit.com/@therealwolf" target="_blank">@therealwolf</a></p>
      <div class="nav">
        <nuxt-link :to="'/documentation'" v-if="!$route.name.includes('documentation')">API Documentation</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-footer {
  width: 100%;
  max-width:1200px;
  margin:0 auto;
}

.main {
  min-height:40px;
  padding: 15px 40px;
}

.info-text, .made-text {
  text-align:center;
}

.info-text {
  font-style:italic;
  margin-bottom:18px;
}

.made-text {
  font-size:0.9rem;
  margin-top:20px;
}

.nav {
  display:flex;
  justify-content: center;
  max-width:350px;
  margin: 0 auto;
}

</style>
