/*
 * @Author: otherChannel
 * @Date: 2022-12-22 09:36:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-06 12:21:44
 */

import service from "@/utils/axios/index.js";

/* 注册 非api开头的请求都需要token */
export function signUp (data) {
  return service({
    url: '/api/reguser',
    method: 'POST',
    data
  });
}
/* 登录 */
export function signIn (data) {
  return service({
    url: '/api/login',
    method: 'POST',
    data
  });
}
/* 获取用户信息 */
export function obtainUserInfo () {
  return service({
    url: '/self/userinfo',
    method: 'GET'
  })
}
/* 根据用户权限 获取用户路由菜单 */
export function obtainRouteMenu () {
  return service({
    url: '/self/menu_route',
    method: 'GET'
  })
}