<template>
  <div>
    <section class="order">
      <HeaderTop title="订单列表" :isBack="false"></HeaderTop>
      <section class="order_no_login">
        <img src="./images/person.png">
        <h3>登录后查看外卖订单</h3>
        <button @click.prevent="this.router.replace('/login')">立即登陆</button>
      </section>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop
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
