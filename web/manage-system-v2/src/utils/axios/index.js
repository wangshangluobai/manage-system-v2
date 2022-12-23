/*
 * @Author: otherChannel
 * @Date: 2022-12-22 08:50:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-23 14:12:53
 */

import axios from 'axios';
import { getToken } from '../setToken/index.js';
import setting from '@/setting.js';

const service = axios.create({
  baseURL: setting.baseURL,
  timeout: setting.timeout,
});

// 请求拦截器
service.interceptors.request.use((config) => {
  // 在请求发送之前统一配置
  config.headers["token"] = getToken(setting.tokenKey);
  config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  return config;
}, (error) => {
  return Promise.reject(error);
})
// 响应拦截器
service.interceptors.response.use((response) => {
  // 在响应收到之前统一配置
  if(response.status === 200){
    return response.data;
  }
}, (error) => {
  return Promise.reject(error);
})
// 导出
export default service;