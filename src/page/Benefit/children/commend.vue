 <template>
  <div class="page">
    <header-top title="推荐有奖" />
    <section class="activity_banner">
      <img src="../../../common/imgs/activity.png">
    </section>
    <section class="invite_firend">
      <div class="invite_firend_style">
        <img src="../../../common/imgs/weixin.png" @click="fenxiang">
          <p>邀请微信好友</p>
      </div>
      <div class="invite_firend_style">
        <img src="../../../common/imgs/qq.png" @click="fenxiang">
        <p>邀请QQ好友</p>
      </div>
      <div class="invite_firend_style">
        <img src="../../../common/imgs/fenxiang.png" @click="fenxiang">
        <p>面对面邀请</p>
      </div>
    </section>
    <section class="invite_num">
      <div class="invite_num_style">
        <p>累计收益</p>
        <p><span>0</span>元</p>
      </div>
      <div class="invite_num_style invite_people">
        <p>成功邀请</p>
        <p><span>0</span>人</p>
      </div>
    </section>
    <p class="income_detail">-收益明细-</p>
    <section class="incom_tips">
      <img src="../../../common/imgs/qianbao.png">
      <p>还不赶紧去邀请好友</p>
    </section>
    <alert-tip v-if="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      showAlert: false,
      alertText: null
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    fenxiang () {
      this.showAlert = true
      this.alertText = '请在饿了么APP中打开'
    },
    closeTip () {
      this.showAlert = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl'
.page
  margin-top 45px
.activity_banner
  img
    wh(100%, 200px)
.invite_firend
  display flex
  padding 20px 0
  background-color: #fff
  .invite_firend_style
    flex 1
    text-align center
    img
      wh(50px, 50px)
    p
      sc(10px, #333)
.invite_num
  display flex
  margin-top 20px
  sc(10px, #666)
  .invite_num_style
    flex 1
    text-align center
    p
      color #666
    span
      sc(16px, #ff5633)
      font-weight bold
  .invite_people
    border-left 1px solid #ddd
    span
      sc(16px, #666)
      font-weight bold
.income_detail
  text-align center
  margin-top 20px
  sc(10px, #666)
.incom_tips
  text-align center
  margin-top 20px
  img
    wh(26px, 32px)
  p
    sc(10px, #999)
</style>
