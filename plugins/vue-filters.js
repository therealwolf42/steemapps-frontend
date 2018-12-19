import Vue from 'vue'
Vue.filter('firstLetter', value => {
  if (value) {
    return value.charAt(0)
  }
})

Vue.filter('capitalize', value => {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
})