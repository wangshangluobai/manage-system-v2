/*
 * @Author: otherChannel
 * @Date: 2022-12-20 10:29:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-21 19:31:00
 */

export default [
  {
    path: '/',
    component: () => import('@/views/register/index.vue') // 懒加载
    // component: resolve => require(['@/components/HelloWorld.vue'], resolve) // 异步组件
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue') // 懒加载
  }
]