<!--
 * @Author: otherChannel
 * @Date: 2023-01-18 18:29:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-19 12:19:26
-->

<template>
  <div class="box">
    <el-input v-model="keyword" >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchModule',
  data(){
    return {
      keyword: ''
    }
  },
}
</script>

<style lang='scss' scoped>
  .box {
    width: 180px;
    height: 100%;
    line-height: 100%;
    // margin-right: 12px ;
    .el-input {
      box-shadow: 0 1px 4px rgba(0,0,0,0.3), 0 0px 40px rgba(0,0,0,0.1) inset;
      border-radius: 7px;
      width: 180px;
      transition: all 0.7s ease;
      overflow: hidden;
      &:focus-within {
        /* 这里虽然很奇怪 但是效果挺不错的 */
        width: 270px; /* 正常来讲 应该右边不动 左边变形 */
        transform: translateX(-90px); /* 但是，现在是左右变形 向左移动增长量 */
      }
      ::v-deep .el-input__inner {
        background-color: #F5EAEC;
        border: none;
        border-radius: 0;
      }
      ::v-deep .el-input__prefix{
        color: #b85798;
      }
    }
  }
</style>