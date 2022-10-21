<template>
  <div class="city_container">
    <header-top :title="cityname">
      <router-link to="/city" slot="right" class="change_city">切换城市</router-link>
    </header-top>
    <form class="city_form" v-on:submit.prevent>
      <div>
        <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputVaule'>
      </div>
      <div>
        <input type="submit" name="submit" class="city_submit input_style" @click='postpois' value="提交">
      </div>
    </form>
    <header v-if="historytitle" class="pois_search_history">
      搜索历史
    </header>
    <ul class="getpois_ul">
      <li v-for="(item, index) in placelist" @click='nextpage(index, item.name)' :key="item.name">
        <h4 class="pois_name ellipsis">{{item.name}}</h4>
        <p class="pois_address ellipsis">{{item.address}}</p>
      </li>
    </ul>
    <footer v-if="historytitle && placelist.length" class="clear_all_history" @click="clearAll">清空所有</footer>
    <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import {getStore, setStore, removeStore} from '../../../api/utils'

export default {
  data () {
    return {
      inputVaule: '', // 搜索地址
      cityid: '', // 当前城市id
      cityname: '', // 当前城市名字
      placelist: [], // 搜索城市列表
      placeHistory: [{"name":"仲恺路[公交站]","address":"11路,811路,968路","latitude":23.104531,"longitude":113.282063,"geohash":"23.104531,113.282063"},{"name":"仲恺农业工程学院(白云校区)","address":"广东省广州市白云区广新路388号","latitude":23.370824,"longitude":113.445463,"geohash":"23.370824,113.445463"}], // 历史搜索记录
      historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
      placeNone: false// 搜索无结果，显示提示信息
    }
  },

  mounted () {
    this.cityid = this.$route.params.cityid
    setStore('placeHistory', this.placeHistory)
    this.initData()
  },

  methods: {
    initData () {
      // 获取搜索历史记录
      if (getStore('placeHistory')) {
        this.placelist = JSON.parse(getStore('placeHistory'))
      } else {
        this.placelist = []
      }
    },
    // 发送搜索信息inputVaule
    postpois () {
      // 输入值不为空时才发送信息
      if (this.inputVaule) {
          this.historytitle = false
          this.placelist = this.inputVaule
      }
    },
    /**
      * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
      * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
      */
    // 返回数据，正式时nextpage中所有的name换成geohash来获取更具体的位置
    // {address: "广东省广州市黄埔区金碧路127号", city: "广东省", geohash: "23.04845,113.52003", latitude: "23.04845",name
    // :"黄埔区广州集装箱码头有限公司生活大院"}
    // }
    nextpage (index, name) {
      let history = getStore('placeHistory')
      let choosePlace = this.placelist[index]
      if (history) {
        let checkrepeat = false
        this.placeHistory = JSON.parse(history)
        this.placeHistory.forEach(item => {
          if (item.name === name) {
            checkrepeat = true
          }
        })
        if (!checkrepeat) {
          this.placeHistory.push(choosePlace)
        }
      } else {
        this.placeHistory.push(choosePlace)
      }
      setStore('placeHistory', this.placeHistory)
      this.$router.push({path: '/home', query: {name}})
    },
    clearAll () {
      removeStore('placeHistory')
      this.initData()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixins.styl"
.city_container
  padding-top: 55px
  .city_form
    background-color #fff
    border-top 1px solid $bc
    border-bottom 1px solid $bc
    padding-top 10px
    div
      width 90%
      margin 0 auto
      text-align center
      .input_style
        border-radius 2px
        margin-bottom 10px
        wh(100%, 28px)
      .city_input
        border: 1px solid $bc
        padding: 0 6px
        sc(14px, #333)
      .city_submit
        background-color: $green
        sc(14px, #fff)
  .pois_search_history
    text-align left
    border-top 1px solid $bc
    border-bottom 1px solid $bc
    padding-left 10px
    font(12px, 18px)
  .getpois_ul
    background-color: #fff
    border-top 1px solid $bc
    li
      text-align left
      margin: 0 auto
      padding-top: 13px
      border-bottom: 1px solid $bc
      .pois_name
        margin: 0 auto 7px
        width: 90%
        sc(16px, #333)
      .pois_address
        width: 90%
        margin: 0 auto 11px
        sc(12px, #999)
  .search_none_place
    margin 0 auto
    font(13px, 34px)
    color #333
    background-color #fff
    text-indent 10px
  .clear_all_history
    sc(14px, #666)
    text-align center
    line-height 40px
    background-color #fff
</style>
