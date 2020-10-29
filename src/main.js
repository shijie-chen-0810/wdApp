import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'assets/css/reset.css'
import 'assets/css/iconfont.css'

import md5 from 'js-md5'
Vue.prototype.$md5 = md5    //this.$md5(password)
Vue.prototype.Base64 = require('js-base64').Base64  //this.Base64.encode(password)

 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
