 <template>
  <div class="page">
    <HeaderTop title="我的余额"></HeaderTop>
    <section class="content_container">
      <section class="content">
        <header class="content_header">
          <span class="content_title_style">当前余额</span>
          <section class="contetn_description">
            <img src="../../common/imgs/description.png" height="24" width="24">
            <router-link to="/balanceDetail" class="content_title_style">余额说明</router-link>
          </section>
        </header>
        <p class="content_num">
          <span>0.00</span>
          <span>元</span>
        </p>
        <div class="promit_button">提现</div>
      </section>
    </section>
    <p class="deal_detail">交易明细</p>
    <div class="no_log">
        <img src="../../common/imgs/no-log.png">
        <p>暂无明细记录</p>
    </div>
    <AlertTip v-show="showAlert" @closeTip="showAlert = false" :alertText="alertText"></AlertTip>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import AlertTip from '../../components/AlertTip/AlertTip.vue'

export default {
  data () {
    return {
      showAlert: false,
      alertText: null
    }
  },
  components: {
    HeaderTop,
    AlertTip
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl'
.page
  padding-top 45px
.content_container
  padding .3rem
  background-color $green
  .content
    padding 10px
    background-color #fff
    border-radius .15rem
    .content_header
      flex-j()
      font-size 14px
      .contetn_description
        display flex
        align-items center
        img
          wh(14px, 14px)
          margin-right 8px
        .content_title_style
          color $green
      .content_title_style
        color #666
    .content_num
      span:nth-of-type(1)
        sc(36px, #333)
      span:nth-of-type(2)
        sc(20px, #333)
    .promit_button
      wh(100%, 40px)
      sc(16px, #fff)
      border-radius 3px
      line-height: 40px
      margin-top 24px
      text-align center
      background-color #ccc
.deal_detail
  text-align left
  sc(14px, #999)
  line-height 40px
  padding-left 10px
.no_log
  text-align center
  margin-top 20px
  img
    wh(160px, 100px)
  p
    margin-top 10px
    sc(14px, #666)
</style>
