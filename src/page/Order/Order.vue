<template>
  <div>
    <section class="order">
      <header-top title="订单列表" :isBack="false" />
      <!-- <section class="order_no_login">
        <img src="./images/person.png">
        <h3>登录后查看外卖订单</h3>
        <button @click.prevent="this.router.replace('/login')">立即登陆</button>
      </section> -->
      <nopage ref="nopage" title="用户"></nopage>
    </section>
    <transition name="loading">
      <Loading v-show="showLoading" />
    </transition>
  </div>
</template>

<script>
import Loading from '../../components/Loading/Loading'
import { dataMixin } from "../../mixins/dataMixin.js";
export default {
  data () {
    return {
      showLoading: true
    }
  },
  //nopage 页面混入
  mixins: [dataMixin],
  components: {
    Loading
  },
  mounted () {
    this.showLoading = false
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/mixins.styl"
  .order
    width 100%
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        wh(100%, 30%)
      >h3
        padding 10px 0
        sc(17px, #6a6a6a)
      >button
        display inline-block
        background #02a774
        sc(14px, #fff)
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>
