<template>
  <div class="profileContainer">
    <HeaderTop title="我的" :isBack="false"></HeaderTop>
    <section class="profile_number">
      <router-link :to="userInfo._id ? '/userinfo' : '/login'" class="profile_link">
        <div class="profile_image">
          <i class="iconfont icon-yonghuming"></i>
        </div>
        <div class="user_info">
          <p class="user_info_top" v-if="!userInfo.phone">{{userInfo.name || '登录 / 注册'}}</p>
          <p>
            <span class="user_icon">
              <i class="iconfont icon-msnui-tel"></i>
            </span>
            <span class="icon_mobile_number">
              {{userInfo.phone || '暂无绑定手机号'}}
            </span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-previewright"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <router-link to="/balance" tag="li" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </router-link>
        <router-link to="/benefit" tag="li" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </router-link>
        <router-link to="/points" tag="li" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </router-link>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <router-link to="/order" class="my_order">
        <span>
          <i class="iconfont icon-dingdan"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-previewright"></i>
          </span>
        </div>
      </router-link>
      <router-link to="/onlineShop" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-previewright"></i>
          </span>
        </div>
      </router-link>
      <router-link to="/vipcard" class="my_order">
        <span>
          <i class="iconfont icon-viptehuishiduan"></i>
        </span>
        <div class="my_order_div">
          <span>Mint外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-previewright"></i>
          </span>
        </div>
      </router-link>
    </section>
    <section class="profile_my_order border-1px">
      <router-link to="/service" class="my_order">
        <span>
          <i class="iconfont icon-lianxikefu"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-previewright"></i>
          </span>
        </div>
      </router-link>
      <router-link to="/download" class="my_order">
        <span>
          <i class="iconfont icon-lianxikefu"></i>
        </span>
        <div class="my_order_div">
          <span>下载饿了么APP</span>
          <span class="my_order_icon">
            <i class="iconfont icon-previewright"></i>
          </span>
        </div>
      </router-link>
    </section>
    <section class="profile_my_order border-1px" v-if="userInfo._id">
      <mt-button type="danger" style="width: 100%" @click="logout">退出登录</mt-button>
    </section>
    <transition name="route-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {MessageBox, Toast} from 'mint-ui'
import {mapState} from 'vuex'
export default {
  methods: {
    logout () {
      MessageBox.confirm('确认退出吗?').then(() => {
        this.$store.dispatch('logout')
        Toast('退出成功')
      }, () => {
        console.log('取消登录')
      })
    }
  },
  components: {
    HeaderTop,
    AlertTip
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/mixins.styl'
.profileContainer
  width(100%)
  overflow hidden
  .profile_number
    margin-top 45px
    .profile_link
      clearFix()
      position relative
      display block
      background $green
      padding 20px 10px
      .profile_image
        float left
        wh(60px, 60px)
        border-radius(50%)
        overflow hidden
        vertical-align top
        .icon-yonghuming
          background $bc
          font-size 62px
      .user_info
        float left
        margin-top 8px
        margin-left 15px
        p
          font-weight 700
          sc(18px, #fff)
          &.user_info_top
            text-align left
            padding-bottom 8px
          .user_icon
            display inline-block
            wh(20px, 20px)
            .icon-msnui-tel
              sc(24px, #fff)
              vertical-align text-top
      .arrow
        wh(24px, 24px)
        position absolute
        right 15px
        top 40%
        .icon-previewright
          sc(16px, #fff)
  .profile_info_data
    bottom-border-1px($bc)
    width 100%
    background #fff
    overflow hidden
    .info_data_list
      clearFix()
      .info_data_link
        float left
        width 33%
        text-align center
        border-right 1px solid #f1f1f1
        .info_data_top
          display block
          width 100%
          sc(14px, #333)
          padding 15px 5px 10px
          span
            display inline-block
            sc(30px, #f90)
            font-weight 700
            line-height 30px
        .info_data_bottom
          display inline-block
          sc(14px, #666)
          font-weight 400
          padding-bottom 10px
        &:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        &:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
  .profile_my_order
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .my_order
      display flex
      align-items center
      padding-left 15px
      >span
        display flex
        align-items center
        wh(20px, 20px)
        >.iconfont
          margin-left -10px
          font-size 30px
        .icon-dingdan
          color $green
        .icon-jifen
          color #ff5f3e
        .icon-viptehuishiduan
          color #f90
        .icon-lianxikefu
          color $green
      .my_order_div
        width 100%
        border-bottom 1px solid #f1f1f1
        padding 18px 10px 18px 0
        sc(16px, #333)
        flex-j()
        span
          display block
        .my_order_icon
          wh(10px, 10px)
          .icon-previewright
            sc(10px, #bbb)
.router-slid-enter-active, .router-slid-leave-active {
  transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
