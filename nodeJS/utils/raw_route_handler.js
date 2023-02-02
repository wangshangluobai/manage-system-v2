/*
 * @Author: otherChannel
 * @Date: 2023-01-06 09:38:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-06 10:52:21
 */

// 辅助函数 调整结构
function screenMenuItems(obj) {
  let menuItem = null;
  menuItem = {
    id: obj.id,
    parent_id: obj.parent_id,
    path: obj.path,
    name: obj.name,
    hidden: !!obj.hidden,
    component: obj.component,
  }
  if(obj.meta) menuItem['meta'] = { icon: obj.icon, title: obj.title }
  if(obj.children || !obj.parent_id) menuItem['children'] = obj.children;
  return menuItem;
}

function arrayToMenu (arrRaw, item) {
  for (let i=arrRaw.length-1; i >= 0; i--) { /* 倒序循环 提高效率 */
    if (item) {
      if (arrRaw[i].check) continue; /* 已经添加过的则跳过 */
      if (arrRaw[i].parent_id === 0){
        if(arrRaw[i].title){
          arrRaw[i] = screenMenuItems(arrRaw[i]);
        }
        continue;
      } /* 如果是顶级路由对象 则处理后跳过 */
      if (item.id === arrRaw[i].parent_id) { /* 查询出子路由 */
      arrayToMenu(arrRaw, arrRaw[i]); /* 子路由递归查询子路由 */
        if (item.children) { /* 父级路由已存在children数组 */
          item.children.push(screenMenuItems(arrRaw[i])); /* 添加辅助函数返回的子路由 */
          arrRaw[i].check = true; /* 添加标识 */
        } else { /* 父级路由第一次添加children数组 */
          item['children'] = [screenMenuItems(arrRaw[i])]; /* 声明并赋值 */
          arrRaw[i].check = true; /* 添加标识 */
        }
      }
    } else {
      arrayToMenu(arrRaw, arrRaw[i]); /* 递归开始 传递参数 */
    } 
  }
  return arrRaw; /* 返回处理后的数组 */
}

// 使用处理
// let arr = arrayToMenu(arrRaw).filter((item) => item.parent_id === 0);

module.exports = arrayToMenu;