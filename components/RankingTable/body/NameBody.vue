<template>
  <div class="component-ranking-table-name">
    <div class="icon-wrapper">
      <nuxt-link
      :to="{ name: 'app-detail', params: { name } }"
      class="icon-link">
      <img
        :src="image || `https://steemitimages.com/u/${(logo_account && logo_account.name) || name}/avatar`"
        class="icon-image">
      </nuxt-link>
    </div>
    <div class="name-description-wrapper">
      <div class="name-description-top-wrapper">
      <h4 class="name">
        <nuxt-link
          :to="{ name: 'app-detail', params: { name } }">
          {{ display_name | capitalize }}
        </nuxt-link>
      </h4>
      </div>
      <p class="description">{{ short_description || description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    display_name: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    short_description: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    logo_account: {
      type: Object,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    },
    ref_link: {
      type: String,
      required: false
    },
    app_type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-ranking-table-name {
  padding: 5px 0;
  display: flex;
  align-items: center;
  text-align: left;
  margin-right: 20px;
  justify-content: left;
}

.name-description-top-wrapper {
  display:flex;
}


.description {
  margin: 0;
  cursor:default;
}

.name {
  margin: 0;
  margin-bottom: 0.15rem;
  font-size: 0.9rem;
}

</style>
