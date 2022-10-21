
import App from './App';
import router from './router';
import store from './store';
import Vue from 'vue';
import fastclick from 'fastclick';
import vueLazyload from 'vue-lazyload';
import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css';
// import Raven from "raven-js";
// import RavenVue from "raven-js/plugins/vue";
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import AlertTip from './components/AlertTip/AlertTip.vue'
// 加载mockServer,根据请求响应固定数据
import './mock/mockServer';

// 在移动端（微信等）使用 vConsole调试console（启动需npm安装vConsole）
// import Vconsole from 'vconsole'
// let vConsole = null;
// process.env.NODE_ENV == "development" && (vConsole = new Vconsole());

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoader', function() {
        fastclick.attach(document.body);
    });
}
Vue.component(Button.name, Button);
Vue.component('header-top', HeaderTop);
Vue.component('alert-tip', AlertTip);

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
Vue.config.devtools = isDebug_mode; // 开启Chrome浏览器的Vue调试插件（网上找的Vue.js devtools）
Vue.config.productionTip = isDebug_mode; // 阻止Vue在启动时生成生产提示

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
