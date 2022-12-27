/*
 * @Author: otherChannel
 * @Date: 2022-12-20 10:29:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-27 18:49:14
 */

export default [
  {
    path: '/',
    hidden: true,
    component: () => import('@/views/home/index.vue') // 懒加载
    // component: resolve => require(['@/components/HelloWorld.vue'], resolve) // 异步组件
  },
  {
    path: '/register',
    name: 'Register',
    hidden: true,
    component: () => import('@/views/register/index.vue'), // 懒加载
    meta: {
      title: '登录与注册',
    },
  },
  {
    path: '/home',
    name: 'Home',
    hidden: true,
    component: () => import('@/views/home/index.vue'), // 懒加载
    meta: {
      title: '首页',
    },
    children: [ /* 网站导航， 系统管理 (权限管理， 用户管理) */ ]
  },{
    path: '/user',
    name: 'User',
    hidden: false,
    component: () => import('@/views/user/index.vue'), // 懒加载
    meta: {
      title: '个人中心',
    },
    children: [
      {
        path: '/user/movies-records',
        name: 'MoviesRecords',
        hidden: false,
        component: () => import('@/views/user/userCenter/moviesRecords/index.vue'), // 懒加载
        meta: {
          title: '影视记录',
        },
      },{
        path: '/user/diary',
        name: 'Diary',
        hidden: false,
        component: () => import('@/views/user/userCenter/diary/index.vue'), // 懒加载
        meta: {
          title: '日记',
        },
      },,{
        path: '/user/keep-accounts',
        name: 'KeepAccounts',
        hidden: false,
        component: () => import('@/views/user/userCenter/keepAccounts/index.vue'), // 懒加载
        meta: {
          title: '记账',
        },
      },
    ]
  },{
    path: '/learningNotes',
    name: 'LearningNotes',
    hidden: false,
    component: () => import('@/views/learningNotes/index.vue'),
    meta: {
      title: '学习笔记',
    },
  },{
    path: '/sysMgt',
    name: 'SysMgt',
    hidden: false,
    component: () => import('@/views/sysMgt/index.vue'),
    meta: {
      title: '系统管理',
    },
  },{
    path: '*',
    redirect: '/404',
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