/*
 * @Author: otherChannel
 * @Date: 2022-12-22 15:36:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 15:39:29
 */

<template>
  <div>
    <h1>HomePage</h1>
    <control-panel></control-panel>
    <bread-crumb></bread-crumb>
  </div>
</template>

<script>
import ControlPanel from '@/components/ControlPanel/index.vue';
import BreadCrumb from '@/components/BreadCrumbs/index.vue'

  export default {
    name: 'HomePage',
    components: {
      ControlPanel,
      BreadCrumb
    },
    data(){
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  
</style>