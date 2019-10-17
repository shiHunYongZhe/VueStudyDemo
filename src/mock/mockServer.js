/*
使用mockjs提供mock数据接口
如不使用Mock却仍想模拟接口，可在build/webpack.dev.conf.js中配置
 */
import Mock from 'mockjs'
import data from './data.json'
import shop from './shops'
import indexCategory from './index_category'
import cities from './cities'
import group from './group'

// 返回goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code: 0, data: data.info})
// 获取问题答案列表
Mock.mock('/question', {code: 0, data: data.questions})
// 根据经纬度获取商铺列表
Mock.mock('/shops', {code: 0, data: shop})
// 获取首页分类列表
Mock.mock('/index_category', {code: 0, data: indexCategory})
// 获取首页分类列表
Mock.mock('/v1/cities/guess', cities.guess)
Mock.mock('/v1/cities/hot', cities.hot)
Mock.mock('/v1/cities/group', group)
// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
