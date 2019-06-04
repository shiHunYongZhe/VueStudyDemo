<template>
  <footer class="footer_guide border-1px">
        <!-- <a href="javascript:;" class="guide_item on">
    <span class="item_icon">
    <i class="iconfont icon-food"></i>
    </span>
    <span>外卖</span>
    </a> -->
    <!-- 本应用不是单纯的单页面应用，不要在这里使用router-link标签和router-view -->
    <section class="guide_item" @click="goto({path: '/home'})" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-food"></i>
      </span>
      <span>首页</span>
    </section>
    <section class="guide_item" @click = "goto({path: '/search'})" :class="{on: isCurrent('/search')}">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </section>
    <section class="guide_item" @click="goto('./order')" :class="{on: isCurrent('/order')}">
      <span class="item_icon">
        <i class="iconfont icon-single"></i>
      </span>
      <span>订单</span>
    </section>
    <section class="guide_item" @click="goto('./profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont icon-user"></i>
      </span>
      <span>我的</span>
    </section>
  </footer>
</template>

<script>
import {mapState} from 'vuex'
export default {
  methods: {
    goto (path) {
      this.$router.push(path)
    },
    isCurrent (path) {
      return this.$route.path === path
    }
  },
  computed: {
    ...mapState([
      'geohash'
    ]),
  },
}
</script>

<style lang='stylus' scoped>
  @import '~common/stylus/mixins.styl'
  .footer_guide
    top-border-1px($bg)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    wh(100%, 50px)
    display flex
    .guide_item
      display flex
      flex 1
      flex-direction column
      text-align center
      align-item center
      margin 5px
      color #999
      &.on
        color $green
      span
        display inline-block
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
