/*
 * @Author: otherChannel
 * @Date: 2022-12-22 15:36:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 15:39:29
 */

<template>
  <div class="container">
    <transition name="header-fade" type="transition" appear>
      <div class="header-part" v-show="whetherShowHeader">
        <!-- 面包屑 -->
        <BreadCrumbs class="bread-crumb">
          <BreadCrumbItem to="/">首页</BreadCrumbItem>
          <BreadCrumbItem to="/">日记</BreadCrumbItem>
          <BreadCrumbItem to="/">影视记录</BreadCrumbItem>
          <BreadCrumbItem to="/">个人中心</BreadCrumbItem>
        </BreadCrumbs>
        <!-- 搜索框 -->
        <div class="search">search</div>
        <!-- 控制台 -->
        <ControlPanel class="control-panel"></ControlPanel>
      </div>
    </transition>
    <div class="main-part">
      <!-- 内容区 -->
      <div class="main-context">
        HomePage
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti possimus, consequuntur laboriosam non, animi, hic culpa eum nam repellendus amet officia necessitatibus ipsam nostrum ipsum. Ducimus aliquid numquam assumenda.</p>
      </div>
      <!-- 菜单列表区 -->
      <transition name="menu-fade">
        <div class="menu-list" v-show="whetherShowMenuR" type="transition" appear>
          menuList
        </div>
      </transition>
    </div>
    <transition name="footer-fade">
      <div class="footer-part" v-show="whetherShowFooter" type="transition" appear>
        <!-- 页脚 -->
        <div>footer</div>
      </div>
    </transition>
  </div>
</template>

<script>
/* 注意：不要在 BreadCrumbs 组件插槽写注释 也会被解析 */
import ControlPanel from '@/components/ControlPanel/index.vue';
import BreadCrumbs from '@/components/BreadCrumbs/index.vue';
import BreadCrumbItem from '@/components/BreadCrumbs/crumbs-item.vue';
import { throttle } from '@/utils/tools.js';

  export default {
    name: 'HomePage',
    components: {
      ControlPanel,
      BreadCrumbs,
      BreadCrumbItem
    },
    data(){
      return {
        /** whetherShowHeader && whetherShowMenuR
         *  下面两个变量目前就放在当前页面 因为想不到有其他位置要用
         *  当然 也可以放在仓库state 再引入当前页面使用 可以尝试监视
         *  */
        whetherShowHeader: true, /* 控制头部是否展示 */
        whetherShowMenuR: true, /* 控制右侧菜单是否展示 */
        /* 滚动数据是配合滚动处理器使用 */
        oldScrollTop: 0, /* 旧的滚动数据 */
        newScrollTop: 0, /* 新的滚动数据 */
        /* 该数据应当移植在仓库state中 且由控制台组件操作 */
        controlShowMenuR: true, /* 控制台控制菜单是否展示 */
        whetherShowFooter: true, /* 控制页脚是否展示 */
        useThrottle: throttle(this.scrollHandler, 180), /* 初始化节流函数 */
      }
    },
    // 处理函数
    methods: {
      // 绑定事件
      useScrollHandler(){
        this.useThrottle(this); /* 节流处理 传入执行环境 */
      },
      /* 滚动处理器 */
      scrollHandler () {
        /* 同时使用这三个数据是为了浏览器兼容问题 后面取小数点好像没啥用 */
        this.newScrollTop = (document.documentElement.scrollTop || 
        window.pageYOffset || 
        document.body.scrollTop).toFixed(2);
        /**  滚动状态 scrollStep
         *   大于0则向下滚动 > 不展示
         *   等于0则初始状态没动 > 展示
         *   小于0则向上滚动 > 展示
         *  */
        let scrollStep = (this.newScrollTop - this.oldScrollTop).toFixed(2);
        if(scrollStep > 0){
          this.whetherShowHeader = false;
          this.whetherShowMenuR = false
        }else{
          this.whetherShowHeader = true;
          /** 控制台控制右侧菜单
           *  右侧菜单同头部是一起隐藏的 但是
           *  右侧菜单的出现却是受控制台来管控的
           *  */
          this.whetherShowMenuR = this.controlShowMenuR;
        }
        /* 页脚处理 滚动条不为0则不展示 */
        if(this.newScrollTop != 0){
          this.whetherShowFooter = false;
        }else{
          this.whetherShowFooter = true;
        }
        /* 上次的旧值就是这次的新值 */
        this.oldScrollTop = this.newScrollTop
      },
    },
    // 生命周期
    mounted () {
      window.addEventListener('scroll', this.useScrollHandler); /* 绑定页面滚动处理器 */
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.useScrollHandler); /* 解绑页面滚动处理器 */
    }
  }
</script>

<style lang="scss" scoped>
  /* scss颜色模块 */
  @import '@/assets/css/color.scss';

  .container { /* 视窗容器 */
    height: 100%;
    display: flex;
    flex-direction: column; /* flex 上下排列 */
    /* header模块配合Vue的transition实现过渡效果 */
    .header-fade-enter-active, .header-fade-leave-active { /* 效果的正执行和负执行的设置 */
      transition: transform .2s ease; /* 过渡 */
    }
    .header-fade-enter, .header-fade-leave-to { /* 效果的目的 */
      transform: translateY(-40px); /* 向上移动40像素 */
    }
    .header-part { /* 头部 */
      width: 100%;
      height: $header_height_px;
      background-color: rgba(255, 255, 255, .7); /* 白色 透明 */
      backdrop-filter: blur(8px); /* 滤镜 粗糙透明 */
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1); /* 阴影 */
      line-height: 40px;
      display: flex;
      flex-direction: row; /* flex 左右排列 */
      position: fixed; /* 固定定位 */
      z-index: 999; /* 层级权重 */
      .bread-crumb { } /* 面包屑 */
      .search { /* 搜索框 */
        height: 100%;
        background-color: aquamarine;
        width: 180px;
      }
      .control-panel { /* 控制表 */
        height: 100%;
        background-color: blueviolet;
        width: 100px;
      }
    }
    .main-part { /* 正式内容 */
      padding-top: 40px;
      // min-height: calc(100% - 40px - 20px);
      .main-context { /* 路由页面 */
        background-color: brown;
      }
      /* menu模块配合Vue的transition实现过渡效果 */
      .menu-fade-enter-active, .menu-fade-leave-active { /* 效果的正执行和负执行的设置 */
        transition: transform .2s ease; /* 过渡 */
      }
      .menu-fade-enter, .menu-fade-leave-to { /* 效果的目的 */
        transform: translateX(100px); /* 向右位移100像素 */
      }
      
      .menu-list { /* 菜单 */
        background-color: rgb(132, 116, 149);
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1); /* 阴影 */
        width: 100px;
        height: 600px;
        position: fixed; /* 固定定位 相对于窗口 */
        top: 40px;
        right: 0;
        transition: transform .2s ease; /* 过渡 */
      }
    }
    /* footer模块配合Vue的transition实现过渡效果 */
    .footer-fade-enter-active, .footer-fade-leave-active { /* 效果的正执行和负执行的设置 */
      transition: transform .2s ease; /* 过渡 */
    }
    .footer-fade-enter, .footer-fade-leave-to { /* 效果的目的 */
      transform: translateY(20px); /* 向上移动20像素 */
    }
    .footer-part { /* 页脚 */
      background-color: cadetblue;
      width: 100%;
      height: 20px;
      position: fixed;
      bottom: 0;
      // z-index: -1;
    }
  }
</style>