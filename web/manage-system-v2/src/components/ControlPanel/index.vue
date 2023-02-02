<!--
 * @Author: otherChannel
 * @Date: 2022-12-23 15:17:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-18 17:59:04
-->

<template>
  <div class="box" @click="ifShowMenuR" onselectstart="return false;">
    <!-- :class="[whetherShowMenuR?'dir-bottom':'dir-right']" 这里三角的宽高也旋转了 -->
    <i class="iconfont icon-dir-bottom" :class="{'dir-right': !whetherShowMenuR}"></i>
    <span>菜单列表</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: 'ControlPanel',
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState('aboutPages', [
      'controlShowMenuR',
      'whetherShowMenuR'
    ])
  },
  methods: {
    ...mapMutations('aboutPages', [
      'CONTROL_SHOW_MENU_R',
      'WHETHER_SHOW_MENU_R'
    ]),
    ifShowMenuR(){
      this.CONTROL_SHOW_MENU_R(!this.controlShowMenuR);
      this.WHETHER_SHOW_MENU_R(this.controlShowMenuR);
    },
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100px;
    height: 40px;
    display: flex;
    cursor: pointer;  // 鼠标移入导航栏变小手
    i {
      padding: 0 5px;

      &::before {
        display: inline-block;
        transition: all 0.5s ease;
      }
      &.dir-right::before {
        transform: rotate(-90deg);
      }
    }

    span {
      padding-right: 9px;
    }
  }
</style>