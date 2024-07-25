<!--
 * @Author: otherChannel
 * @Date: 2023-01-19 09:38:04
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-29 15:17:09
-->

<template>
  <div
    class="box"
    :style="{ height: boxHeight }">
    <!-- homeInfo
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

    </div> -->
    <div class="transaction-trace-box">
      <el-table
        :data="tableData"
        row-key="id"
        :tree-props="{ children: 'subitem' }">
        <el-table-column
          prop="overview"
          label="概览"
          width="180">
        </el-table-column>
        <el-table-column
          prop="detailed"
          label="详情"
          width="180">
        </el-table-column>
        <el-table-column
          prop="transaction_state"
          label="事务状态"
          :formatter="tableCellFormatter">
        </el-table-column>
        <el-table-column
          prop="transaction_type"
          label="事务类型"
          :formatter="tableCellFormatter">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
              class="text-lime-700"
              >Edit</el-button
            >
            <el-button
              type="text"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  // import Swiper, {
  //   EffectCards,
  //   Autoplay,
  // } from "swiper" /* 修改了swiper源码 将旋转改为平移 */

  export default {
    name: "HomeInfo",
    data() {
      return {
        boxHeight: "",
        data: [1, 2, 3, 4, 5],
        enum_data: {
          transaction_state: [
            {
              id: "0",
              code: "Pending",
              text: "待处理",
            },
            {
              id: "1",
              code: "Fulfilled",
              text: "已处理",
            },
            {
              id: "2",
              code: "Rejected",
              text: "已取消",
            },
          ],
          transaction_type: [
            {
              id: "0",
              code: "Work",
              text: "工作",
            },
            {
              id: "1",
              code: "self",
              text: "个人",
            },
            {
              id: "2",
              code: "family",
              text: "家庭",
            },
          ],
        },
        tableData: [
          {
            id: "1",
            overview: "测试标题",
            detailed: "测试正文",
            transaction_type: "self",
            transaction_state: "Fulfilled",
            sort: 1,
            hasSubitem: true,
            subitem: [
              {
                id: "4",
                overview: "测试标题3",
                detailed: "测试正文3",
                transaction_type: "self",
                transaction_state: "Fulfilled",
                sort: 4,
                hasSubitem: false,
                subitem: [],
              },
            ],
          },
          {
            id: "2",
            overview: "测试标题1",
            detailed: "测试正文1",
            transaction_type: "self",
            transaction_state: "Fulfilled",
            sort: 2,
            hasSubitem: false,
            subitem: [],
          },
          {
            id: "3",
            overview: "测试标题2",
            detailed: "测试正文2",
            transaction_type: "self",
            transaction_state: "Fulfilled",
            sort: 3,
            hasSubitem: false,
            subitem: [],
          },
        ],
      }
    },
    computed: {},
    mounted() {
      // 浏览器视图高度
      this.boxHeight =
        (document.documentElement.clientHeight /* 不包含滚动条 */ ||
          window.innerHeight /* 显示的是文档的区域 包含滚动条 */ ||
          document.body.clientHeight) -
        40 +
        "px" /* 文档中已有内容撑开的区域 */

      // new Swiper(".swiper", {
      //   modules: [EffectCards, Autoplay],
      //   effect: "cards",
      //   speed: 300,
      //   // autoplay : true,
      //   autoplay: {
      //     delay: 2800 /* 每张卡片停留2800ms */,
      //     disableOnInteraction: true /* 触碰之后停止 */,
      //     pauseOnMouseEnter: true /* 鼠标悬浮则暂停 disableOnInteraction为true则停止 */,
      //   },
      //   slideToClickedSlide: true /* 转至鼠标点击对应的项 */,
      //   // direction: 'vertical', // 垂直切换选项
      //   loop: true, // 循环模式选项
      //   // grabCursor: true, /* 变成手掌形状，拖动时会变成抓手形状 */
      //   cardsEffect: { slideShadows: true },
      //   /* lazy: { // 懒加载
      //   loadPrevNext: true,
      // }, */
      // })
    },
    methods: {
      tableCellFormatter(row, column, cellValue, index) {
        row, index
        const { enum_data } = this || {}

        let enum_list = enum_data[column.property]
        let result = enum_list.find((i) => i.code === cellValue)

        return result ? result : cellValue
      },
    },
  }
</script>

<style lang="scss" scoped>
  // @import "@/assets/css/swiper.scss";
  .box {
    width: 70%;
    height: 100%;
    /* iwantknowmore.jpg background.gif */
    background: #e3eefc center center no-repeat;
    background-size: 100% 100%;

    /* swiper 样式 */

    .swiper {
      width: 240px;
      height: 320px;
      overflow: visible;
    }
    .swiper-wrapper {
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

      .swiper-slide:nth-child(1n) {
        .el-divider__text {
          background-color: rgb(206, 17, 17);
        }
        background-color: rgb(206, 17, 17);
      }

      .swiper-slide:nth-child(2n) {
        .el-divider__text {
          background-color: rgb(0, 140, 255);
        }
        background-color: rgb(0, 140, 255);
      }

      .swiper-slide:nth-child(3n) {
        .el-divider__text {
          background-color: rgb(10, 184, 111);
        }
        background-color: rgb(10, 184, 111);
      }
    }
  }
</style>
