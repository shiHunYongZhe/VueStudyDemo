/*
vuex最核心的管理对象store
组装模块并导出 store 的地方
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 引入四个基本模块
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 在使用vuex的功能时打印数据
// import createLogger from 'vuex/dist/logger'
// 根据当前环境判断是否使用debug
// const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
