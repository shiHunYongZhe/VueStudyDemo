<template>
  <div>
    <shop-header></shop-header>
    <div class="tab">
      <div class="tab-item">
        <!-- 使用replace的方式进行路由切换 （路由懒加载） -->
        <router-link to="/shop/shopGoods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/shopRatings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/shopInfo" replace>商家</router-link>
      </div>
    </div>
    <!-- 缓存路由组件对象 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
export default {
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  components: {
    ShopHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .tab
    display flex
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color $green
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background $green
</style>
