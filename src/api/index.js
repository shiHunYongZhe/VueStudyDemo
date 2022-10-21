/*
 * 向外部暴漏与后台交互的函数
 * @param {*} url 请求路径，默认为空
*/
import ajax from './ajax'


// (下列请求由mock拦截并返回 不需要代理)

//获取首页默认地址
export const cityGuess = () => ajax('/cities/guess')
//获取首页热门城市
export const hotcity = () => ajax('/cities/hot')
//获取首页所有城市
export const groupcity = () => ajax('/cities/group')
//获取 home 页面食品分类列表
export const reqCategorys = () => ajax('/index_category')
//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取问题答案信息
export const reqquestion = () => ajax('/question')
//获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
//获取 msite 商铺列表(实际开发需根据query参数：经纬度)
export const reqShops = () => ajax('/shops')


//根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
//获取短信验证码
export const reqSendCode = phone => ajax('/sendcode', {phone})
//账号密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
//获取图片验证码
export const getCaptcha = () => ajax('/getCaptcha')
//手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
//改密码
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captchaCode) => ajax('', {username, oldpassWord, newpassword, confirmpassword, captchaCode}, 'POST')
//获取用户信息(根据会话)
export const reqUserInfo = () => ajax('/userinfo')
//请求登出
export const reqLogout = () => ajax('/logout')
//获取订单列表
export const getOrderList = (userId, offset) => ajax('/bos/v2/users/' + userId + '/orders', {
  limit: 10,
  offset
})
//兑换会员卡
export const vipCart = (id, number, password) => ajax('/member/v1/users/' + id + '/delivery_card/physical_card/bind', {
  number,
  password
}, 'POST')

//获取地址信息(根据经纬度串)这个接口的经纬度参数是在url路径里的，没有query参数
export const reqAddress = geohash => ajax(`/position/${geohash}`)
//获取红包
export const getHongbaoNum = id => ajax('/v2/users/' + id + '/hongbaos?limit=20&offset=0')
//获取过期红包
export const getExpired = id => ajax('/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0')
//兑换红包
export const exChangeHongbao = (id, exchangeCode, captchaCode) => ajax('/v1/users/' + id + '/hongbao/exchange', {
  exchangeCode,
  captchaCode
}, 'POST')

//获取search页面搜索结果
export const searchRestaurant = (geohash, keyword) => fetch('/v4/restaurants', {
  'extras[]': 'restaurant_activity',
  geohash,
  keyword,
  type: 'search'
})

// 其他新奇的写法，本项目用不到，纯做收藏
// jsonp请求单独写， 比如发送jsonp请求得到天气信息
export const reqWeather = (city) => {
  // 执行器函数: 内部去执行异步任务,
  // 成功了调用resolve(), 失败了不调用reject(), 直接提示错误
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    jsonp(url, {}, (error, data) => {
      if (!error && data.error===0) { // 成功的
        const {dayPictureUrl, weather} = data.results[0].weather_data[0]
        resolve({dayPictureUrl, weather})
      } else { // 失败的
        message.error('获取天气信息失败')
      }
    })
  })
}

/* 根据Name/desc搜索产品分页列表 */
export const reqSearchProducts = ({
  pageNum,
  pageSize,
  searchName,
  searchType // 它的值是'productName'或者'productDesc'
}) => ajax(BASE + '/manage/product/search', {
  pageNum,
  pageSize,
  [searchType]: searchName
})

/* 添加/修改商品 */
export const reqAddUpdateProduct = (product) => ajax(
  BASE + '/manage/product/' + (product._id ? 'update' : 'add'),
  product,
  post
)
