/*
 * @Author: otherChannel
 * @Date: 2022-12-20 09:51:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 19:48:24
 */
import Vue from 'vue';
import Router from 'vue-router';
import aboutUsers from '@/router/modules/aboutUsers.js'

Vue.use(Router);

const router = new Router({
  routes: [
    ...aboutUsers,
  ],
  mode: 'history'
});

export default router