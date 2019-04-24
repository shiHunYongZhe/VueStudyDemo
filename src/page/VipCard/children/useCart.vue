 <template>
  <div class="page_container">
        <HeaderTop title="兑换会员"></HeaderTop>
        <p class="buy_for">成功兑换后将关联到当前帐号： <span>{{userInfo.username}}</span></p>
        <form class="form_style">
          <input type="text" name="cartNumber" maxlength="10" v-model="cartNumber" placeholder="请输入10位卡号">
          <input type="text" name="passWord" maxlength="6" v-model="passWord" placeholder="请输入6位卡密">
        </form>
        <p class="determine" :class="{could_pay: couldPay}" @click="confrimPay">兑换</p>
        <footer class="Binding">
       <h3>——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：<b>30次</b>减免配送费。</p>
      <p>季卡：<b>90次</b>减免配送费。</p>
      <p>年卡：<b>360</b>次减免配送费。</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </footer>
      <AlertTip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></AlertTip>
    </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop/HeaderTop.vue'
import AlertTip from '../../../components/AlertTip/AlertTip.vue'
import {mapState} from 'vuex'
import {vipCart} from '../../../api'

export default {
  data () {
    return {
      cartNumber: null,
      passWord: null,
      showAlert: false,
      alertText: null
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ]),
    couldPay () {
      return (/^\d{10}$/.test(this.cartNumber)) && (/^\d{6}$/.test(this.passWord))
    }
  },
  components: {
    HeaderTop,
    AlertTip
  },
  methods: {
    async confrimPay () {
      if (this.couldPay) {
        let res = await vipCart(this.userInfo.idthis.cartNumber, this.passWord)
        if (res.message) {
          this.showAlert = true
          this.alertText = res.message
        } else if (res.name) {
          this.showAlert = true
          this.alertText = res.name
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl';
  .page_container
    padding-top 45px
    .buy_for
      sc(12px, #666)
      line-height 40px
      padding-left 14px
      span
        font-weight: bold;
    .form_style
      display flex
      flex-direction column
      input
        border-bottom 1px solid #f5f5f5
        height 40px
        sc(13px, #999)
        padding-left 14px
    .determine
      background-color #ccc
      sc(14px, #fff)
      text-align center
      margin 0 14px
      line-height 36px
      border-radius 4px
      margin-top 14px
      font-weight bold
    .could_pay
      background-color #4cd964
    .Binding
      margin-top 20px
      h3
        text-align center
        font-weight: normal
        sc(13px, #aaa)
        margin-bottom: 12px
      p, b
        sc(10px, #aaa);
        line-height: 16px;
        p
        padding-left: 40px
</style>
