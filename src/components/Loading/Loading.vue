<template>
  <div class="loading_container">
    <div class="load_img" :style="{backgroundPositionY: -(positionY%7)*2.5 + 'rem'}">
    </div>
    <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {
      positionY: 0,
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.positionY++
    }, 600)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins'
@keyframes load
  0%
    transform: translateY(0px)
  50%
    transform: translateY(-50px)
  100%
    transform: translateY(0px)
@keyframes ellipse
  0%
    transform scale(1)
  50%
    transform scale(0.3)
  100%
    transform scale(1)
.loading_container
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)
  wh(50px, 50px)
.load_img
  wh(100%, 100%)
  background url(../../common/imgs/icon_loading.png) no-repeat 0 0
  background-size: 50px auto
  transform: translateY(0px)
  animation: load .6s infinite ease-in-out
  position: relative
  z-index: 11
.load_ellipse
  position absolute
  wh(52px, 40px)
  top 44px
  left 4px
  z-index 10
  animation ellipse .6s infinite ease-in-out
</style>
