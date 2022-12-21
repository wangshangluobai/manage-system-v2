/*
 * @Author: otherChannel
 * @Date: 2022-12-19 11:39:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-20 09:56:51
 */

import Vue from 'vue';
import App from './App.vue';
import './utils/ui_library/element_ui/index.js';
import 'font-awesome/css/font-awesome.min.css'
import router from './router/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
