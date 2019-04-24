 <template>
  <div class="rating_page">
        <HeaderTop title="会员中心"></HeaderTop>
        <section v-if="userInfo">
            <p class="buy_for">为账户 <span>{{userInfo.username}}</span> 购买会员</p>
            <section class="vip_prerogative">
                <router-link to="/vipDescription" class="header_style">
                    <span class="header_left">会员特权</span>
                    <section class="header_right">
                        <span>会员说明</span>
                        <svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </section>
                </router-link>
                <section class="vip_detail">
                    <div class="vip_detail_left">
                        <img src="../../common/imgs/sheng.jpeg" height="80" width="70">
                    </div>
                    <div class="vip_detail_right">
                        <h4>减免配送费</h4>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送专享</p>
                    </div>
                </section>
                <section class="vip_detail">
                    <div class="vip_detail_left">
                        <img src="../../common/imgs/jifen.jpeg" height="80" width="70">
                    </div>
                    <div class="vip_detail_right">
                        <h4>减免配送费</h4>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送专享</p>
                    </div>
                </section>
            </section>
            <section class="apply_vip">
                <header class="header_style">
                    <span class="header_left">开通会员</span>
                </header>
                <section class="apply_vip_buy">
                    <div class="apply_vip_buy_left">
                        <span>1个月</span>
                        <span> ¥20</span>
                    </div>
                    <div class="apply_vip_buy_right" @click="buyCart">购买</div>
                </section>
            </section>
            <router-link to="/vipUseCart" class="header_style common_style">
                <span class="header_left">兑换会员</span>
                <section class="header_right">
                    <span>使用卡号卡密</span>
                    <svg fill="#ccc">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                </section>
            </router-link>
            <router-link to="/vipInvoiceRecord" class="header_style common_style">
                <span class="header_left">购买记录</span>
                <section class="header_right">
                    <span>开发票</span>
                    <svg fill="#ccc">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                </section>
            </router-link>
        </section>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  components: {
    HeaderTop
  },
  methods: {
    ...mapMutations([
      'ORDER_SUCCESS', 'BUY_CART'
    ]),
    buyCart () {
      this.ORDER_SUCCESS({order_id: '399525134200981325'})
      this.BUY_CART(20)
      this.$router.push('/confirmOrder/payment')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl';
.rating_page
  width 100%
  background-color #fff
  padding-top 45px
.buy_for
  sc(20px, #666)
  line-height 40px
  padding-left 14px
  span
    font-weight bold
.vip_prerogative
  background-color #fff
  padding-left 14px
  margin-bottom 10px
  .vip_detail
    display flex
    border-bottom 1px solid #f5f5f5
    padding 16px 0
    .vip_detail_left
      margin-right 12px
      img
        wh(32px, 34px)
    .vip_detail_right
      h4
        sc(18px, #33)
        font-weight: normal
      p
        sc(14px, #999)
.apply_vip
  background-color #fff
  padding-left 14px
  margin-bottom 10px
  .apply_vip_buy
    flex-j()
    align-items center
    padding-right 14px
    font-size 14px
    line-height 52px
    .apply_vip_buy_left
      span:nth-of-type(2)
        font-weight bold
        color #f60
    .apply_vip_buy_right
      border 1px solid #f60
      border-radius 4px
      line-height 24px
      wh(52px, 24px)
      text-align center
      sc(12px, #f60)
.header_style
  flex-j()
  background-color #fff
  line-height 40px
  border-bottom 1px solid #f5f5f5
  padding-right 14px
  .header_left
    sc(14px, #333)
  .header_right
    display flex
    align-items center
    span
      sc(12px, #999)
      margin-right .2rem
    svg
      wh(10px, 10px)
.common_style
  padding 0 14px
  margin-bottom 10px
</style>
