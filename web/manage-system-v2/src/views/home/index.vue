/* * @Author: otherChannel * @Date: 2022-12-22 15:36:54 * @LastEditors: sueRimn
* @LastEditTime: 2022-12-22 15:39:29 */

<template>
  <div class="container">
    <transition
      name="header-fade"
      type="transition"
      appear>
      <div
        class="header-part"
        v-show="whetherShowHeader">
        <!-- 面包屑 -->
        <bread-crumbs class="bread-crumb">
          <template v-for="item in this.$route.matched">
            <bread-crumb-item
              :to="item.path"
              :key="item.name"
              >{{ item.meta.title }}</bread-crumb-item
            >
          </template>
        </bread-crumbs>
        <!-- 搜索框 -->
        <search-module></search-module>
        <!-- 控制台 -->
        <control-panel></control-panel>
      </div>
    </transition>
    <div class="main-part">
      <!-- 内容区 -->
      <div class="main-context">
        <router-view></router-view>
      </div>
      <!-- 菜单列表区 -->
      <transition name="menu-fade">
        <menu-list
          class="menu-list"
          v-show="whetherShowMenuR"
          type="transition"
          appear></menu-list>
      </transition>
    </div>
    <transition name="footer-fade">
      <div
        class="footer-part"
        v-show="whetherShowFooter"
        type="transition"
        appear>
        <!-- 页脚 -->
        <div>footer</div>
      </div>
    </transition>
  </div>
</template>

<script>
  /* 注意：不要在 BreadCrumbs 组件插槽写注释 也会被解析 */
  import ControlPanel from "@/components/ControlPanel/index.vue"
  import BreadCrumbs from "@/components/BreadCrumbs/index.vue"
  import BreadCrumbItem from "@/components/BreadCrumbs/crumbs-item.vue"
  import MenuList from "@/components/MenuList/index.vue"
  import SearchModule from "@/components/SearchModule/index.vue"
  import { throttle } from "@/utils/tools.js"
  import { mapState, mapMutations } from "vuex"

  export default {
    name: "HomePage",
    components: {
      ControlPanel,
      BreadCrumbs,
      BreadCrumbItem,
      MenuList,
      SearchModule,
    },
    data() {
      return {
        /* 滚动数据是配合滚动处理器使用 */
        oldScrollTop: 0 /* 旧的滚动数据 */,
        newScrollTop: 0 /* 新的滚动数据 */,
        useThrottle: throttle(this.scrollHandler, 180) /* 初始化节流函数 */,
      }
    },
    // 计算属性
    computed: {
      ...mapState("aboutPages", [
        "whetherShowHeader",
        "whetherShowMenuR",
        "whetherShowFooter",
        "controlShowMenuR",
      ]),
    },
    // 处理函数
    methods: {
      ...mapMutations("aboutPages", [
        "WHETHER_SHOW_HEADER",
        "WHETHER_SHOW_MENU_R",
        "WHETHER_SHOW_FOOTER",
        "CONTROL_SHOW_MENU_R",
      ]),
      // 绑定事件
      useScrollHandler() {
        this.useThrottle(this) /* 节流处理 传入执行环境 */
      },
      /* 滚动处理器 */
      scrollHandler() {
        /* 同时使用这三个数据是为了浏览器兼容问题 后面取小数点好像没啥用 */
        this.newScrollTop = (
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop
        ).toFixed(2)
        /**  滚动状态 scrollStep
         *   大于0则向下滚动 > 不展示
         *   等于0则初始状态没动 > 展示
         *   小于0则向上滚动 > 展示
         *  */
        let scrollStep = (this.newScrollTop - this.oldScrollTop).toFixed(2)
        if (scrollStep > 0) {
          this.WHETHER_SHOW_HEADER(false)
          this.WHETHER_SHOW_MENU_R(false)
        } else {
          this.WHETHER_SHOW_HEADER(true)
          /** 控制台控制右侧菜单
           *  右侧菜单同头部是一起隐藏的 但是
           *  右侧菜单的出现却是受控制台来管控的
           *  */
          this.WHETHER_SHOW_MENU_R(this.controlShowMenuR)
        }
        /* 页脚处理 滚动条不为0则不展示 */
        if (this.newScrollTop != 0) {
          this.WHETHER_SHOW_FOOTER(false)
        } else {
          this.WHETHER_SHOW_FOOTER(true)
        }
        /* 上次的旧值就是这次的新值 */
        this.oldScrollTop = this.newScrollTop
      },
    },
    // 生命周期
    mounted() {
      window.addEventListener(
        "scroll",
        this.useScrollHandler
      ) /* 绑定页面滚动处理器 */
    },
    beforeDestroy() {
      window.removeEventListener(
        "scroll",
        this.useScrollHandler
      ) /* 解绑页面滚动处理器 */
    },
  }
</script>

<style lang="scss" scoped>
  /* scss颜色模块 */
  @import "@/assets/css/color.scss";

  .container {
    /* 视窗容器 */
    height: 100%;
    display: flex;
    flex-direction: column; /* flex 上下排列 */
    background-color: #f8f8ff;
    /* header模块配合Vue的transition实现过渡效果 */
    .header-fade-enter-active,
    .header-fade-leave-active {
      /* 效果的正执行和负执行的设置 */
      transition: transform 0.2s ease; /* 过渡 */
    }
    .header-fade-enter,
    .header-fade-leave-to {
      /* 效果的目的 */
      transform: translateY(-40px); /* 向上移动40像素 */
    }
    .header-part {
      /* 头部 */
      width: 100%;
      height: $header_height_px;
      // background-color: rgba(227, 238, 252, .7); /* 白色 透明 */
      background-color: rgba(255, 255, 255, 0.7); /* 白色 透明 */
      backdrop-filter: blur(8px); /* 滤镜 粗糙透明 */
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1); /* 阴影 */
      line-height: 40px;
      display: flex;
      flex-direction: row; /* flex 左右排列 */
      position: fixed; /* 固定定位 */
      z-index: 999; /* 层级权重 */
      .bread-crumb {
      } /* 面包屑 */
    }
    .main-part {
      /* 正式内容 */
      padding-top: 40px;
      // min-height: calc(100% - 40px - 20px);
      .main-context {
        /* 路由页面 */
        background-color: brown;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      /* menu模块配合Vue的transition实现过渡效果 */
      .menu-fade-enter-active,
      .menu-fade-leave-active {
        /* 效果的正执行和负执行的设置 */
        transition: all 0.6s ease; /* 过渡 */
      }
      .menu-fade-enter,
      .menu-fade-leave-to {
        /* 效果的目的 */
        transform: translateX(100px); /* 向右位移100像素 */
        // max-height: 600px;
      }

      .menu-list {
        /* 菜单 */
        background-color: rgba(255, 255, 255, 0.7); /* 白色 透明 */
        backdrop-filter: blur(8px); /* 滤镜 粗糙透明 */
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1); /* 阴影 */
        width: 100px;
        position: fixed; /* 固定定位 相对于窗口 */
        top: 40px;
        right: 0;
        transition: all 0.2s ease; /* 过渡 */
      }
    }
    /* footer模块配合Vue的transition实现过渡效果 */
    .footer-fade-enter-active,
    .footer-fade-leave-active {
      /* 效果的正执行和负执行的设置 */
      transition: transform 0.2s ease; /* 过渡 */
    }
    .footer-fade-enter,
    .footer-fade-leave-to {
      /* 效果的目的 */
      transform: translateY(20px); /* 向上移动20像素 */
    }
    .footer-part {
      /* 页脚 */
      background-color: cadetblue;
      width: 100%;
      height: 20px;
      position: fixed;
      bottom: 0;
      // z-index: -1;
    }
  }
</style>
