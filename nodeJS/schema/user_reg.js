/*
 * @Author: otherChannel
 * @Date: 2022-12-17 13:34:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 10:43:41
 */

// 导入定义验证规则的包
const joi = require('joi')

// 定义用户昵称和密码的验证规则
const nickname = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()
// 定义id email的验证规则  如果不在这里设置规则 即便是用户传了也不会使用
const id = joi.number().integer().min(1).required()
// const update_nickname = joi.string().alphanum().min(1).max(10)
const email = joi.string().email()
// 定义头像 avatar 验证规则
const avatar = joi.string().dataUri().required()

// 定义验证注册表单数据的规则对象
exports.register_schema = {
  body: {
    nickname,
    password,
    email
  }
}
// 定义验证登录表单数据的规则对象
exports.login_schema = {
  body: {
    nickname,
    password
  }
}
// 更新用户信息 验证规则对象
exports.update_userinfo_schema = {
  body: {
    id,
    nickname, 
    email,
  }
}
// 更新密码 验证规则对象
exports.update_password_schema = {
  body: {
    oldPwd: password,
    // 新密码不能与旧密码一致 且需要符合密码规则
    newPwd: joi.not(joi.ref('oldPwd')).concat(password)
  }
}
// 更新头像 验证规则对象
exports.update_avatar_schema = {
  body: {
    avatar
  }
}