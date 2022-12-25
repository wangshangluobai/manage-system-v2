/*
 * @Author: otherChannel
 * @Date: 2022-12-19 11:39:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-24 15:04:05
 */

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8086,
    // autoOpenBrowser: true,
  }
})
