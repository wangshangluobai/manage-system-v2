<!--
 * @Author: otherChannel
 * @Date: 2023-01-07 13:09:21
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-19 11:08:57
-->

<template>
  <div class="menu-container" onselectstart="return false;">
    <div class="menu-item" v-for="item in addRoutes" :key=item.id>
      <span class="menu-info" v-if="!item.hidden" @click="checkItem($event, item)">
        <i class="iconfont" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </span>
      <transition-group 
        name="menus-item"
        @enter="enter"
        @afterEnter="afterEnter"
        @leave="leave"
        @afterLeave="afterLeave">
        <div class="menu-item" v-for="child in item.children" v-show="isShow===item.id" :key=child.id>
          <span class="menu-info child-item" v-if="!child.hidden" @click="checkItem($event, child)">
            <i class="iconfont" :class="child.meta.icon"></i>
            <span>{{ child.meta.title }}</span>
          </span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, } from 'vuex';
export default {
  name: 'MenuList',
  data(){
    return {
      isShow: NaN,
    }
  },
  computed: {
    ...mapGetters(['addRoutes'])
  },
  methods: {
    // 右侧菜单点击事件
    checkItem(e,item){
      /* 判断是否存在子项 点击展开子列表 */
      if(item.children && item.children.length){
        if(item.id===this.isShow){ /* 再次点击已展开项则关闭 */
          this.isShow = NaN
        }else{
          this.isShow = item.id
        }
      }
      // 点击路由跳转处理
      // this.$router.push({path: item.path}) /* 它会在原路径中添加新path 路由地址会出现错误 */
      this.$router.push({name: item.name})
    },
    enter(el){ /* 动画处理 */
      el.style.height = 'auto'
      let endWidth = window.getComputedStyle(el).height
      el.style.height = '0px'
      el.offsetHeight // force repaint
      // noinspection JSSuspiciousNameCombination
      el.style.height = endWidth
    },
    afterEnter(el){
      el.style.height = null
    },
    leave(el){
      el.style.height = window.getComputedStyle(el).height
      el.offsetHeight // force repaint
      el.style.height = '0px'
    },
    afterLeave(el){
      el.style.height = null
    },
  }
}
</script>

<style lang="scss" scoped>

  .menu-container {
    width: 100%;
    .menu-item {
      overflow: hidden;
      /* 效果过程 */
      .menus-item-enter-active, .menus-item-leave-active {
        transition: all 0.3s ease;
      }
    }
    .menu-info {
      width: 100%;
      height: 60px;
      line-height: 60px;
      display: flex;
      cursor: pointer;  // 鼠标移入导航栏变小手
      &.child-item { }
      &:hover {
        background-color: #F5EAEC;
      }
      i {
        font-size: 16px;
        padding: 0 5px;
      }
      span {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: justify;
        padding-right: 9px;
        &:after {
          display: inline-block;
          width: 100%;
          content: '';
        }
      }
    }
  }
</style>