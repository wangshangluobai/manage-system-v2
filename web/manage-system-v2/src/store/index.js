/*
 * @Author: otherChannel
 * @Date: 2022-12-22 15:11:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 11:51:18
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';

Vue.use(Vuex);

import aboutUser from './modules/aboutUser.js';
import aboutPages from './modules/aboutPages.js';
import permission from './modules/permission.js';

export default new Vuex.Store({
  modules: {
    aboutUser,
    aboutPages,
    permission,
  },
  getters,
})