 <template>
  <div class="rating_page">
        <HeaderTop title="积分商场"></HeaderTop>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl';
.rating_page
  allover()
  background #fff
  padding-top 45px
  p, span
    font-family Helvetica Neue,Tahoma,Arial
.buy_for
   sc(12px, #666)
  line-height 40px
  padding-left 14px
  span
    font-weight bold
.vip_prerogative
  background-color #fff
  padding-left 14px
  margin-bottom 10px
  .vip_detail
    display: flex
    border-bottom 1px solid #f5f5f5
    padding 16px 0
    .vip_detail_left
      margin-right 12px
      img
        wh(32px, 36px)
    .vip_detail_right
      h4
        sc(14px, #333)
        font-weight: normal;
      p
        sc(10px, #999)
.apply_vip
  background-color #fff
  padding-left 14px
  margin-bottom 10px
  .apply_vip_buy
    flex-j()
    align-items center
    padding-right 14px;
    font-size 14px;
    line-height 52px;
    .apply_vip_buy_left
      span:nth-of-type(2)
        font-weight bold
        color #f60
    .apply_vip_buy_right
      border 0.025rem solid #f60
      border-radius 0.2rem
      line-height 24px;
      wh(52px, 24px)
      text-align: center;
      sc(12px, #f60)
.header_style
  flex-j()
  background-color: #fff;
  line-height: 2rem;
  border-bottom: 1px solid #f5f5f5;
  padding-right: 14px;
  .header_left
    sc(14px, #333)
  .header_right
    display flex
    align-items center
    span
    sc(12px, #999)
      margin-right 4px
    svg
      wh(10px, 10px)
.common_style
  padding 0 14px
  margin-bottom 10px
.router-slid-enter-active, .router-slid-leave-active
  transition all .4s
.router-slid-enter,
.router-slid-leave-active
  transform translate3d(2rem, 0, 0)
  opacity 0
</style>
