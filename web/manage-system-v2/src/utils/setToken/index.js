/*
 * @Author: otherChannel
 * @Date: 2022-12-20 12:41:05
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-20 12:43:50
 */

// 添加 设置token
export function setToken(tokenKey, token){
  return localStorage.setItem(tokenKey, token)
}
// 读取 使用token
export function getToken(tokenKey){
  return localStorage.getItem(tokenKey)
}
// 删除token
export function removeToken(tokenKey){
  return localStorage.removeItem(tokenKey)
}