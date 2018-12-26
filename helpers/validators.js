/* eslint-disable */
export function isValidEmail (email) {
  if (email.length === 0) { return false }
  /* from vuelidate library: https://github.com/monterail/vuelidate/blob/master/src/validators/email.js */
  var re =  /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  return re.test(email)
}
/* eslint-enable */

export function convertMissing(x) {
  if(x === 'app') {
    return 'App Name'
  } else if(x === 'short_description') {
    return 'Short Description'
  }
}