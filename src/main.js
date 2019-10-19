// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import fastclick from 'fastclick'
import vueLazyload from 'vue-lazyload'
import {Button} from 'mint-ui'
// 加载mockServer,根据请求响应固定数据
import './mock/mockServer'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoader', function () {
    fastclick.attach(document.body)
  })
}

// 视口调整自动调整root-font-size
// (function (doc, win) {
//   // eslint-disable-next-line one-var
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       var clientWidth = docEl.clientWidth
//       if (!clientWidth) return
//       docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
//     }
//   if (!doc.addEventListener) return
//   win.addEventListener(resizeEvt, recalc, false)
//   doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)

Vue.component(Button.name, Button)
// import loading from './common/imgs/loading.gif'
// Vue.use(vueLazyload, {
//   loading
// })
Vue.use(vueLazyload, {
  loading: require('./common/imgs/loading.gif')
})
// 关闭vue功能的线上实例提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 在布置到生产环境的时候再替换
// 骨架屏css加载后再挂载Vue实例，优化骨架屏渲染速度
// let app = new Vue({
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
// window.mountApp = () => {
//   app.$mount('#app')
// }

// if (window.STYLE_READY) {
//   window.mountApp()
// }
