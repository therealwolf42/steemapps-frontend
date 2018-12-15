export default function({ app, $axios, $sentry }) {
  // Doesn't work right now
  // https://github.com/nuxt-community/sentry-module
  $axios.onError(error => {
    
    //app.$sentry.captureException(new Error(error))
  })

  $axios.onRequest(req => {

  })
}
