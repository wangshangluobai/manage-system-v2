/*
 * @Author: otherChannel
 * @Date: 2022-12-17 10:42:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-17 10:43:32
 */
// 导入 mysql 数据库操作模块
const mysql = require('mysql')

// 创建数据库操作实例
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'otherchannel',
  database: 'otherchannel'
})

// 模块化导出
module.exports = db