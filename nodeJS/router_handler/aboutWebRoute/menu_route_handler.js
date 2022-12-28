/*
 * @Author: otherChannel
 * @Date: 2022-12-28 13:15:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-28 13:51:20
 */

// 导入操作数据库模块
const db = require('../../db/index.js');

// 获取菜单路由
exports.obtainMenuRoute = (req, res) => {
  // SQL查询语句
  const sqlStr = `SELECT m.id, m.path, m.name, m.hidden, m.component, m.meta, m.parent_id, m.sort, m.icon, m.title FROM (menu m INNER JOIN role_menu rm ON m.id = rm.menu_id) INNER JOIN users_role ur ON ur.role_id = rm.role_id AND ur.user_id = ?`;
  // 查询数据库 req.user 是解析token后 express-jwt中间件进行挂载的属性
  db.query(sqlStr, req.user.id, (err, results) => {
    // 操作数据库错误
    if(err) return res.cc(err);
    console.log("输出检验", results)
    res.send(results)
    // 操作数据库成功 查询结果错误
  })
}