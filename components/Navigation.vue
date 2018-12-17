<template>
  <div class="component-navigation-wrapper">
    <div class="component-navigation-inner">
      <div class="logo-wrapper">
        <nuxt-link to="/">
          <div class="logo-wrapper-div">
            <Logo/>
          </div>
          <div class="logo-wrapper-div">
          <span class="text-alpha">Alpha</span>
          </div>
        </nuxt-link>
      </div>
      <div v-if="$route.name === 'home'" class="table-top-wrapper">
        <RankingTableTime class="nav-ranking-table-time"/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import RankingTableTime from '~/components/RankingTable/RankingTableTime'
export default {
  components: {
    Logo, RankingTableTime
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-navigation-wrapper {
  width:95%;
  max-width: 1222px;
  margin: 0 auto;
  margin-top:20px;
}

.component-navigation-inner {
  padding: 18px 30px 15px 30px;
  display:flex;
  justify-content: space-between;
}

.nav-ranking-table-time {
  margin-top:-4px;
}

.logo-wrapper > a {
  display:flex;
  align-items: center;
  flex-flow:column;
  justify-content: flex-end;
}

.logo-wrapper-div {
  width: 100%;
  justify-content: flex-end;
  display:flex;
}

.text-alpha {
  outline: none;
  color: #a2a2a2;
  text-align: right;
  width:100%;
  font-size:0.7rem;
  margin-right:4px;
}

a:focus {
  text-decoration: none !important;
}

@media (max-width: 750px) {
  .component-navigation-wrapper {
    margin-top:10px;
  }
}

</style>
