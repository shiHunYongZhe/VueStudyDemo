<template>
  <div class="star" :class="'star-' + size">
    <div class="star-item" v-for="(state, index) in StarArr" :key="index" :class="state"></div>
  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    // 该方法产生一个数组starArr来表示on half off类名的span数量（总长度为5）
    StarArr () {
      const {score} = this
      const arr = []
      let onNum = Math.floor(score)
      // 向starArr中添加n个CLASS_ON
      while (onNum > 0) {
        arr.push(CLASS_ON)
        onNum--
      }
      // 向starArr中添加0或1个CLASS_HALF,这里Math.floor(score)要重新计算，因为前面的onNum--了，已经不是原始值
      if (score * 10 - Math.floor(score) * 10 > 5) {
        arr.push(CLASS_HALF)
      }
      // 向starArr中补足n个CLASS_OFF
      while (arr.length < 5) {
        arr.push(CLASS_OFF)
      }
      return arr
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
  &.star-48
    .star-item
      wh(20px, 20px)
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('./images/star48_on')
      &.half
        bg-image('./images/star48_half')
      &.off
        bg-image('./images/star48_off')
  &.star-36
    .star-item
      wh(15px, 15px)
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star36_on')
      &.half
        bg-image('./images/star36_half')
      &.off
        bg-image('./images/star36_off')
  &.star-24
    .star-item
      wh(10px, 10px)
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star24_on')
      &.half
        bg-image('./images/star24_half')
      &.off
        bg-image('./images/star24_off')
</style>
