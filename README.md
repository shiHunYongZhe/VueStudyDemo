# happily

<<<<<<< HEAD
> A Vue.js project(Vue外卖App)，线上地址http://hjzdesign.xyz
=======
> A Vue.js project(Vue外卖App) 线上地址http://hjzdesign.xyz
>>>>>>> aaae2610574b5d921fdb94cf36ee67cd64889f1a
## 1. 项目描述

1. 此项目为一个前后端分离的外卖 Web App (SPA) 项目
2. 使用了 Vue 全家桶+ES6+Webpack 等前端最新技术
    * `Vue`：用于构建用户界面的 MVVM 框架
    * `vue-router`：为单页面应用提供的路由系统
    * `vuex`：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
    * `axios`：Vue 数据请求库，此项目采用axios与promise结合封装成ajax获取接口，模拟实现前后端数据之间的交互
    * `better-scroll`：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅
    * `stylus`：css 预编译处理器
    * `ES6`：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
    ...
3. 包括商家, 商品, 购物车, 用户等多个功能子模块
4. 采用模块化、组件化、工程化的模式开发
5. 测试数据接口: 使用postman

## 优化方案:

- 压缩图片，减少图片的体积: ![](https://tinypng.com/)
- 雪碧图（雪碧图在线合成工具: ![](https://www.toptal.com/developers/css/sprite-generator)）
- vue-rouer(路由懒加载,分离 app 的 js 为多个 js 文件，到对应的页面再执行对应的 js, 实现异步加载优化性能)
- vue-lazyload(实现图片懒加载，节省用户流量，优化页面加载速度)
- fastclick(解决移动端 300ms 延迟，提高页面交互流畅度)
- 后续使用了cdn在线获取vue相关类库，并且文件打包后启用了服务端gzip压缩（打包后使用node server.js测试）
- webpack优化

## 2. 你能从此项目中学到什么?

1. 熟悉一个项目的开发流程
2. 学会组件化、模块化、工程化的开发模式
3. 掌握使用 vue-cli 脚手架初始化 Vue.js 项目，vue全家桶开发应用
4. 学会使用mock.js模拟 json 后端数据以及接口，实现前后端分离开发
5. 学会 ES6+eslint 的开发方式
6. 掌握一些项目优化技巧，如vue-lazyload 实现图片惰加载

## 3. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用
        router-view/router-link/keep-alive
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
        底部导航组件: FooterGuide：通过路由的meta控制显示/隐藏
        导航路由组件: Msite/Search/Order/Profile
        头部组件: HeaderTop, 通过slot来实现组件通信标签结构
        商家列表组件: ShopList
    promise+axios封装ajax:
        封装每个接口对应的请求函数(能根据接口定义ajax请求函数)
        解决ajax的跨越域问题: 配置代理, 对代理的理解
    vuex编码
        创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types
        实现index: 创建store对象
        main.js: 配置store
        组件异步显示数据
            在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
            mapState(['xxx'])读取state中数据到组件中
            在模板中显示xxx的数据
        模板中显示数据的来源
            data: 自身的数据(内部改变)
            props: 外部传入的数据(外部改变)
            computed: 根据data/props/以及vuex中的compute/state/getters
        异步显示轮播图
            通过vuex获取foodCategorys数组(发请求, 读取)
            对数据进行整合计算(一维变为特定的二维数组)
            使用Swiper显示轮播, 如何在界面更新之后创建Swiper对象?
                1). 使用回调+$nextTick()
                2). 使用watch+$nextTick()

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
│   │   ├── index                               // 获取数据的统一调配文件，对接
│   │   ├── utils                               // 工具函数
│   │   ├── index                               // 获取数据的统一调配文件，对接口进行统一管理
│   ├── common                                  // 公共文件(需要webpack处理的)
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
│   │   ├── City
│   │   │   │   ├── children
│   │   │   │   │   ├── searchArea.vue          // 添加地址页
│   │   │   └── City.vue                        // 当前城市页
│   │   ├── confirmOrder(未添加)
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
│   │   ├── Order
│   │   │   ├── children(未添加)
│   │   ├── msite
│   │   │   └── msite.vue                       // 商铺列表页
│   │   ├── Order
│   │   │   ├── children
│   │   │   │   └── orderDetail.vue             // 订单详情页
│   │   │   └── Order.vue                       // 订单列表页
│   │   ├── Points
│   │   │   ├── children
│   │   │   │   └── detail.vue                  // 积分说明
│   │   │   └── Points.vue                      // 积分页
│   │   ├── profile
│   │   │   ├── children(未添加)
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
├── static                                      // 静态资源配置，放置高度静态但不经由 Webpack 处理的文件 比如jQuery.min.js，bootstrap.min.js 等
│   ├── css
│       ├── common.scss                         // 公共样式文件
│   ├── .gitkeep                                // 虽然是空文件，但能保证static文件夹为空时git也照常提交该文件夹
│   ├── favicon.ico                             // 网站ico图标
├── .babelrc                                    // 使用babel的配置规则
├── .editorconfig                               // 编辑器配置规则，比如使用tab还是2/4空格
├── .gitignore                                  // git提交忽略文件
├── .postcssrc.js                               // 使用posscss配置规则
├── index.html                                  // 入口html文件
├── package.json                                // 应用包配置文件
├── README.md                                   // 项目说明文档

// 这些后面我删除了
├── test                                        // 用于测试的文件夹
├── .eslintignore                               // eslint检查忽略文件
├── .eslintrc.js                                // eslint检查配置规则

.
```

### install dependencies / 安装依赖
npm install | yarn

### serve with hot reload at localhost:8080 / 本地开发环境 热加载访问http://localhost:8080
npm/yarn run dev

### build for production with minification / 构建生产
npm/yarn run build

# 用手机浏览效果
1. 确保手机和电脑连接的是同一个局域网/wifi
1. 电脑cmd下输入ipconfig查看当前网络IPv4，比如我的是192.168.1.101
1. 修改config/index.js 的host，改成本机的ipv4，保存修改
1. 运行npm run dev,在浏览器上输入ipv4:8080，比如我的是http://192.168.1.101:8080，确保可正常预览
1. 使用草料二维码输入当前网址生成二维码，手机扫描即可查看项目

# 打算优化的小问题（持续修复）

## 引入moment.js文件太大的问题

## 生成移动端app

## 持续集成服务 Travis CI，（参考https://github.com/shiHunYongZhe/travis-ci-demo）

- 利用 Travis CI，监听 Github 项目 master，一旦检测到 master 有代码变动，自动执行脚本，并把编译打包完成的项目自动发送部署到服务器，不用再像以前一样，需要 ssh 登录到服务器，再执行 git pull 操作。
本地添加.travis.yml
```
    language: node_js
    node_js:
    - 8
    branchs:
      only:
      - master
    before_install:
    - openssl aes-256-cbc -K $encrypted_87bf11d507f0_key -iv $encrypted_87bf11d507f0_iv
      -in id_rsa.enc -out ~/.ssh/id_rsa -d
    - chmod 600 ~/.ssh/id_rsa
    - echo -e "Host 47.98.240.154\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
    script:
    - npm install cnpm --registry=https://registry.npm.taobao.org
    - cnpm install
    - npm run build
    - scp -r dist root@47.98.240.154:/var/www/html/fancy
    -
```
