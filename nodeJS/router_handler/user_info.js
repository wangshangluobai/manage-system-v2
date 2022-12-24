/*
 * @Author: otherChannel
 * @Date: 2022-12-17 13:42:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-23 14:37:39
 */

// 导入操作数据库模块
const db = require('../db/index.js');
// 导入密码处理模块
const bcrypt = require('bcryptjs');

// 获取用户基础信息
exports.obtainUserInfo = (req, res) => {
  // SQL查询语句
  const sqlStr3 = `select id, username, nickname, email, user_pic from users where id=?`;
  // 查询数据库  req.user 是解析token之后 express-jwt中间件进行挂载的属性
  db.query(sqlStr3, req.user.id, (err, results) => {
    console.log("输出检验", results)
    // 操作数据库错误
    if(err) return res.cc(err);
    // 操作数据库成功 查询结果错误
    if(results.length !== 1) return res.cc('获取用户信息失败');
    res.send({
      status: 200,
      message: '查询成功',
      data: results[0]
    });
  });
}
// 添加 更改 用户信息
exports.updateUserInfo = (req, res) => {
  if(req.body.id !== req.user.id) return res.cc('更新用户基本信息失败');
  // SQL查询语句
  const sqlStr4 = `update users set ? where id=?`;
  // 查询数据库
  db.query(sqlStr4, [req.body, req.user.id], (err, results) => {
    // 操作数据库错误
    if(err) return res.cc(err);
    // 操作数据库正常 返回结果不符
    if(results.affectedRows !== 1) return res.cc('更新用户基本信息失败');
    // 更新成功
    res.cc('更新用户基本信息成功', 1);
  });
}
// 修改密码
exports.updatePassword = (req, res) => {
  // 根据id查询用户 判断用户是否存在
  const sqlStr5 = `select * from users where id=?`;
  db.query(sqlStr5, req.user.id, (err, results) => {
    // 执行SQL语句失败
    if(err) return res.cc(err);
    // 执行SQL语句成功 返回结果不符
    if(results.length !== 1) return res.cc('更改密码失败');
    // 判断密码是否正确
    const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password);
    if(!compareResult) return res.cc('旧密码错误');
    // 定义更新密码SQL语句
    const sqlStr6 = `update users set password=? where id=?`;
    // 加密新密码
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
    // 执行操作数据库
    db.query(sqlStr6, [newPwd, req.user.id], (err, results) => {
      // 操作数据库错误
      if(err) return res.cc(err);
      // 操作数据库成功 返回结果不符
      if(results.affectedRows !== 1) return res.cc('更改密码失败');
      // 修改密码成功
      res.cc('修改密码成功', 1);
    });
  });
}
// 修改头像
exports.updateAvatar = (req, res) => {
  // 定义SQL语句 根据id查询 用户是否存在
  const sqlStr7 = `select * from users where id=?`;
  // 操作数据库
  db.query(sqlStr7, req.user.id, (err, results) => {
    // 操作数据库错误
    if(err) return res.cc(err);
    // 操作数据库正常 返回结果不符
    if(results.length !== 1) return res.cc('更改头像失败');
    // 定义更新头像的 SQL语句
    const sqlStr8 = `update users set user_pic=? where id=?`;
    db.query(sqlStr8, [req.body.avatar, req.user.id], (err, results) => {
      // 操作数据库失败
      if(err) return res.cc(err);
      // 操作数据库成功 返回值不符
      if(results.affectedRows !== 1) return res.cc('更改头像失败');
      // 更新用户头像成功
      res.cc('修改头像成功', 1);
    });
  });
}