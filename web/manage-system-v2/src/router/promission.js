/*
 * @Author: otherChannel
 * @Date: 2022-12-22 18:50:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 20:30:00
 */

import router from '@/router/index.js';
import store from '@/store/index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const whiteList = [ '/register', '/404'];

router.beforeEach( async(to, from, next) => {
  // 进度条开始
  NProgress.start();
  // 验证token
  const token = store.state.aboutUser.token;
  if(token){
    if(to.path === '/register'){
      next('/home');
      NProgress.done();
    } else {
      await store.dispatch('aboutUser/getUserInfo');
      next();
    }
  } else {
    if(whiteList.includes(to.path)){
      next();
    } else {
      next('/register');
      NProgress.done();
    }
  }
})

router.afterEach(() => {
  NProgress.done();
})