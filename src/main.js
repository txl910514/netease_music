/**
 * Created by txl-pc on 2017/7/21.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/'
// import './assets/css/main.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
