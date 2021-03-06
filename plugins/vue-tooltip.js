import Vue from 'vue'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'
Vue.use(Tooltip, {
  delay: 200,
  placement: 'bottom',
  triggers: ['hover'],
  offset: 0
})