// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vue from 'vue'
import fastclick from 'fastclick'
import vueLazyload from 'vue-lazyload'
import {Button} from 'mint-ui'

// 加载mockServer,根据请求响应固定数据
import './mock/mockServer'

// 在移动端（微信等）使用 vConsole调试console（启动需npm安装vConsole）
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// export default vConsole

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoader', function () {
    fastclick.attach(document.body)
  })
}

Vue.component(Button.name, Button)

Vue.use(vueLazyload, {
  loading: require('./common/imgs/loading.gif')
})
// 关闭vue功能的线上实例提示
// Vue.config.productionTip = false

const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
