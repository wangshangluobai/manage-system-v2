/*
 * @Author: otherChannel
 * @Date: 2022-12-17 10:28:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-28 13:26:19
 */

// 导入express包 以下模块化管理使用commonJS
const express = require("express")
// 实例化服务器
const app = express()
// 导入配置文件
const config = require("./config")
// 导入cors跨域解决包
const cors = require("cors")
// 导入表单验证模块
const joi = require("joi")
// 导入token解析中间件
const expressJWT = require("express-jwt")

// 注册全局中间件解决跨域
app.use(cors())

// 封装res.cc函数用来处理错误提示 该函数应在一切可能发生错误的函数之前声明
app.use((req, res, next) => {
  // status默认值为0 表示失败
  // err的值 可能是一个错误对象 也可能是一个描述错误的字符串
  res.cc = function (err, status = 0) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 配置解析表单数据中间件 只能解析 application/x-www-form-urlencoded 格式表单数据
/**
 * 如果后续需要使用json类型的参数 需要使用body-parser插件
 * 目前我在axios中配置了application/x-www-form-urlencoded相关的请求头
 * 使得web发到后端的数据都变成了此格式 如果必须使用json格式 则需要body-parser
 *  */
app.use(express.urlencoded({ extended: false }))

// 配置路由之前 使用token解析中间件
// 除了api开头的路由地址 都需要解析token
app.use(
  expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] })
)

// 导入 用户 路由模块
const userRouter = require("./router/aboutUser/user.js")
// 导入 用户信息 路由模块
const userInfoRouter = require("./router/aboutUser/user_info.js")
// 导入 菜单路由 路由模块
const menuRouteRouter = require("./router/aboutWebRoute/menu_route.js")

// 注册 用户 路由模块 统一加前缀 /api
app.use("/api", userRouter)
// 注册 用户信息 路由模块
app.use("/self", userInfoRouter)
// 注册 菜单路由 路由模块
app.use("/self", menuRouteRouter)

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) return res.cc(err)
  // token验证失败
  if (err.name === "UnauthorizedError") return res.cc("身份认证失败", 401)
  // 未知的错误
  res.cc(err)
})

//  监听80端口
app.listen(80, () => {
  console.log("server running")
})
