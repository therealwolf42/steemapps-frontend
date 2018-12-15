<template>
  <div class="component-ranking-table-name">
    <div class="icon-wrapper">
      <a :href="`${link}${ref_link ? ref_link : ''}`"
      target="_blank"
      :to="{ name: 'app-detail', params: { name } }"
      class="icon-link">
      <img
        :src="image || `https://steemitimages.com/u/${main_account || name}/avatar`"
        class="icon-image"
        width="42"
        height="42"
      >
      </a>
    </div>
    <div class="name-description-wrapper">
      <div class="name-description-top-wrapper">
      <h4 class="name">
        <a :href="`${link}${ref_link ? ref_link + 'steemdapps' /* TO-DO: Make it dynamic */ : ''}`"
          target="_blank"
          :to="{ name: 'app-detail', params: { name } }">
          {{ display_name }}
        </a>
        
      </h4>
      </div>
      <p class="description">{{ description }}</p>
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
    description: {
      type: String,
      required: true
    },
    main_account: {
      type: String,
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

.icon-image {
  border-radius: 4px;
  display: block;
}

.icon-link {
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 4px;
}

.icon-placeholder {
  background: $color--gray;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  border-radius: 4px;
}

.icon-wrapper {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
