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
      <div v-if="$route.name.includes('rankings')" class="table-top-wrapper">
        <Dropdown v-on:updateOption="updateOptionType" class="dropdown"
          :options="optionsType" 
          :selected="{ name: selectedType }"
          :placeholder="'All Types'"/>
        <Dropdown v-on:updateOption="updateOptionCategory" class="dropdown"
          :options="optionsCategory" 
          :selected="{ name: selectedCategory }"
          :placeholder="'All Categories'"/>
        <RankingTableTime class="nav-ranking-table-time"/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/partials/Logo'
import RankingTableTime from '~/components/RankingTable/RankingTableTime'
import Dropdown from '~/components/partials/Dropdown'
export default {
  components: {
    Logo, RankingTableTime, Dropdown
  },
  computed: {
    selectedType() {
      return this.$route && this.$route.params.type ? this.$route.params.type : 'All Types'
    },
    selectedCategory() {
      return this.$route && this.$route.params.category ? this.$route.params.category : 'All Categories'
    },
  },
  data() {
    return {
      optionsType: [
        { name: 'All Types' },
        { name: 'app' },
        { name: 'dapp' },
        { name: 'interface' },
        { name: 'project' }
      ],
      optionsCategory: [
        { name: 'All Categories' },
        { name: 'games' },
        { name: 'entertainment' },
        { name: 'exchanges' },
        { name: 'development' },
        { name: 'gambling' },
        { name: 'wallet' },
        { name: 'finance' },
        { name: 'promotion' },
        { name: 'social' },
        { name: 'media' },
        { name: 'security' },
        { name: 'utility' },
        { name: 'interface' },
        { name: 'education' },
        { name: 'health' },
        { name: 'content discovery' }
      ]
    }
  },
  created() {
  },
  methods: {
    updateOptionType({ name }) {
      let q = { name: 'rankings' }
      if(name !== 'All Types') {
        q = { name: 'rankings-type', params: { type: name } }
      }
      this.$router.push(q)
    },
    updateOptionCategory({ name }) {
      let q = { name: 'rankings' }
      if(name !== 'All Categories') {
        q = { name: 'rankings-category', params: { category: name } }
      }
      this.$router.push(q)
    }
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
  padding: 18px 30px 5px 30px;
  display:flex;
  justify-content: space-between;
  flex-flow:row wrap;
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

.table-top-wrapper {
  display:flex;
  flex-flow:row wrap;
  align-items: center;
  justify-content: center;
}
.dropdown {
  margin-right:30px;
  margin-bottom:5px;
  width: 125px;
}

@media (max-width: 750px) {
  .component-navigation-wrapper {
    margin-top:10px;
  }

  .logo-wrapper {
    margin-bottom:10px;
  }
}

@media (max-width: 570px) {
  .table-top-wrapper {
    width:100%;
    justify-content: center;
  }
  .dropdown {
    margin-bottom:20px;
    
  }
}

@media (max-width: 390px) {


  .dropdown {
    margin-right:0;
    width:100%;
  }
}


</style>
