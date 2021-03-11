<template>
  <section class="home">
    <HeaderTop :isBack="false">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_title" slot="center" to="/city">
        <span class="header_title_text ellipsis">{{area}}</span>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录 | 注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-yonghuming"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!-- 首页导航轮播图 -->
    <nav class="home_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pages, index) in categorysArr" :key="index">
            <div class="link_to_food" v-for="(data, index) in  pages" :key="index" @click.stop="">
              <div class="food_container">
                <img :src="baseImageUrl + data.image_url" alt="">
              </div>
              <span>{{data.title}}</span>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/home_back.svg" alt="back" v-else>
    </nav>
    <!-- 首页附近商家列表 -->
    <div class="home_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-touxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList :shops="shops"></ShopList>
    </div>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList.vue'
import Swiper from 'swiper'
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  methods: {
    ...mapActions(['getCategorys', 'getShops'])
  },
  computed: {
    ...mapState(['userInfo', 'categorys', 'shops']),
    area () {
      return this.$route.query.name || '选择地址'
    },
    categorysArr () {
      // 1.先从当前组件中得到所有食品分类的一维数组
      const {categorys} = this
      // 2.准备一个空的二维数组--categorysArr
      const arr = []
      // 3.准备一个小数组--pages(最大长度为8)
      let minArr = []
      // 4.遍历categorys得到处理后的二维数组catagorysArr
      categorys.forEach(data => {
        // 如果当前小数组(pages)已经满了, 创建一个新的
        if (minArr.length === 8) {
          minArr = []
        }
        // 将空的小数组(pages)保存到大数组(categorysArr)中
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        // 将当前分类信息保存到小数组(pages)中
        minArr.push(data)
      })
      return arr
    }
  },
  watch: {
    categorys (value) {
      // 这里不要使用setTimeOut(fn, 0),虽然可以实现效果, 但是语义不准确,不符合规范
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        })
      })
    }
  },
  mounted () {
    // 也可不引入mapAction、在methods中定义直接使用
    // this.$store.dispatch('getCategorys')
    this.getCategorys()
    this.getShops()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 由于swiper-pagination-bullet的问题，这里不要加scope
@import "../../../node_modules/swiper/dist/css/swiper.min.css"
@import "~common/stylus/mixins.styl"
.icon-sousuo
  sc(25px, #fff)
.home_nav
  bottom-border-1px($bc)
  margin-top 45px
  height 200px
  background #fff
  .swiper-container
    wh(100%, 100%)
    .swiper-wrapper
      wh(100%, 100%)
      .swiper-slide
        flex-j(center)
        align-item flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              wh(50px, 50px)
          span
            display block
            width 100%
            text-align center
            sc(12px, #666)
    .swiper-pagination
      >.swiper-pagination-bullet-active
        background $green
.home_shop_list
  top-border-1px($bc)
  background #fff
  .shop_header
    padding 10px 10px 0
    .shop_icon
      margin-left 5px
      color #999
    .shop_header_title
      sc(14px, #999)
      line-height 20px
</style>
