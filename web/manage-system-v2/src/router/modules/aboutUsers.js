/*
 * @Author: otherChannel
 * @Date: 2022-12-20 10:29:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-19 10:49:14
 */

export default [
  {
    path: '/',
    hidden: true,
    redirect: '/home'
    // component: () => import('@/views/home/index.vue') // 懒加载
    // component: resolve => require(['@/components/HelloWorld.vue'], resolve) // 异步组件
  },
  {
    path: '/register',
    name: 'Register',
    hidden: true,
    component: () => import('@/views/register/index.vue'), // 懒加载
    meta: {
      title: '登录与注册',
      icon: '',
    },
  },
  {
    path: '/home',
    name: 'Home',
    hidden: true,
    redirect: {name: 'HomeInfo'},
    component: () => import('@/views/home/index.vue'), // 懒加载
    meta: {
      title: '首页',
      icon: '',
    },
    children: [
      {
        path: 'home-info',
        name: 'HomeInfo',
        component: () => import('@/views/home/homeInfo/index.vue'),
        
      }
    ]
  }/* ,{
    path: '*',
    redirect: '/404',
    name: 'NotFound',
    hidden: true,
    component: () => import('@/views/404/index.vue') // 懒加载
  } */,{
    path: '/404',
    name: 'NotFound',
    hidden: true,
    component: () => import('@/views/404/index.vue') // 懒加载
  }
]

/* 
iconClass 字体图标
redirect 重定向
children 子路由
*/


// [
//   {
//     "component": "Layout",
//     "path": "/user",
//     "redirect": "/user/list",
//     "name": "userManage",
//     "meta": {
//        "icon": "userManage",
//        "title": "用户管理"
//   	},
//     "children": [
//       {
//         "component": "user/user",
//         "path": "list",
//         "name": "userList",
//         "meta": {
//             "icon": "userList",
//             "title": "用户列表"
//         }
//       }, {
//         "component": "user/role",
//         "path": "role",
//         "name": "roleList",
//         "meta": {
//             "icon": "role",
//             "title": "角色列表"
//         }
//       }, {
//         "component": "user/permission",
//         "path": "permission",
//         "name": "permissionList",
//         "meta": {
//             "icon": "permission",
//             "title": "权限列表"
//         }
//     }]
// }]