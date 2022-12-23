/*
 * @Author: otherChannel
 * @Date: 2022-12-20 10:29:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 16:04:08
 */

export default [
  {
    path: '/',
    // name: 'Home',
    component: () => import('@/views/home/index.vue') // 懒加载
    // component: resolve => require(['@/components/HelloWorld.vue'], resolve) // 异步组件
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/index.vue') // 懒加载
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue') // 懒加载
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue') // 懒加载
  }
]