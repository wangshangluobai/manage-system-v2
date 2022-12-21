/*
 * @Author: otherChannel
 * @Date: 2022-12-20 12:26:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-20 17:27:10
 */

// 账号验证
export function nameRule (rule, value, callback) {
  let reg = /(^[a-zA-Z0-9]{4,12}$)/;
  if (value === '') {
    callback(new Error('账号不能为空'));
  } else if (!reg.test(value)){
    callback(new Error('账号应是4-12位字符'));
  } else {
    callback();
  }
}
// 密码验证
export function passRule (rule, value, callback) {
  let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  if (value === '') {
    callback(new Error('密码不能为空'));
  } else if (!pass.test(value)){
    callback(new Error("密码应是6-12位且包含大小写字母、数字及特殊符号"));
  } else {
    callback();
  }
}