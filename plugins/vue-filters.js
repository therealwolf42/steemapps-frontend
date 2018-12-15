import Vue from 'vue'
Vue.filter('firstLetter', value => {
  if (value) {
    return value.charAt(0)
  }
})