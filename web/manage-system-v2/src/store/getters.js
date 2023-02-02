/*
 * @Author: otherChannel
 * @Date: 2022-12-22 15:18:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 13:14:28
 */

const getters = {
  userInfo: store => store.aboutUser.userInfo,
  routeMenu: store => store.aboutUser.routeMenu,
  addRoutes: store => store.permission.addRoutes,
  routes: store => store.permission.routes,
}

export default getters;