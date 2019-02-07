<template>
  <LayoutMain>
    <AppSubmit :categories="categories" :app="app"/>
  </LayoutMain>
</template>

<script>
import LayoutMain from '~/components/LayoutMain'
import AppSubmit from '~/components/appSubmit/AppSubmit'
import { getCategories } from '~/helpers/api'

export default {
  components: {
    LayoutMain, AppSubmit
  },
  data() {
    return {
      categories: [],
      app: {
        name: '',
        link: '',
        logo: '',
        custom_json : '',
        product_screenshot: '',
        short_description: '',
        description: '',
        status: '',
        
        app_type: '',
        category: '',
        social: {
          discord: '',
          twitter: '',
          telegram: '',
          github: ''
        },
        accounts: [
          {
            id: 0,
            name: '',
            benefactor: false,
            curation: false,
            transfer: false,
            meta: false,
            delegation: false,
            posting: false
          }
        ],
      },
    }
  },
  async asyncData({ params, query, app }) {
    const categories = await getCategories(app.$axios)
    return { categories }
  }
}
</script>

<style>

</style>
