/*
 * @Author: otherChannel
 * @Date: 2022-12-25 12:56:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-18 15:28:18
 */

const state = {
  whetherShowHeader: true, /* 控制头部是否展示 */
  whetherShowMenuR: true, /* 控制右侧菜单是否展示 */
  whetherShowFooter: true, /* 控制页脚是否展示 */
  controlShowMenuR: true, /* 控制台 控制 菜单是否随滚动数据 展示 */

};
const mutations = {
  WHETHER_SHOW_HEADER: (state, payload) => {
    state.whetherShowHeader = payload;
  },
  WHETHER_SHOW_MENU_R: (state, payload) => {
    state.whetherShowMenuR = payload;
  },
  WHETHER_SHOW_FOOTER: (state, payload) => {
    state.whetherShowFooter = payload;
  },
  CONTROL_SHOW_MENU_R: (state, payload) => {
    state.controlShowMenuR = payload;
  }
};
const actions = {};

export default {
  namespaced: true, state, mutations, actions
}