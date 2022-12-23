/*
 * @Author: otherChannel
 * @Date: 2022-12-22 15:11:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-22 15:26:36
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';

Vue.use(Vuex);

import aboutUser from './modules/aboutUser.js';

export default new Vuex.Store({
  modules: {
    aboutUser,
  },
  getters,
})