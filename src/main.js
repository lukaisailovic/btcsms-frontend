// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navigation from './components/Navigation'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import VueSweetAlert from 'vue-sweetalert'

/**
 * CSS Imports
 */
import './assets/css/bootstrap.min.css'
import './assets/css/paper-kit.css'

/**
 * JS Imports
 */


import './assets/js/paper-kit.js'

Vue.config.productionTip = false
Vue.component('Navigation',Navigation)
Vue.use(VeeValidate);
Vue.use(VueSweetAlert)




window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
