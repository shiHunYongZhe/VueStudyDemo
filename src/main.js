// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App';
import router from './router';
import store from './store';
import Vue from 'vue';
import fastclick from 'fastclick';
import vueLazyload from 'vue-lazyload';
import { Button } from 'mint-ui';
// import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css';
// import Raven from "raven-js";
// import RavenVue from "raven-js/plugins/vue";

// 加载mockServer,根据请求响应固定数据
import './mock/mockServer';

// 在移动端（微信等）使用 vConsole调试console（启动需npm安装vConsole）
// import Vconsole from 'vconsole'
// let vConsole = null;
// process.env.NODE_ENV == "development" && (vConsole = new Vconsole());
// export default vConsole;

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoader', function() {
        fastclick.attach(document.body);
    });
}
Vue.component(Button.name, Button);

Vue.use(vueLazyload, {
    loading: require('./common/imgs/loading.gif')
});
// Sentry错误日志监控
// Raven.config("https://ce431a99e0884612a053541eef0f2810@sentry.io/1245961", {
//     release: process.env.RELEASE_VERSION,
//     debug: true
// })
//     .addPlugin(RavenVue, Vue)
//     .install();

// 关闭vue功能的线上实例提示
const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode; // 开启Chrome浏览器的Vue调试插件（网上找Vue.js devtools）
Vue.config.productionTip = isDebug_mode; // 阻止Vue在启动时生成生产提示
Vue.config.keyCodes.f1 = 112 // 自定义全局按键修饰符，如@keyup.f1="fn"，没配置之前的写法是@keyup.112="fn"

// import NProgress from 'nprogress' // progress bar
// NProgress.configure({ showSpinner: false }) // NProgress Configuration
// 监听路由进入和离开
// router.beforeEach((to, from, next) => {
    // NProgress.start();
    // if (to.matched.some(record => record.meta.requiresAuth)) {     // 哪些需要验证
    //   if (localStorage.getItem("token")==='undefined') {                      // token存在条件
    //     next({
    //       path: '/login',                                               // 验证失败要跳转的页面
    //     })
    //   } else {
    //     next()
    //   }
    // } else {
    //   next()                                                       // 确保一定要调用 next()
    // }
//   });
//   router.afterEach(route => {
//       NProgress.done();
//   });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});
