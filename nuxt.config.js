require('dotenv').config({ path: './.env' })

const env = {
  apiUrl: process.env.API_URL || 'http://localhost:5000/api/',
  refAccount: process.env.REF_ACCOUNT || 'steemdapps',
  cdnPublicPath: process.env.CDN_PUBLIC_PATH || '/_nuxt/',
  googleAnalytics: process.env.GOOGLE_ANALYTICS || 'UA-000000-1',
  mode: process.env.MODE || 'universal'
}

module.exports = {
  mode: 'universal',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'ant-design-vue/dist/antd.less', lang: 'less' },
    { src: '~/assets/css/main.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //{ src: '~/plugins/ant-design-vue.js', ssr: false },
    { src: '~/plugins/vue-filters' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/vue-notification', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    '@nuxtjs/router',
    ['@nuxtjs/google-analytics', {
      id: env.googleAnalytics
    }]

  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseUrl: env.apiUrl,
    proxyHeaders: false,
    retry: true
  },

  head: {
    title: 'Steem Apps - Showcasing Apps & dApps on Steem',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Rankings of Apps & dApps on Steem.' }
    ],
    link: [
      {
        rel: 'apple-icon',
        href: '/favicons/apple-icon.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        href: '/favicons/favicon-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        href: '/favicons/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        href: '/favicons/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'manifest',
        href: '/favicons/manifest.json'
      }
    ]
  },
  generate: {
    dir: 'html'
  },

  /*
  ** Build configuration
  */
  build: {
    /*babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue'
            // libraryDirectory: 'es'
            // style: true
          },
          'ant-design-vue'
        ]
      ]
    },*/
    loaders: {
      less: { javascriptEnabled: true }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
