import Vue from 'vue'
// 引入方法名
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SEARCH_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  SAVE_QUESTION,
  ORDER_SUCCESS,
  BUY_CART,
  SAVE_AVANDER,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
// [方法名](state,{param}){}
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
    state.searchShops = searchShops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [SAVE_QUESTION] (state, question) {
    state.questionItem = question
  },
  [ORDER_SUCCESS] (state, order) {
    state.cartPrice = null
    state.orderMessage = order
  },
  [BUY_CART] (state, price) {
    state.cartPrice = price
  },
  [SAVE_AVANDER] (state, imgPath) {
    state.imgPath = imgPath
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    state.cartFoods.forEach(food => { food.count = 0 })
    state.cartFoods = []
  }
}
