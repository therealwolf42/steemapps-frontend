<template>
  <div class="component-app-detail">
    <div class="app-detail-container">
      <div class="title-container">
        <LogoName :name="app.name" :image="app.image" :link="app.link" :display_name="app.display_name" :logo_account="app.accounts.filter(x => x.logo)[0]"/>
      </div>
      <img :src="app.product_screenshot"> 
      <div class="description">
        {{ app.description }}
      </div>
      <a :href="`${app.link}/?ref=steemdapps`" target="_blank">
        <div class="button lila_button">Launch App</div>
      </a>
      <div class="button button_disabled dark_blue_button" :disabled="true">
        Support App
        <span style="font-size:0.5rem;">(Coming soon)</span>
      </div>
      <ExtraBar :app_name="app.name" :status="app.status" :last_updated="app.last_update" :created="app.createdAt"/>
    </div>
    <nuxt-link :to="'/'" class="back">
      Back
    </nuxt-link>
  </div>
</template>

<script>
import LogoName from './partials/LogoName'
import ExtraBar from './partials/ExtraBar'
import Info from './partials/Info'
export default {
  props: {
    app: {
      type: Object,
      required: true
    }
  },
  components: {
    LogoName, ExtraBar, Info
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-app-detail {
  max-width:500px;
  margin: 0 auto;
  height: 100%;
  padding: 20px 10px;
  width:95%;
  display:flex;
  flex-flow: column;
  justify-content: center;
}

.app-detail-container {
  min-width:400px;
  margin:0 auto;
}

.title-container {
  display:flex;
  align-items:center;
}

.title {
  margin-bottom:0;
  font-weight:700;
}

.image {
  width:42px;
  height: 42px;
  margin-right:10px;
}

.description {
  margin-bottom:15px;
}

.button {
  margin-bottom:10px;
}

@media (max-width:400px) {
  min-width:0;
}

</style>
