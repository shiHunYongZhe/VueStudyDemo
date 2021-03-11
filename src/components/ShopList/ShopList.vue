<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <li class="shop_li border-1px" v-for="(shop, index) in shops" :key="index" @click="$router.push('/shop')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="../../common/imgs/cake.jpeg" alt="">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{shop.name}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports" v-for="(support, index) in shop.supports" :key="index">{{support.icon_name}}</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <Star :score="shop.rating" :size="24"></Star>
                <div class="rating_section">{{shop.rating}}</div>
                <div class="order_section">
                  月售{{shop.recent_order_num}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style">{{shop.delivery_mode.text}}</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{shop.float_minimum_order_amount}}起送</span>
                <span class="segmentation"></span>
                <span>配送费¥{{shop.float_delivery_fee}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li v-for="item in 6" :key="item">
        <img src="./images/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>
</template>

<script>
import Star from '../Star/Star'
export default {
  components: {
    Star
  },
  props: {
    shops: Array
  }
}
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
  @import '~common/stylus/mixins.styl'
  .shop_container
    margin-bottom 50px
    .shop_list
    .shop_li
      bottom-border-1px(#f1f1f1)
      width 100%
      >a
        clearFix()
        display block
        box-sizing border-box
        padding 15px 8px
        width 100%
        .shop_left
          float left
          box-sizing border-box
          wh(23%, 75px)
          padding-right 10px
          .shop_img
            display block
            wh(100%, 100%)
        .shop_right
          float right
          width 77%
          .shop_detail_header
            clearFix()
            width 100%
            .shop_title
              float left
              width 200px
              sc(16px, #333)
              line-height 16px
              font-weight 700
              text-align left
              &::before
                content '品牌'
                display inline-block
                sc(11px, #333)
                line-height 11px
                background-color #ffd930
                padding 2px 2px
                border-radius 2px
                margin-right 5px
            .shop_detail_ul
              float right
              margin-top 3px
              .supports
                float left
                sc(10px, #999)
                border 1px solid #f1f1f1
                padding 0 2px
                border-radius 2px
          .shop_rating_order
            clearFix()
            width 100%
            margin-top 18px
            margin-bottom 8px
            .shop_rating_order_left
              float left
              color #ff9aff
              .rating_section
                float left
                sc(10px, #ff6000)
                margin-left 4px
              .order_section
                float left
                sc(10px, #666)
                transform scale(.8)
            .shop_rating_order_right
              float right
              font-size 0
              .delivery_style
                transform-origin 35px 0
                transform scale(.7)
                display inline-block
                font-size 12px
                padding 1px
                border-radius 2px
                color $green
                border 1px solid $green
          .shop_distance
            clearFix()
            width 100%
            font-size 12px
            .shop_delivery_msg
              float left
              transform-origin 0
              transform scale(.9)
              color #666
            .segmentation
              color #ccc
</style>
