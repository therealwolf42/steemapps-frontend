<template>
  <div class="component-footer">
    <div class="main">
      <div class="nav">
        <span class="nav-element made-text">Made with <span style="color:black;">🔥</span> by <a href="https://steemit.com/@therealwolf" target="_blank">@therealwolf</a></span>
        <nuxt-link class="nav-element" :to="'/documentation'" v-if="!$route.name.includes('documentation')">API Documentation</nuxt-link>
        <a class="nav-element" href="https://discord.gg/ug4HdcU" target="_blank">
          <discord/>
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
import discord from './partials/discord'
export default {
  components: {
    discord
  }
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
}

.nav {
  display:flex;
  justify-content: space-between;
  align-items: center;
  max-width:400px;
  margin: 0 auto;
  padding-bottom:10px;
  flex-flow:column;
}

.nav-element {
    padding:5px 0;
  }

@media (max-width: 500px) {
  .nav {
    flex-flow:column;
  }

  
}
</style>
