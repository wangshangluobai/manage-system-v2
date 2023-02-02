/*
 * @Author: otherChannel
 * @Date: 2022-12-23 12:44:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 11:37:16
 */

/** 节流函数
 *  传入初始化参数
 *  callback 被节流的函数, wait 节流等待时间, options 配置项
 *  目前options中只有一个配置项trailing 默认为true 不用配置
 *    其值为true 则整个节流函数使用的是定时器+时间戳
 *    其值为false 则整个节流函数使用的是时间戳
*/
export function throttle (callback, wait, options) { 
  // 声明定时器变量名和初始化上次时间的值
  let timer = null;
  let previous = 0;
  if (!options) {
    // 如果没有传options 则使用默认值
    options = {
      trailing: true,
    }
  }
  /** 闭包返回函数
   *  传入被节流函数需要的执行环境 参数 (并收集其返回值 且将返回值导出 暂时不需要吧)
   *  context 外部this指针外部执行环境, args 被节流函数需要的参数
   *  使用的是call 所以参数需要传入一个对象 解构赋值
  */
  return function (context, args) {
    // 获取当前时间戳
    let now = Date.now();
    // 当前时间与上次执行时间的差 是否在节流等待时间范围
    if((now - previous) >= wait) {
      // 时间差超出节流等待时间 判断是否存在定时器 且 清除正在等待的定时器
      timer && clearTimeout(timer);
      // 清除定时器后会有值保留 将其置为空 避免影响判断
      timer = null;
      // 此次触发执行时间覆盖上次执行时间
      previous = now;
      // 执行被节流函数 注意apply的参数传递与使用方式 传递时需要是一个数组 使用时按照数组的顺序
      callback.apply(context, args);
      // 时间差小于节流等待时间 判断是否存在定时器 及配置项trailing状态
    } else if (!timer && options.trailing) {
      // 无定时器 且 需要执行最后一次触发的 被节流函数 设置定时器
      timer = setTimeout(() => {
        // 定时器开始执行后 将timer置空
        timer = null;
        // 执行被节流函数
        callback.apply(context, args);
      }, wait)
    }
  }
}

/** 判断一个变量是不是空对象
 *  &&前判断一个值是否为一个对象
 *  &&后判断一个值是否为一个空对象
 *  Reflect.ownKeys 既可以解决非枚举属性也可以解决Symbol属性
 *  */
export function isEmptyObj(obj) {
  return (String(obj) === '[object Object]') && (Reflect.ownKeys(obj).length === 0)
}

/** 处理获取的路由菜单字符串
 *  过滤递归处理每一项component
 *  @prams {Array} asyncRouterMap 后端传来的菜单数据
 *  */
export function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象

  const loadView = (view) => {
    // 使用 import 实现生产环境的路由懒加载
    // return () => import(view)
    return (resolve) => require([`@/views/${view}`], resolve)
    // return () => import('@/views/sysMgt/index.vue')
  }
  
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      route.component = loadView(route.component)
      // route.component = () => import(route.component)
      // route.component = (resolve) => require([route.component], resolve)
      // ${route.component}
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}