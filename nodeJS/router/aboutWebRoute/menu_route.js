/*
 * @Author: otherChannel
 * @Date: 2022-12-28 13:11:14
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-28 13:22:41
 */

// 导入 express 模块
const express = require('express');
// 实例化路由对象
const router = express.Router();
// 导入菜单路由处理函数
const routerHandler = require('../../router_handler/aboutWebRoute/menu_route_handler.js');

// 获取菜单路由信息
router.get('/menu_route', routerHandler.obtainMenuRoute);

//模块化导出router对象
module.exports = router;