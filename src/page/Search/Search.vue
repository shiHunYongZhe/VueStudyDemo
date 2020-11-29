<template>
  <section class="search">
    <header-top title="搜索" :isBack="false"/>
    <form class="search_form" @submit.prevent="search">
      <input type="text" placeholder="请输入商家名称" class="search_input" v-model="keyword" @input="checkInput">
      <input type="submit" class="search_submit" @click.prevent="searchTarget('')">
    </form>
    <section class="list" v-if="restaurantList.length">
      <h4 class="title_restaurant">商家</h4>
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
            <ul class="item_right_detail">
              <li v-for="activities in item.restaurant_activity" :key="activities.id">
                <span :style="{backgroundColor: '#' + activities.icon_color}" class="activities_icon">{{activities.icon_name}}</span>
                <span>{{activities.name}}</span>
                <span class="only_phone">(手机客户端专享)</span>
              </li>
            </ul>
          </section>
        </router-link>
      </ul>
    </section>
    <section class="search_history" v-if="searchHistory.length&&showHistory">
      <h4 class="title_restaurant">搜索历史</h4>
      <ul>
        <li v-for="(item, index) in searchHistory" :key="index" class="history_list">
          <span class="history_text ellipsis" @click="searchTarget(item)">{{item}}</span>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="delete_icon" @click="deleteHistory(index)">
            <line x1="8" y1="8" x2="18" y2="18" style="stroke:#999;stroke-width:3" />
            <line x1="18" y1="8" x2="8" y2="18" style="stroke:#999;stroke-width:3" />
          </svg>
        </li>
      </ul>
      <footer class="clear_history" @click="clearAllHistory">清空搜索历史</footer>
    </section>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import {searchRestaurant} from '../../api'
import {getStore, setStore} from '../../api/utils'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      geohash: '', // home页面传递过来的地址信息
      keyword: '',
      restaurantList: [], // 搜索返回的结果
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      showHistory: true, // 是否显示历史记录，只有在返回搜索结果后隐藏
      searchHistory: [], // 搜索历史记录
      noSearchShops: false // 搜索结果为空时显示
    }
  },
  methods: {
    // 点击提交按钮，搜索结果并显示，同时将搜索内容存入历史记录
    async searchTarget (historyValue) {
      if (historyValue) {
        this.keyword = historyValue
      } else if (!this.keyword) {
        return
      }
      // 隐藏历史记录
      this.showHistory = false
      // 获取搜索结果
      this.restaurantList = await searchRestaurant(this.geohash, this.keyword)
      this.noSearchShops = !this.restaurantList.length
      /**
       * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
       * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
       */
      let history = getStore('searchHistory')
      if (history) {
        let checkrepeat = false
        this.searchHistory = JSON.parse(history)
        this.searchHistory.forEach(item => {
          if (item === this.keyword) {
            checkrepeat = true
          }
        })
        if (!checkrepeat) {
          this.searchHistory.push(this.keyword)
        }
      } else {
        this.searchHistory.push(this.keyword)
      }
      setStore('searchHistory', this.searchHistory)
    },
    search () {
      const keyword = this.keyword.trim()
      if (keyword) {
        this.$store.dispatch('searchShops', keyword)
      }
    },
    // 搜索结束后，删除搜索内容直到为空时清空搜索结果，并显示历史记录
    checkInput () {
      if (this.keyword === '') {
        this.showHistory = true // 显示历史记录
        this.restaurantList = [] // 清空搜索结果
        this.noSearchShops = false // 隐藏搜索为空提示
      }
    },
    // 点击删除按钮，删除当前历史记录
    deleteHistory (index) {
      this.searchHistory.splice(index, 1)
      setStore('searchHistory', this.searchHistory)
    },
    // 清除所有历史记录
    clearAllHistory () {
      this.searchHistory = []
      setStore('searchHistory', this.searchHistory)
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
    this.geohash = this.$route.query.geohash
    // 获取搜索历史记录
    if (getStore('searchHistory')) {
      this.searchHistory = JSON.parse(getStore('searchHistory'))
    }
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
          .item_right_detail
            margin-top 6px
            li
              font-size 0
              span
                font-size 12px
                vertical-align middle
                display inline-block
                margin-bottom 4px
              .activities_icon
                sc(12px, #fff)
                font-weight bold
                padding 2px
                border-radius 4px
                margin-right 3px
              .only_phone
                color #FF6000
  .search_history
    .history_list
      background-color #fff
      border-bottom 0.025rem solid $bc
      font(16px, 42px)
      padding 0 8px
      display flex
      justify-content space-between
      align-items center
      .history_text
        text-align left
        display inline-block
        width 80%
      .delete_icon
        wh(20px, 20px)
    .clear_history
      background-color #fff
      color $blue
      font(16px, 40px)
      font-weight bold
      text-align center
  .search_none
    margin 0 auto
    color #333
    text-align center
    padding-top 5rem
</style>
