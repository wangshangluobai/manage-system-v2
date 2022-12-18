/*
 * @Author: otherChannel
 * @Date: 2022-12-17 12:52:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-17 13:38:28
 */

// 导入 express 包
const express = require('express')
// 实例化 Router 实例
const router = express.Router()
// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user.js')

// 导入验证数据Joi的中间件
const expressJoi = require('../utils/joi_mid.js')

// 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user_reg.js')

// 注册
router.post('/reguser', expressJoi(reg_login_schema), user_handler.regUser)

// 登录
router.post('/login', expressJoi(reg_login_schema), user_handler.login)

// 模块化导出
module.exports = router