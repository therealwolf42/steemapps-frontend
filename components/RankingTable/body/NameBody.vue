<template>
  <div class="component-ranking-table-name">
    <div class="icon-wrapper">
        <a
        :to="{ name: 'app-detail', params: { name } }"
        class="icon-link">
        <img
          :src="logo || `https://steemitimages.com/u/${(logo_account && logo_account.name) ? logo_account.name : name}/avatar`"
          class="icon-image">
        </a>
      </div>
      <div class="right-wrapper">
        <div class="top-wrapper">
          
          <div class="name-description-wrapper">
            <div class="name-description-top-wrapper">
            <h4 class="name">
              <a
                :to="{ name: 'app-detail', params: { name } }">
                {{ display_name | capitalize }}
              </a>
            </h4>
            </div>
            <p class="description">{{ short_description || description }}</p>
            
          </div>
        </div>
        <div class="bottom-wrapper">
          <div class="app-type bottom-partial">{{ app_type.toUpperCase() }}</div>
          <div class="category bottom-partial">{{ category.toUpperCase() }}</div>
        </div>
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
    logo: {
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
    },
    category: {
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
  text-align: left;
  margin-right: 10px;
  justify-content: left;
  align-items: center;
  flex-flow:row;
}

.name-description-top-wrapper {
  display:flex;

}


.description {
  margin: 0;
}

.name {
  margin: 0;
  margin-bottom: 0.15rem;
  font-size: 0.9rem;
}

.top-wrapper {
  display:flex;
  padding-bottom:6px;
}

.bottom-wrapper {
  display:flex;
}

.bottom-partial {
  margin-right:10px;
}

.app-type, .category {
  background-color: #eaeaea;
  color: #727272;
  padding: 4px 12px;
  width: fit-content;
  border-radius: 5px;
  font-size: 0.6rem;
  font-weight:700;
}

</style>
