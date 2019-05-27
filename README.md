# happily

> A Vue.js project

## Build Setup
# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径配置
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── api                                     // 数据交互统一调配
│   │   ├── ajax                                // ajax封装
│   │   ├── index                               // 获取数据的统一调配文件，对接口进行统一管理
│   ├── common                                  // 公共文件
│   │   ├── imgs                                // 图片文件夹 
│   │   └── stylus                              // 公共stylus组件
│   ├── components                              // 公共组件
│   │   ├── AlterTip                            // 弹出框组件
│   │   ├── CartControl                         // 数量加减组件
│   │   ├── Food                                // 商品信息组件
│   │   ├── FoodGuide                           // 公共底部组件
│   │   ├── HeaderTop                           // 公共头部组件
│   │   ├── Loading                             // 加载组件
│   │   ├── ShopCart                            // 下单时购物车组件
│   │   ├── ShopHeader                          // 店铺头部组件
│   │   ├── ShopList                            // 店铺出售商品组件
│   │   ├── Star                                // 星级评价组件
│   ├── mock                                    // 开发阶段的临时模拟数据
│   ├── page                                    // 具体路由页面
│   │   ├── Balance
│   │   │   ├── Balance.vue                     // 余额页
│   │   │   └── children
│   │   │       └── detail.md                   // 余额问题及说明markdown文件
│   │   │       └── detail.vue                  // 余额说明
│   │   ├── Benefit
│   │   │   ├── Benefit.vue                     // 红包页
│   │   │   └── children
│   │   │       ├── commend.md
│   │   │       ├── commend.vue                 // 推荐有奖
│   │   │       ├── coupon.vue                  // 代金券说明
│   │   │       ├── exchange.vue                // 兑换红包
│   │   │       ├── hbDescription.md
│   │   │       ├── hbDescription.vue           // 红包说明
│   │   │       └── hbHistory.vue               // 历史红包
│   │   ├── city
│   │   │   └── city.vue                        // 当前城市页
│   │   ├── confirmOrder
│   │   │   ├── children
│   │   │   │   ├── children
│   │   │   │   │   ├── addAddress.vue          // 添加地址页
│   │   │   │   │   └── children
│   │   │   │   │       └── searchAddress.vue   // 搜索地址页
│   │   │   │   ├── chooseAddress.vue           // 选择地址页
│   │   │   │   ├── invoice.vue                 // 选择发票页
│   │   │   │   ├── payment.vue                 // 付款页
│   │   │   │   ├── remark.vue                  // 订单备注页
│   │   │   │   └── userValidation.vue          // 用户验证页
│   │   │   └── confirmOrder.vue                // 确认订单页
│   │   ├── Download
│   │   │   └── Download.vue                    // 下载App
│   │   ├── find
│   │   │   └── find.vue                        // 发现页
│   │   ├── food
│   │   │   └── food.vue                        // 食品筛选排序页
│   │   ├── Forget
│   │   │   └── Forget.vue                      // 忘记密码，修改密码页
│   │   ├── Home
│   │   │   └── Home.vue                        // 首页
│   │   ├── Login
│   │   │   └── Login.vue                       // 登录注册页
│   │   ├── OnlineShop
│   │   │   └── OnlineShop.vue                  // 网上商城页
│   │   ├── msite
│   │   │   └── msite.vue                       // 商铺列表页
│   │   ├── Order
│   │   │   ├── children
│   │   │   │   └── orderDetail.vue             // 订单详情页
│   │   │   └── Order.vue                       // 订单列表页
│   │   ├── Points
│   │   │   ├── children
│   │   │   │   └── detail.md
│   │   │   │   └── detail.vue                  // 积分说明
│   │   │   └── Points.vue                      // 积分页
│   │   ├── profile
│   │   │   ├── children
│   │   │   │   ├── children
│   │   │   │   │   ├── address.vue             // 地址
│   │   │   │   │   └── children
│   │   │   │   │       ├── add.vue             // 新增地址
│   │   │   │   │       └── children
│   │   │   │   │           └── addDetail.vue   // 搜索地址
│   │   │   │   ├── info.vue                    // 帐户信息
│   │   │   │   └── setusername.vue             // 重置用户名
│   │   │   └── profile.vue                     // 个人中心
│   │   ├── Search
│   │   │   └── Search.vue                      // 搜索页
│   │   ├── Service
│   │   │   ├── children
│   │   │   │   └── questionDetail.vue          // 问题详情
│   │   │   └── Service.vue                     // 服务中心
│   │   ├── Shop
│   │   │   ├── ShopGoods
│   │   │   │   └── ShopGoods.vue               // 商铺点餐页面
│   │   │   ├── ShopInfo
│   │   │   │   └── ShopInfo.vue               // 商铺信息页面
│   │   │   ├── ShopRatings
│   │   │   │   └── ShopRatings.vue            // 商铺商品评价页面
│   │   │   └── Shop.vue                        // 商铺筛选页
│   │   └── Vipcard
│   │       ├── children
│   │       │   ├── invoiceRecord.vue           // 购买记录
│   │       │   ├── useCart.vue                 // 使用卡号购买
│   │       │   └── vipDescription.vue          // 会员说明
│   │       └── Vipcard.vue                     // 会员卡办理页
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex,作为store的入口文件
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   │   └── state.js                            // 配置state
│   └── style
│       ├── common.scss                         // 公共样式文件
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                      // 静态资源配置
│   ├── css
│       ├── common.scss                         // 公共样式文件
│   ├── .gitkeep                                // 虽然是空文件，但能保证static文件夹为空时git也照常提交该文件夹
│   ├── favicon.ico                             // 网站ico图标
├── test                                        // 用于测试的文件夹
├── .babelrc                                    // 使用babel的配置规则
├── .editorconfig                               // 编辑器配置规则，比如使用tab还是2/4空格
├── .eslintignore                               // eslint检查忽略文件
├── .eslintrc.js                                // eslint检查配置规则
├── .gitignore                                  // git提交忽略文件
├── .postcssrc.js                               // 使用posscss配置规则
├── index.html                                  // 入口html文件
├── package.json                                // webpack安装的插件目录及配置
├── README.md                                   // 项目说明文档
.
```

``` 
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
