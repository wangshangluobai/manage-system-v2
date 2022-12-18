/*
 * @Author: otherChannel
 * @Date: 2022-12-17 11:32:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-17 12:17:30
 */

// 导入axios库
import axios from 'axios';
// 导入基本设置项
import { baseURL, timeout } from '../../config';

// 实例化axios对象
const axios_ins = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  
});

// 请求拦截器
axios_ins.interceptors.request.use( config => {
  // 请求发送之前 统一做处理
  return config;
}, error => {
  // 请求发送失败 统一做处理
  return Promise.reject( error );
});

// 响应拦截器
axios_ins.interceptors.response.use( response => {
  // 2xx 范围状态码会触发此函数 对此状态结果做统一处理
  return response;
}, error => {
  // 非2xx 范围状态码会触发此函数 对此状态结果做统一处理
  return Promise.reject( error );
});

// 导出axios实例
export default axios_ins;