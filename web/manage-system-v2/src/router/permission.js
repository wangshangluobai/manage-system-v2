/*
 * @Author: otherChannel
 * @Date: 2022-12-22 18:50:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-18 12:27:36
 */

import router from '@/router/index.js';
import store from '@/store/index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { isEmptyObj } from '@/utils/tools.js'

const whiteList = [ '/register', '/404'];

router.beforeEach( async(to, from, next) => {
  // 进度条开始
  NProgress.start();
  // check token
  const hasToken = store.state.aboutUser.token;
  if(hasToken){
    // has token
    if(to.path === '/register'){ // notallow to register page
      next('/home');
    } else { // to other pages
      // check userInfo and obtain userInfo
      if(isEmptyObj(store.getters.userInfo)) store.dispatch('aboutUser/getUserInfo');
      // has userInfo and check menu route
      const hasRouters = store.getters.addRoutes && store.getters.addRoutes.length > 0
      if(hasRouters){ // has menu route
        next();
      }else{ // hasn`t menu route and obtain raw meun route
        await store.dispatch('aboutUser/getMenuRoute');
        // obtain raw menu route
        let rawMenu = store.getters.routeMenu;
        // handle raw menu route
        const accessRoutes = await store.dispatch('permission/generateRoutes', rawMenu);
        // add dynamic route
        accessRoutes.forEach(item => {
          router.addRoute('Home', item);
        })
        /** next
         *  next({ ...to }) 的目的,是保证路由添加完了再进入页面 (可以理解为重进一次)
         *  replace: true 重进一次, 不保留重复历史
         *  */
        next({ ...to, replace: true, })
      }
      
    }
  } else {
    // hasn`t token and in the white list
    if(whiteList.includes(to.path)){
      next();
    } else {
      next('/register');
    }
  }
})

/* 全局后置守卫 */
router.afterEach(() => {
  NProgress.done();
})