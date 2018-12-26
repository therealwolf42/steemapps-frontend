<template>
  <div class="component-app-detail-extra-bar">
    <p class="info">Status: <span class="info-bold">{{ status | capitalize }}</span></p>
    <p class="info">Submitted: <span class="info-bold">{{ created_ }}</span></p>
    <p class="info">Last updated: <span class="info-bold">{{ last_updated_ }}</span></p>
    <nuxt-link class="link"
      :to="{ name: 'apps-edit', params: { name: app_name } }"
    >Edit App</nuxt-link>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    created_ () {
      return moment.utc(this.created).format(`MMM Do, YYYY`)
    },
    last_updated_ () {
      return moment.utc(this.last_updated).format(`MMM Do, YYYY`)
    }
  },
  props: {
    app_name: {
      type: String,
      required: true
    },
    last_updated: {
      type: String,
      required: true
    },
    created: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-app-detail-extra-bar {
  padding:30px 40px;
  background-color:#dfdfdf;
  border-radius:5px;
  box-shadow: 0 10px 20px rgba(141, 141, 141, 0.075);
  border-radius: 5px;
  transition: background .2s ease;
  margin:0 auto;
  margin-top:20px;
}

link {

}

.info {
  margin-bottom:15px;
}

.info-bold {
  font-weight: 700;
}

</style>
