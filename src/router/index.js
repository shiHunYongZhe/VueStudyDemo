import Vue from 'vue'
import Router from 'vue-router'
// import home from '../page/Home/Home'
// 路由组件懒加载,减少首次加载下载包
const home = () => import('../page/Home/Home.vue')
const search = () => import('../page/Search/Search.vue')
const order = () => import('../page/Order/Order.vue')
const profile = () => import('../page/Profile/Profile.vue')
const login = () => import('../page/Login/Login.vue')
const forget = () => import('../page/Forget/Forget.vue')
const balance = () => import('../page/Balance/Balance.vue')
const balanceDetail = () => import('../page/Balance/children/detail.vue')
const benefit = () => import('../page/Benefit/Benefit.vue')
const benefitHBDescription = () => import('../page/Benefit/children/hbDescription.vue')
const benefitCoupon = () => import('../page/Benefit/children/coupon.vue')
const benefitHBHistory = () => import('../page/Benefit/children/hbHistory.vue')
const benefitExchange = () => import('../page/Benefit/children/exchange.vue')
const benefitCommend = () => import('../page/Benefit/children/commend.vue')
const points = () => import('../page/Points/Points.vue')
const pointsDetail = () => import('../page/Points/children/detail.vue')
const onlineShop = () => import('../page/OnlineShop/OnlineShop.vue')
const vipCard = () => import('../page/VipCard/VipCard.vue')
const vipInvoiceRecord = () => import('../page/VipCard/children/invoiceRecord.vue')
const vipUseCart = () => import('../page/VipCard/children/useCart.vue')
const vipDescription = () => import('../page/VipCard/children/vipDescription.vue')
const service = () => import('../page/Service/Service.vue')
const serviceDetail = () => import('../page/Service/children/questionDetail.vue')
const download = () => import('../page/Download/Download.vue')
const shop = () => import('../page/Shop/Shop.vue')
const shopGoods = () => import('../page/Shop/ShopGoods/ShopGoods.vue')
const shopInfo = () => import('../page/Shop/ShopInfo/ShopInfo.vue')
const shopRatings = () => import('../page/Shop/ShopRatings/ShopRatings.vue')
Vue.use(Router)

export default new Router({
  //  去掉地址中的哈希#，改成历史模式
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // 路由标识信息：标识此路由是否显示FooterGuide
      meta: {
        showFooter: true
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
      component: login,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget,
      meta: {
        showFooter: true
      }
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
