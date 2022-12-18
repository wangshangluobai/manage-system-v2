/*
 * @Author: otherChannel
 * @Date: 2022-12-17 10:28:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-17 14:27:52
 */

// 导入express包 以下模块化管理使用commonJS
const express = require('express');
// 实例化服务器
const app = express();
// 导入配置文件
const config = require('./config');
// 导入cors跨域解决包
const cors = require('cors');
// 导入表单验证模块
const joi = require('joi');
// 导入token解析中间件
const expressJWT = require('express-jwt');

// 注册全局中间件解决跨域
app.use( cors() );

// 封装res.cc函数用来处理错误提示 该函数应在一切可能发生错误的函数之前声明
app.use( (req, res, next ) => {
  // status默认值为0 表示失败
  // err的值 可能是一个错误对象 也可能是一个描述错误的字符串
  res.cc = function ( err, status = 0 ) {
    res.send({ 
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next();
});

// 配置解析表单数据中间件 只能解析 application/x-www-form-urlencoded 格式表单数据
app.use(express.urlencoded({ extended: false }));

// 配置路由之前 使用token解析中间件
// 除了api开头的路由地址 都需要解析token
app.use( expressJWT( { secret: config.jwtSecretKey }).unless( { path: [/^\/api/] } ))

// 导入用户路由模块
const userRouter = require('./router/user.js');
// 导入用户信息路由模块
const userInfoRouter = require('./router/user_info.js');

// 注册用户路由模块 统一加前缀 /api
app.use('/api', userRouter);
// 注册用户信息路由模块
app.use('/self', userInfoRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if(err instanceof joi.ValidationError) return res.cc(err);
  // token验证失败
  if(err.name === 'UnauthorizedError') return res.cc('身份认证失败');
  // 未知的错误
  res.cc(err);
});

//  监听80端口
app.listen(80, () => {
  console.log('server running');
});