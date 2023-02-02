/*
 * @Author: otherChannel
 * @Date: 2022-12-19 11:39:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-20 11:56:18
 */

import Vue from 'vue';
import App from './App.vue';
import './utils/ui_library/element_ui/index.js';
import '@/assets/iconfont/iconfont.css';
import router from './router/index.js';
import store from '@/store/index.js';
import '@/router/permission.js';
// import '@/assets/css/swiper-bundle.min.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
