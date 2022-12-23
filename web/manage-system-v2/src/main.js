/*
 * @Author: otherChannel
 * @Date: 2022-12-19 11:39:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 20:23:10
 */

import Vue from 'vue';
import App from './App.vue';
import './utils/ui_library/element_ui/index.js';
import 'font-awesome/css/font-awesome.min.css';
import router from './router/index.js';
import store from '@/store/index.js'
import '@/router/promission.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
