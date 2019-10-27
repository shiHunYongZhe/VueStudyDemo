# happily

> A Vue.js project
# 简介

## 1. 项目描述

1. 此项目为一个前后端分离的外卖 Web App (SPA) 项目
2. 使用了 Vue 全家桶+ES6+Webpack 等前端最新技术 
    * `Vue`：用于构建用户界面的 MVVM 框架
    * `vue-router`：为单页面应用提供的路由系统，使用了 `Lazy Loading Routes` 技术来实现异步加载优化性能
    * `vuex`：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
    * `vue-lazyload`：实现图片懒加载，节省用户流量，优化页面加载速度
    * `better-scroll`：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅
    * `stylus`：css 预编译处理器
    * `ES6`：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
    ...
3. 包括商家, 商品, 购物车, 用户等多个功能子模块 
4. 采用模块化、组件化、工程化的模式开发 
5. 后续打包使用了cdn和启用了服务端gzip压缩（打包后使用node server.js测试）
## 2. 你能从此项目中学到什么? 

### 2.1 项目开发流程及开发方法 

1. 熟悉一个项目的开发流程
2. 学会组件化、模块化、工程化的开发模式 
3. 掌握使用 vue-cli 脚手架初始化 Vue.js 项目
4. 学会模拟 json 后端数据，实现前后端分离开发 
5. 学会 ES6+eslint 的开发方式 
6. 掌握一些项目优化技巧 

### 2.2 Vue 插件或第三方库

1. 学会使用 vue-router 开发单页应用 
2. 学会使用 axios/vue-resource 与后端进行数据交互
3. 学会使用 vuex 管理应用组件状态
4. 学会使用 better-scroll/vue-scroller 实现页面滑动效果
5. 学会使用 mint-ui 组件库构建界面
6. 学会使用 vue-lazyload 实现图片惰加载
7. 学会使用 mockjs 模拟后台数据接口  

## 3. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用
        router-view/router-link/keep-alive
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: Msite/Search/Order/Profile

## 4. 抽取组件
    头部组件: HeaderTop, 通过slot来实现组件通信标签结构
    商家列表组件: ShopList

## 5. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta

## 6. 后台项目
    启动后台项目: 理解前后台分离
    测试后台接口: 使用postman
    修正接口文档

## 7. 前后台交互
    ajax请求库: axios
    ajax请求函数封装: axios + promise
    接口请求函数封装: 每个后台接口


# 02
## 1. 异步数据
    封装ajax: 
        promise+axios封装ajax请求的函数
        封装每个接口对应的请求函数(能根据接口定义ajax请求函数)
        解决ajax的跨越域问题: 配置代理, 对代理的理解
    vuex编码
        创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types
        设计state: 从后台获取的数据
        实现actions: 
            定义异步action: async/await
            流程:　发ajax获取数据, commit给mutation
        实现mutations: 给状态赋值
        实现index: 创建store对象
        main.js: 配置store
    组件异步显示数据
        在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
        mapState(['xxx'])读取state中数据到组件中
        在模板中显示xxx的数据
    模板中显示数据的来源
        data: 自身的数据(内部改变)
        props: 外部传入的数据(外部改变)
        computed: 根据data/props/别的compute/state/getters
    异步显示轮播图
        通过vuex获取foodCategorys数组(发请求, 读取)
        对数据进行整合计算(一维变为特定的二维数组)
        使用Swiper显示轮播, 如何在界面更新之后创建Swiper对象?
            1). 使用回调+$nextTick()
            2). 使用watch+$nextTick()	

## 2. 登陆/注册: 界面相关效果
    a. 切换登陆方式
    b. 手机号合法检查
    c. 倒计时效果
    d. 切换显示或隐藏密码
    g. 前台验证提示

## 3. 前后台交互相关问题
    1). 如何查看你的应用是否发送某个ajax请求?  
        浏览器的network
    2). 发ajax请求404
        请求的路径的对
        代理是否生效(配置和重启)
        服务器应用是否运行
    3). 后台返回了数据, 但页面没有显示?
        vuex中是否有
        组件中是否读取

# 03
## 1. 完成登陆/注册功能
    1). 2种方式
       手机号/短信验证码登陆
       用户名/密码/图片验证码登陆
    2). 登陆的基本流程
       表单前台验证, 如果不通过, 提示
       发送ajax请求, 得到返回的结果
       根据结果的标识(code)来判断登陆请求是否成功
           1: 不成功, 显示提示
           0. 成功, 保存用户信息, 返回到上次路由
    3). vue自定义事件
       绑定监听: @eventName="fn"  function fn (data) {// 处理}
       分发事件: this.$emit('eventName', data)
    4). 注意:
       使用network查看请求(路径/参数/请求方式/响应数据)
       使用vue的chrome插件查看vuex中的state和组件中的数据
       使用debugger语句调试代码
       实参类型与形参类型的匹配问题

## 2. 搭建商家整体界面
    1). 拆分界面路由
    2). 路由的定义/配置|使用

## 3. 模拟(mock)数据/接口
    1). 前后台分离的理解
    2). mockjs的理解和使用
    3). jons数据设计的理解

## 4. ShopHeader组件
    1). 异步显示数据效果的编码流程
        ajax
          ajax请求函数
          接口请求函数
        vuex
          state
          mutation-types
          actions
          mutations
        组件
          dispatch(): 异步获取后台数据到vuex的state
          mapState(): 从vuex的state中读取对应的数据

# 04
## 1. ShopGoods组件
    1). 动态展现列表数据
    2). 基本滑动:
        使用better-scroll
        理解其基本原理
        创建BScroll对象的时机
          watch + $nextTick()
          callback + $nextTick
    3). 滑动右侧列表, 左侧同步更新
        better-scroll禁用了原生的dom事件, 使用的是自定义事件
        绑定监听: scroll/scrollEnd
        滚动监听的类型: probeType
        列表滑动的3种类型
            手指触摸
            惯性
            编码
        分析:
            类名: current 标识当前分类
            设计一个计算属性: currentIndex
            根据哪些数据计算?
              scrollY: 右侧滑动的Y轴坐标 (滑动过程时实时变化)
              tops: 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
        编码:
            1). 在滑动过程中, 实时收集scrollY
            2). 列表第一次显示后, 收集tops
            3). 实现currentIndex的计算逻辑
    4). 点击左侧列表项, 右侧滑动到对应位置

## 2. CartControl组件
    1). 问题: 更新状态数据, 对应的界面不变化
        原因: 一般方法给一个已有绑定的对象中添加一个新的属性, 这个属性没有数据绑定
        解决: 
            Vue.set(obj, 'xxx', value)才有数据绑定
            this.$set(obj, 'xxx', value)才有数据绑定

## 3. ShopCart组件
    1). 使用vuex管理购物项数据: cartFoods

## 4. Food组件
    1). 父子组件:
        子组件调用父组件的方法: 通过props将方法传递给子组件
        父组件调用子组件的方法: 通过ref找到子组件标签对象

# 05
## 1. ShopRatings组件
    1). 列表的过滤显示
    2). 自定义过滤器

## 2. ShopInfo组件
    1). 使用better-scroll实现两个方向的滑动
    1). 通过JS动态操作样式
    2). 解决当前路由刷新异常的bug

## 3. Search组件
    1). 根据关键字来异步搜索显示匹配的商家列表
    2). 如实实现没有搜索结果的提示显示

## 4. 项目优化
    1). 缓存路由组件对象
    2). 路由组件懒加载
    3). 图片司加载: vue-lazyload
    4). 分析打包文件并优化 
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
<<<<<<< HEAD
│   │   ├── index                               // 获取数据的统一调配文件，对接
│   │   ├── utils                               // 工具函数
=======
│   │   ├── index                               // 获取数据的统一调配文件，对接口进行统一管理
>>>>>>> 20b1e0d696adc99f3476c05266156e1df63d3296
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
<<<<<<< HEAD
│   │   ├── City
│   │   │   │   ├── children
│   │   │   │   │   ├── searchArea.vue          // 添加地址页
│   │   │   └── City.vue                        // 当前城市页
│   │   ├── confirmOrder(未添加)
=======
│   │   ├── city
│   │   │   └── city.vue                        // 当前城市页
│   │   ├── confirmOrder
>>>>>>> 20b1e0d696adc99f3476c05266156e1df63d3296
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
<<<<<<< HEAD
=======
│   │   ├── find
│   │   │   └── find.vue                        // 发现页
>>>>>>> 20b1e0d696adc99f3476c05266156e1df63d3296
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
<<<<<<< HEAD
│   │   ├── Order
│   │   │   ├── children(未添加)
=======
│   │   ├── msite
│   │   │   └── msite.vue                       // 商铺列表页
│   │   ├── Order
│   │   │   ├── children
>>>>>>> 20b1e0d696adc99f3476c05266156e1df63d3296
│   │   │   │   └── orderDetail.vue             // 订单详情页
│   │   │   └── Order.vue                       // 订单列表页
│   │   ├── Points
│   │   │   ├── children
<<<<<<< HEAD
│   │   │   │   └── detail.vue                  // 积分说明
│   │   │   └── Points.vue                      // 积分页
│   │   ├── profile
│   │   │   ├── children(未添加)
=======
│   │   │   │   └── detail.md
│   │   │   │   └── detail.vue                  // 积分说明
│   │   │   └── Points.vue                      // 积分页
│   │   ├── profile
│   │   │   ├── children
>>>>>>> 20b1e0d696adc99f3476c05266156e1df63d3296
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
├── package.json                                // 应用包配置文件
├── README.md                                   // 项目说明文档
.
```

``` 
# install dependencies
npm install | yarn 

# serve with hot reload at localhost:8080
npm/yarn run dev

# build for production with minification
npm/yarn run build

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
