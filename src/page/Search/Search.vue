<template>
  <section class="search">
    <HeaderTop title="搜索" v-bind:isBack="false"/>
    <form class="search_form" @submit.prevent="search">
      <input type="text" placeholder="请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li" v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img" alt="">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p><span>{{item.name}}</span></p>
              <p>月售 {{item.month_sales || item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee || item.float_minimun_order_amount}}元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      keyword: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      noSearchShops: false
    }
  },
  methods: {
    search () {
      const keyword = this.keyword.trim()
      if (keyword) {
        this.$store.dispatch('searchShops', keyword)
      }
    }
  },
  watch: {
    searchShops (value) {
      if (!value.length) {
        this.noSearchShops = true
      } else {
        this.noSearchShops = false
      }
    }
  },
  components: {
    HeaderTop
  },
  computed: {
    ...mapState(['searchShops'])
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl'
.search
  wh(100%, 100%)
  overflow hidden
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 80%
        box-sizing border-box
        border 4px solid #f2f2f2
        sc(14px, #333)
        background-color #f2f2f2
      &.search_submit
        float right
        width 20%
        box-sizing border-box
        border 4px solid $green
        sc(16px, #fff)
        background-color $green
  .list
    .list_container
      background-color #fff
      .list_li
        flex-j(center)
        padding 10px
        border-bottom 1px solid $bd
        .item_left
          margin-right 10px
          .restaurant_img
            wh(50px, 50px)
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0
  .search_none
    margin 0 auto
    color #333
    background-color #fff
    text-align #fff
    margin-top .125rem
</style>
