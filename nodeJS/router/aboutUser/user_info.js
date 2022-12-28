/*
 * @Author: otherChannel
 * @Date: 2022-12-17 13:39:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-28 13:08:42
 */

// 导入 express 模块
const express = require('express');
// 实例化路由对象
const router = express.Router();
// 导入用户信息路由处理函数
const routerHandler = require('../../router_handler/aboutUser/user_info.js');
// 导入验证数据的中间件
const expressJoi = require('../../utils/joi_mid.js');
// 导入需要的验证规则对象
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../../schema/user_reg');

// 获取用户信息
router.get('/userinfo', routerHandler.obtainUserInfo);
// 添加 修改 更新 用户信息
router.post('/userinfo', expressJoi(update_userinfo_schema), routerHandler.updateUserInfo);
// 修改密码
router.post('/updatepwd', expressJoi(update_password_schema), routerHandler.updatePassword);
// 修改头像
router.post('/update/avatar', expressJoi(update_avatar_schema), routerHandler.updateAvatar);

// 模块化导出router对象
module.exports = router;