// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import VueSweetAlert from 'vue-sweetalert'
import {store} from './store'
import auth from './auth'


/**
 * Component Import
 */
import Navigation from './components/Navigation'
import Footer from './components/Footer'

/**
 * CSS Imports
 */
import './assets/css/bootstrap.min.css'
import './assets/css/paper-kit.css'

/**
 * JS Imports
 */
import './assets/js/jquery-ui-1.12.1.custom.min.js'
import './assets/js/nouislider.js'
import './assets/js/paper-kit.js'

Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(VueSweetAlert)

/**
 * Component Register
 */
Vue.component('Navigation',Navigation)
Vue.component('Footer',Footer)

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){
    if (auth.isAuthenticated() == true) {
      auth.getUser().then((user)=>{
        this.$store.dispatch('SignUserIn',user);
      }).catch((err)=>{
        auth.signOut();
      });
    }
  },
})
