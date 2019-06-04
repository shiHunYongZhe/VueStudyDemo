<template>
  <header class="header">
    <!-- 插槽是父组件与子组件的通讯方式，子组件中的slot可以显示父组件传递给子组件的内容 -->
    <slot name="left"></slot>
    <a v-show="isBack" class="header_search" @click="$router.back()">
        <i class="iconfont icon-arrow-left"></i>
    </a>
    <div class="header_title" v-if="title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </div>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    isBack: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixins.styl"
.header
  background-color $green
  position fixed
  z-index 100
  left 0
  top 0
  wh(100%, 45px)
  .header_search
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
    wh(10%, 50%)
    .icon-sousuo,
    .icon-arrow-left
      sc(25px, #fff)
  .header_title
    ab-center()
    width 50%
    color #fff
    text-align center
    .header_title_text
      sc(20px, #fff)
      display block
  .header_login
  .change_city
    position absolute
    right 15px
    top 50%
    transform translateY(-50%)
    sc(14px, #fff)
    .header_login_text
      color #fff
</style>
