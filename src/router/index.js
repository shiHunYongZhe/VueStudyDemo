import Vue from 'vue'
import Router from 'vue-router'
// 采用这种方式最终将同步一次性引入组件
// import home from '../page/Home/Home'

// vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载，路由组件懒加载,减少首次加载下载包，
// 1.这种方式每个组件会生成一个js文件
// const home = () => import('../page/Home/Home.vue')

// 2.webpack提供的require.ensure()
// vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。
// 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。以下示例就生成两个js文件，分别是demo.js和demo-01.js
// {
//   path: '/home',
//   name: 'home',
//   component: r => require.ensure([], () => r(require('../page/Home/Home.vue')), 'demo')
// }, {
//   path: '/search',
//   name: 'Search',
//   component: r => require.ensure([], () => r(require('../page/Search/Search.vue')), 'demo')
// }, {
//   path: '/order',
//   name: 'Order',
//   component: r => require.ensure([], () => r(require('../page/Order/Order.vue')), 'demo-01')
// }
const home = () => import('../page/Home/Home.vue')
const search = r => require.ensure([], () => r(require('../page/Search/Search.vue')), 'navpage')
const order = r => require.ensure([], () => r(require('../page/Order/Order.vue')), 'navpage')
const profile = r => require.ensure([], () => r(require('../page/Profile/Profile.vue')), 'navpage')
const download = r => require.ensure([], () => r(require('../page/Download/Download.vue')), 'navpage')
// 合并打包一些小文件
const city = r => require.ensure([], () => r(require('../page/City/City.vue')), 'city')
const searchArea = r => require.ensure([], () => r(require('../page/City/children/searchArea.vue')), 'city')
const login = r => require.ensure([], () => r(require('../page/Login/Login.vue')), 'login')
const forget = r => require.ensure([], () => r(require('../page/Forget/Forget.vue')), 'login')
const balance = r => require.ensure([], () => r(require('../page/Balance/Balance.vue')), 'balance')
const balanceDetail = r => require.ensure([], () => r(require('../page/Balance/children/detail.vue')), 'balance')
const benefit = r => require.ensure([], () => r(require('../page/Benefit/Benefit.vue')), 'benefit')
const benefitHBDescription = r => require.ensure([], () => r(require('../page/Benefit/children/hbDescription.vue')), 'benefit')
const benefitCoupon = r => require.ensure([], () => r(require('../page/Benefit/children/coupon.vue')), 'benefit')
const benefitHBHistory = r => require.ensure([], () => r(require('../page/Benefit/children/hbHistory.vue')), 'benefit')
const benefitExchange = r => require.ensure([], () => r(require('../page/Benefit/children/exchange.vue')), 'benefit')
const benefitCommend = r => require.ensure([], () => r(require('../page/Benefit/children/commend.vue')), 'benefit')
const points = r => require.ensure([], () => r(require('../page/Points/Points.vue')), 'point')
const pointsDetail = r => require.ensure([], () => r(require('../page/Points/children/detail.vue')), 'point')
const onlineShop = r => require.ensure([], () => r(require('../page/OnlineShop/OnlineShop.vue')), 'onlineShop')
const vipCard = r => require.ensure([], () => r(require('../page/VipCard/VipCard.vue')), 'vipCard')
const vipInvoiceRecord = r => require.ensure([], () => r(require('../page/VipCard/children/invoiceRecord.vue')), 'vipCard')
const vipUseCart = r => require.ensure([], () => r(require('../page/VipCard/children/useCart.vue')), 'vipCard')
const vipDescription = r => require.ensure([], () => r(require('../page/VipCard/children/vipDescription.vue')), 'vipCard')
const service = r => require.ensure([], () => r(require('../page/Service/Service.vue')), 'service')
const serviceDetail = r => require.ensure([], () => r(require('../page/Service/children/questionDetail.vue')), 'service')
const shop = r => require.ensure([], () => r(require('../page/Shop/Shop.vue')), 'shop')
const shopGoods = r => require.ensure([], () => r(require('../page/Shop/ShopGoods/ShopGoods.vue')), 'shop')
const shopInfo = r => require.ensure([], () => r(require('../page/Shop/ShopInfo/ShopInfo.vue')), 'shop')
const shopRatings = r => require.ensure([], () => r(require('../page/Shop/ShopRatings/ShopRatings.vue')), 'shop')
Vue.use(Router)

// 当一个页面路由太多时，可改用以下写法
// import home from './home';
// router/home.js的内容
// export default [
//     {
//         path: '/',
//         redirect: '/home'
//     },
//     {
//         path: '/home',
//         name: 'home',
//         meta: { showFooter: true }
//     }
// ];

// router/home.js的内容
// import profile from './profile';
// import ... from './...';

// const router = new Router({
//   routes: [].concat(
//       home,
//        ...
//   )
// });



// 监听路由进入和离开
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {     // 哪些需要验证
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
// });
// router.afterEach(route => {

// });

// export default router

// 根据当前环境判断是否使用严格模式
// const strict = process.env.NODE_ENV !== 'production'
export default new Router({
  //  去掉地址中的哈希#，改成历史模式
  mode: 'history',
  // strict: strict,
  // 记录切换页面时当前的位置，
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     if (from.meta.showFooter) {
  //       from.meta.savedPosition = document.body.scrollTop
  //     }
  //     return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // },
  routes: [
    {
      path: '/',
      redirect: '/city'
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/searchArea/:cityid',
      name: 'searchArea',
      component: searchArea
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // 路由标识信息：标识此路由是否显示FooterGuide
      meta: {
        showFooter: true,
        // 要求验证的页面,在此情况下其子页面也会被验证.
        // requiresAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/balanceDetail',
      name: 'balanceDetail',
      component: balanceDetail
    },
    {
      path: '/benefit',
      name: 'benefit',
      component: benefit
    },
    {
      path: '/benefitHBDescription',
      name: 'benefitHBDescription',
      component: benefitHBDescription
    },
    {
      path: '/benefitCoupon',
      name: 'benefitCoupon',
      component: benefitCoupon
    },
    {
      path: '/benefitHBHistory',
      name: 'benefitHBHistory',
      component: benefitHBHistory
    },
    {
      path: '/benefitExchange',
      name: 'benefitExchange',
      component: benefitExchange
    },
    {
      path: '/benefitCommend',
      name: 'benefitCommend',
      component: benefitCommend
    },
    {
      path: '/points',
      name: 'points',
      component: points,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/pointsDetail',
      name: 'pointsDetail',
      component: pointsDetail
    },
    {
      path: '/onlineShop',
      name: 'onlineShop',
      component: onlineShop,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/vipCard',
      name: 'vipCard',
      component: vipCard,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/vipInvoiceRecord',
      name: 'vipInvoiceRecord',
      component: vipInvoiceRecord
    },
    {
      path: '/vipUseCart',
      name: 'vipUseCart',
      component: vipUseCart
    },
    {
      path: '/vipDescription',
      name: 'vipDescription',
      component: vipDescription
    },
    {
      path: '/service',
      name: 'service',
      component: service,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/serviceDetail',
      name: 'serviceDetail',
      component: serviceDetail
    },
    {
      path: '/download',
      name: 'download',
      component: download,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      component: shop,
      // 当某个路由有子级路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性，SO解决办法是：即去除父级的name属性即可
      meta: {
        showFooter: true
      },
      children: [
        {
          path: 'shopGoods',
          name: 'shopGoods',
          component: shopGoods
        },
        {
          path: 'shopInfo',
          name: 'shopInfo',
          component: shopInfo
        },
        {
          path: 'shopRatings',
          name: 'shopRatings',
          component: shopRatings
        },
        {
          path: '',
          redirect: 'shopGoods'
        }
      ]
    }
  ]
})
