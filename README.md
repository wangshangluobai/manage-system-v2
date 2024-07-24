# manage-system-v2

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

20240724 开始持续更新

更新事项

当前

- 调整依赖包 再次运行打开一两年前的项目真是让人感到一股莫名的愉悦啊，还记得是入职了这家公司之后就停止了更新，现在要离职了，再从新开启更新，这次一定要持续完善下去。[20240724]
- 调整数据库 数据库正常 [20240724]
- 待办事项
  数据结构应为树，可以扩展子项
  单条数据拥有属性 标题(overview), 详情(detailed), 事务类型(Transaction type), 事务状态(Transaction state), 排序(sort), 子项(subitem)
  后端默认属性 创建日期(Creation date), 修改日期(Revision date)
  计算属性 是否存在子项(hasSubitem)
- 数据虚拟请求

持续

- CSS 原子化

未来

- 支持 TypeScript
- 升级 V3
- java 重写后端
- 微服务
- react 重写前端
- Electron 全平台
