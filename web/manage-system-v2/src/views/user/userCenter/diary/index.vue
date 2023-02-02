<!--
 * @Author: otherChannel
 * @Date: 2022-12-23 16:24:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-30 13:07:46
-->

<template>
  <div>日记
    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="textarea1">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'AboutDiary',
  data(){
    return {
      textarea1: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>