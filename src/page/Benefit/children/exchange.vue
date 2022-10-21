 <template>
  <div class="page">
    <header-top title="兑换红包" />
    <form class="exchange_code">
      <input type="text" placeholder="请输入兑换码" v-model="exchangeCode" class="exchange_input">
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
        <div class="img_change_img">
          <img :src="captcha" >
          <div class="change_img" @click="getCaptcha">
          </div>
        </div>
      </section>
    </form>
    <div class="determine" @click="exchange" :class="{active: status}">兑换</div>
    <alert-tip v-if="showAlert"  @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {exChangeHongbao, getCaptcha} from '../../../api'

export default {
  data () {
    return {
      showAlert: false,
      alertText: '',
      exchangeCode: '',
      codeNumber: '',
      captcha: ''
    }
  },
  created () {
    this.getCaptcha()
  },
  computed: {
    ...mapState([
      'userInfo'
    ]),
    status: function () {
      let status = (/^\d+$/gi.test(this.exchangeCode)) && (/^\w{4}$/gi.test(this.codeNumber))
      return status
    }
  },
  methods: {
    // 获取一个新的图片验证码
    async getCaptcha () {
      let res = await getCaptcha()
      this.captcha = res.data
    },
    // 兑换红包
    async exchange () {
      if (this.status) {
        let res = await exChangeHongbao(this.userInfo.user_id, this.exchangeCode, this.codeNumber)
        // 不成功则弹出提示框
        if (res.message) {
          this.getCaptcha()
          this.showAlert = true
          this.alertText = res.message
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/mixins.styl"
.page
  padding-top: 45px
.determine
  background-color #ccc
  sc(14px, #fff)
  text-align center
  margin 0 14px
  line-height 36px
  border-radius 4px
  margin-top 14px
.active
  background-color #4cd964
.exchange_code
  margin-top 014px
  padding 0 10px
  .exchange_input
    width 100%
    sc(14px, #666)
    padding 12px 8px
    border-radius 3px
.captcha_code_container
  height 44px
  display flex
  margin-top 14px
  input
    sc(14px, #666)
    padding 8px
    border-radius 3px
    flex 3
  .img_change_img
    display flex
    align-items center
    flex 2
    margin-left 6px
    background-color #fff
    padding-left 4px
    border-radius 3px
    img
      wh(70px, 30px)
      margin-right 4px
    .change_img
      flex-j(center)
      flex-direction 'column'
      flex-wrap wrap
      width 40px
      p
        sc(11px, #666)
        &:nth-of-type(2)
          color #3b95e9
          margin-top 4px
</style>
