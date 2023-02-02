<!--
 * @Author: otherChannel
 * @Date: 2023-01-19 09:38:04
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-29 15:17:09
-->

<template>
  <div class="box" :style="{height: boxHeight}">
    homeInfo
    <div class="pending-queue-box">
      <div class="swiper">
        <div class="swiper-wrapper">
          <el-card class="swiper-slide box-card" shadow="never" v-for="item in 3" :key="item">
            <div class="head">
              <span>事不拖</span>
              <el-button type="text"><i class="iconfont icon-add"></i></el-button>
              <el-button type="text"><i class="iconfont icon-delete"></i></el-button>
              <el-button type="text"><i class="iconfont icon-complete"></i></el-button>
            </div>
            <el-divider content-position="right">2023.1.23</el-divider>
            <p>决定在2028年之前,要让自己不会后悔,取到自己想取的,做到自己想做的</p>
          </el-card>
        </div>
      </div>
    </div>
    <div class="temp">

    </div>

  </div>
</template>

<script>
import Swiper, { EffectCards, Autoplay } from 'swiper'; /* 修改了swiper源码 将旋转改为平移 */

export default {
  name: 'HomeInfo',
  data(){
    return {
      boxHeight: '',
      data: [1,2,3,4,5]
    }
  },
  computed: { },
  mounted(){
    // 浏览器视图高度
    this.boxHeight = (document.documentElement.clientHeight ||  /* 不包含滚动条 */
        window.innerHeight ||  /* 显示的是文档的区域 包含滚动条 */
        document.body.clientHeight)-40+'px'; /* 文档中已有内容撑开的区域 */

    new Swiper('.swiper', {
      modules: [ EffectCards, Autoplay ],
      effect: "cards",
      speed:300,
      // autoplay : true,
      autoplay : {
        delay: 2800, /* 每张卡片停留2800ms */
        disableOnInteraction: true, /* 触碰之后停止 */
        pauseOnMouseEnter: true, /* 鼠标悬浮则暂停 disableOnInteraction为true则停止 */
      },
      slideToClickedSlide: true, /* 转至鼠标点击对应的项 */
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      // grabCursor: true, /* 变成手掌形状，拖动时会变成抓手形状 */
      cardsEffect: { slideShadows: true, },
      /* lazy: { // 懒加载
        loadPrevNext: true,
      }, */
    })
  }
}
</script>

<style lang='scss' scoped>
  @import '@/assets/css/swiper.scss'; 
  .box {
    width: 100%;
    height: 100%; 
    /* iwantknowmore.jpg background.gif */
    background: #E3EEFC center center no-repeat;
    background-size: 100% 100%;

    /* swiper 样式 */

    .swiper {
      width: 240px;
      height: 320px;
      overflow: visible;
    }
    .swiper-wrapper{
      transition-timing-function: ease-in;

      .el-card {
        border: none;
        ::v-deep .el-card__body {

          width: 100%;
          height: 320px;
          padding: 0 17px;
          .head {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 0 7px;
            span {
              flex-grow: 1;
              // color: #8e9aaf;
            }
            button {
              padding: 0 3px;
            }
          }
          .el-divider__text {
            padding: 0 7px;
          }
          p {
            font-size: 14px;
            line-height: 17px;
            text-indent: 28px;
          }
        }

      }


      .swiper-slide {
        display: flex;
        overflow: visible;
        align-items: center;
        justify-content: center;
        border-radius: 7px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
      }

      .swiper-slide:nth-child(1n){
        .el-divider__text {
          background-color: rgb(206, 17, 17);
        }
        background-color: rgb(206, 17, 17);
      }

      .swiper-slide:nth-child(2n){
        .el-divider__text {
          background-color: rgb(0, 140, 255);
        }
        background-color: rgb(0, 140, 255);
      }

      .swiper-slide:nth-child(3n){
        .el-divider__text {
          background-color: rgb(10, 184, 111);
        }
        background-color: rgb(10, 184, 111);
      }

    }
  }
</style>