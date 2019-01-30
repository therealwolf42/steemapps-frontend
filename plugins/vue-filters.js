import Vue from 'vue'
Vue.filter('firstLetter', value => {
  if (value) {
    return value.charAt(0)
  }
})

const ignore_names = ['ntopaz']

Vue.filter('capitalize', value => {
  if (value) {
    if(ignore_names.includes(value.toLowerCase())) return value
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
})