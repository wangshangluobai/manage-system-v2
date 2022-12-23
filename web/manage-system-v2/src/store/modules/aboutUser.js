/*
 * @Author: otherChannel
 * @Date: 2022-12-22 15:12:09
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-23 14:09:44
 */

import { setToken, getToken, removeToken } from '@/utils/setToken/index.js';
import setting from '@/setting.js';
import { signIn, obtainUserInfo } from '@/request/register.js';

/* 仓库数据 */
const state = {
  // 当页面刷新后 从本地存储获取token 获取失败则为空字符串
  token: getToken(setting.tokenKey) || null,
  userInfo: {}
};
/* 修改仓库数据方法 */
const mutations = {
  // 添加token
  SAVE_TOKEN: (state, token) => {
    // 将token存在state中
    state.token = token;
    // 将token存在localStorage中
    setToken(setting.tokenKey, token);
  },
  // 移除token
  REMOVE_TOKEN: (state) => {
    // 移除仓库中的token
    state.token = null;
    // 移除localStorage中的token
    removeToken();
  },
  // 添加用户信息
  SET_USER_INFO: (state, payload) => {
    // 将用户信息存储在state中
    state.userInfo = payload;
  },
  // 移除用户信息
  REMOVE_USER_INFO: (state) => {
    // 将仓库中的用户信息移除
    state.userInfo = {};
  }
};
/* 调用方法 异步方法 */
const actions = {
  // 用户登录
  async sendSignIn(context, payload) {
    // 发送登录请求 与后端交互
    const res = await signIn(payload.data);
    // 判断登录状态
    if(res.status === 200){
      // 登录成功 储存token
      context.commit('SAVE_TOKEN', res.token);
      // 路由页面跳转
      payload.self.$router.push({name: 'Home'})
      // 登录成功提示
      payload.self.$message({ message: res.message, type: 'success' });
    } else {
      // 登录失败提示
      payload.self.$message({ message: res.message, type: 'error' });
    }
  },
  // 获取用户信息
  async getUserInfo(context) {
    // 发送获取用户信息请求 同后端交互
    const res = await obtainUserInfo();
    // 判断交互状态
    if(res.state === 200){
      // 获取用户信息成功 派发mutation函数 存储用户信息
      context.commit('SET_USER_INFO', {...res.data});
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}