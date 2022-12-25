<!--
 * @Author: otherChannel
 * @Date: 2022-12-19 11:39:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-24 17:04:56
-->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style lang="scss">
  @import url(./assets/css/reset.css);
  // html {
  //   overflow-y: scroll;
  // }

  // :root {
  //   overflow-y: auto;
  //   overflow-x: hidden;
  // }

  // :root body {
  //   position: absolute;
  // }

  // body {
  //   width: 100vw;
  //   overflow: hidden;
  // }
  html, body, #app {
    height: 100%;
    // width: auto;
  }
  // selector::-webkit-scrollbar{
  //   width:0;
  // }

</style>
