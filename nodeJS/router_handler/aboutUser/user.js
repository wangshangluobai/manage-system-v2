/*
 * @Author: otherChannel
 * @Date: 2022-12-17 13:42:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-28 13:38:10
 */

// 导入数据库操作模块
const db = require('../../db/index.js');
// 导入加密包
const bcrypt = require('bcryptjs');
// 导入生成Token模块
const jwt = require('jsonwebtoken');
// 导入config配置文件
const config = require('../../config');

// 用户注册路由处理函数
exports.regUser = (req, res) => {
  // 获取客户端提交到服务器的用户信息
  const userInfo = req.body;
  // 定义SQL语句 查询用户名是否被占用
  const sqlStr = `select * from users where nickname=? or email=?`;
  db.query(sqlStr, [ userInfo.nickname, userInfo.email ], (err, results) => {
    // 执行SQL语句失败
    if(err) return res.cc(err);
    // 判断用户名和邮箱是否被占用  查询数据库结果反馈分类 
    if(results.length === 2) return res.cc('用户昵称和邮箱均被已占用');
    // 两数据被同一行占用
    if(results.length ===1 && userInfo.nickname === results[0].nickname && userInfo.email === results[0].email) return res.cc('用户昵称和邮箱均已被占用');
    // 两数据其中nickname项已被占用
    if(results.length ===1 && userInfo.nickname === results[0].nickname) return res.cc('用户昵称已被占用');
    // 两数据其中email项已被占用
    if(results.length ===1 && userInfo.email === results[0].email) return res.cc('邮箱已被占用');
    /* if(results.length > 0){
      return res.cc('用户名已被占用')
    } */
    // 调用bcrypt.hashSync(明文密码, 随机盐长度)对密码进行加密
    userInfo.password = bcrypt.hashSync(userInfo.password, 10);
    // 定义插入新用户的SQL语句
    const sqlStr1 = `insert into users set ?`;
    // 执行SQL语句
    db.query(sqlStr1, { nickname: userInfo.nickname, password: userInfo.password, email: userInfo.email }, (err, results) => {
      // 判断SQL语句是否执行成功
      if(err) return res.cc(err);
      // 判断影响行数是否为1
      if(results.affectedRows !== 1) return res.cc('注册失败');
      // 注册成功
      res.cc('注册成功', 200);
    });
  });
}

// 用户登录路由处理函数
exports.login = (req, res) => {
  // 获取客户端传来的信息
  const userInfo = req.body;
  // sql查询语句
  const sqlStr2 = `select * from users where nickname=?`;
  // 执行查询
  db.query(sqlStr2, userInfo.nickname, (err, results) => {
    // 查询出现错误
    if(err) return res.cc(err);
    // 查询成功 结果不符
    if(results.length !== 1) return res.cc('登录失败');
    // 使用scrypt判断密码是否一致
    const comparerResult = bcrypt.compareSync(userInfo.password, results[0].password);
    if(!comparerResult) return res.cc('登录失败');
    // 置空用户信息中不便出现在token中的数据
    const user = { ...results[0], password: '', user_pic: '' }
    // 对用户进行加密生成token字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn });
    res.send({
      status: 200,
      message: '登录成功',
      nickname: userInfo.nickname,
      token: 'Bearer ' + tokenStr
    });
  });
}