/*
 * @Author: otherChannel
 * @Date: 2022-12-20 09:51:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-19 11:07:26
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/** router方法重写
 *  3.1.0版本更新 导致会return一个promise对象 所以要么catch要么处理这个promise对象
 *  */
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
}

export const constantRoutes = [
  {
    path: '/',
    hidden: true,
    component: () => import('@/views/home/index.vue') // 懒加载
  },{
    path: '/register',
    name: 'Register',
    hidden: true,
    component: () => import('@/views/register/index.vue'), // 懒加载
    meta: {
      title: '登录与注册',
      icon: '',
    },
  },{
    path: '/home',
    name: 'Home',
    hidden: true,
    component: () => import('@/views/home/index.vue'), // 懒加载
    redirect: { name: 'HomeInfo' },
    meta: {
      title: '首页',
      icon: '',
    },
    children: [ /* 网站导航， 系统管理 (权限管理， 用户管理) */ 
      {
        path: 'home-info',
        name: 'HomeInfo',
        component: () => import('@/views/home/homeInfo/index.vue'),
        meta: {
          title: '广场',
          icon: '',
        },
      }
    ]
  },{
    path: '/404',
    name: 'NotFound',
    hidden: true,
    component: () => import('@/views/404/index.vue') // 懒加载
  }
]

const router = new Router({
  routes: constantRoutes,
  mode: 'history'
});

/* 没错 可以同时使用 前者使用解构赋值引入 后者默认引入 */
export default router