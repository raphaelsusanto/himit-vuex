import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import {router} from './router/router';
import { store } from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'


Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
