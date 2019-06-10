/*
 * 向外部暴漏与后台交互的函数
 * @param {*} url 请求路径，默认为空
*/
import ajax from './ajax'
const BASE_URL = '/api'
/**
 * 获取 home 页面食品分类列表
 */
export const reqCategorys = () => ajax('/index_category')
/**
 * 获取商家信息(下列请求由mock拦截并返回 不需要代理)
 */
export const reqShopInfo = () => ajax('/info')
/**
 * 获取问题答案信息
 */
export const reqquestion = () => ajax('/question')
/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')
/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
/**
 * 获取 msite 商铺列表(根据query参数：经纬度)
 * 将经纬度两个数据作为一个参数对象传入
 * 也可以两个数据分别传入ajax， 然后再放入一个对象参数内， 如下面的手机号接口
 */
export const reqShops = () => ajax('/shops')
/**
 * 根据经纬度和关键字搜索商铺列表
 */
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax(BASE_URL + '/sendcode', {phone})
/**
 * 账号密码登录
 */
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
/**
 * 改密码
 */
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captchaCode) => ajax('BASE_URL', {username, oldpassWord, newpassword, confirmpassword, captchaCode}, 'POST')
/**
 * 获取用户信息(根据会话)
 */
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
/**
 * 请求登出
 */
export const reqLogout = () => ajax(BASE_URL + '/logout')
/**
 * 获取订单列表
 */

export const getOrderList = (userId, offset) => ajax('/bos/v2/users/' + userId + '/orders', {
  limit: 10,
  offset
})
/**
*兑换会员卡
*/
export const vipCart = (id, number, password) => ajax('/member/v1/users/' + id + '/delivery_card/physical_card/bind', {
  number,
  password
}, 'POST')
/**
 * 获取地址信息(根据经纬度串)
 * 这个接口的经纬度参数是在url路径里的，没有query参数
 */
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)
/**
 * 获取红包
*/
export const getHongbaoNum = id => ajax('/promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0')
/**
 * 获取过期红包
*/
export const getExpired = id => ajax('/promotion/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0')
/**
 * 兑换红包
*/
export const exChangeHongbao = (id, exchangeCode, captchaCode) => ajax('/v1/users/' + id + '/hongbao/exchange', {
  exchangeCode,
  captchaCode
}, 'POST')

/**
 * 获取当前所在城市
 */

export const currentcity = number => ajax('/v1/cities/' + number)

/**
 * 获取搜索地址
 */
export const searchplace = (cityid, value) => ajax('/v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value
})
// export const searchplace = (cityid, value) => get('/v1/pois?type=search&city_id=' + cityid + '&keyword=' + value)
/**
 * 获取首页默认地址
 */
export const cityGuess = () => ajax('/v1/cities', {
  type: 'guess'
})

/**
 * 获取首页热门城市
 */

export const hotcity = () => ajax('/v1/cities', {
  type: 'hot'
})

/**
 * 获取首页所有城市
 */

export const groupcity = () => ajax('/v1/cities', {
  type: 'group'
})

/**
 * 获取search页面搜索结果
 */

export const searchRestaurant = (geohash, keyword) => fetch('/v4/restaurants', {
  'extras[]': 'restaurant_activity',
  geohash,
  keyword,
  type: 'search'
})
