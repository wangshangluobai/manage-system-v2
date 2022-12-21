/*
 * @Author: otherChannel
 * @Date: 2022-12-20 09:51:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-20 10:36:59
 */
import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/router/modules/routes.js'

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});

export default router