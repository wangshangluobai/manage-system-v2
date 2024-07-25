/*
 * @Author: otherChannel
 * @Date: 2022-12-19 11:39:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-06 19:56:09
 */

const { defineConfig } = require("@vue/cli-service")
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false,
    host: "127.0.0.1",
    port: 8086,
  },
  chainWebpack: config => {
    config.module.rule('vue').test(/\.vue$/).use('vue-loader').loader('vue-loader').options({
      prettify: false,
    }).end(),
    config.resolve.alias.set('@', resolve('./src'))
    .set('components', resolve('./src/components'))
    .set('views', resolve('./src/views'))
    .set('assets', resolve('./src/assets'))
    .set('styles', resolve('./src/styles'))
    .set('api', resolve('./src/api'))
  },
})
