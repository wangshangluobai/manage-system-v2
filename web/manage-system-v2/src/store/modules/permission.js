/*
 * @Author: otherChannel
 * @Date: 2023-01-07 11:02:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-19 11:07:58
 */

import { filterAsyncRouter } from '@/utils/tools';
import { constantRoutes } from "@/router/index.js";

const state = {
  routes: [], /* 全部的路由 where 符合用户权限  */
  addRoutes: [] /* 动态路由 where 处理过调用路径 */
};

const mutations = {
  SET_ROUTES: (state, payload) => {
    state.addRoutes = payload;
    let tempRoutes = [...constantRoutes]; /* 深复制 不影响静态路由 */
    /* 查找home路由 并合并路由 为其添加子路由 */
    tempRoutes.find(item => item.name === 'Home').children.push(...payload);
    /* 放入仓库 统一管理 */
    state.routes = [...tempRoutes, { path: '*', redirect: '/404', hidden: true }];
  }
};

const actions = {
  async generateRoutes(context, menus){ /* 路由动态路径处理 */
    const accessedRoutes = await filterAsyncRouter(menus); /* 过滤处理方法 */
    context.commit('SET_ROUTES', accessedRoutes); /* 提交保存方法 */
    return accessedRoutes; /* 返回给router的permission使用 */
  }
};

export default {
  namespaced: true, state, mutations, actions
}