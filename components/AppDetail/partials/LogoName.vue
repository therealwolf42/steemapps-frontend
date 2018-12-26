<template>
  <div class="component-app-detail-logoname">
    <div class="icon-wrapper">
      <a :href="`${link}/?ref=steemdapps`" target="_blank" class="icon-link">
        <img
          :src="logo || `https://steemitimages.com/u/${(logo_account && logo_account.name) ? logo_account.name : name}/avatar`"
          class="icon-image"
          width="42"
          height="42">
      </a>
    </div>
    <a :href="`${link}/?ref=steemdapps`" target="_blank">
      <h2 class="title">{{ display_name | capitalize }}</h2>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    display_name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    logo_account: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-app-detail-logoname {
  display:flex;
  align-items: center,
}

.title {
  margin-bottom:0;
  font-weight:700;
}

a {
  text-decoration: none;
}
</style>
