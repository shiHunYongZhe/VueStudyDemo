<template>
  <div class="forgetContainer">
    <HeaderTop title="重置密码"></HeaderTop>
    <form class="resetPwdForm">
      <section class="login_message">
        <input type="text" placeholder="账号" name="phone" v-model="phoneNumber">
      </section>
      <section class="login_message">
        <input type="text" placeholder="请输入新密码" name="newPassWord" v-model="newPassWord">
      </section>
      <section class="login_message">
        <input type="text" placeholder="请确认密码" name="confirmPassWord" v-model="confirmPassWord">
      </section>
      <section class="login_message">
        <input type="text" placeholder="验证码" maxlength="11" v-model="captcha">
        <img src="" alt="captcha" class="get_verification" @click="getCode" ref="captcha">
      </section>
      <div class="modify" @click="resetButton">确认修改</div>
    </form>
    <AlertTip v-if="showAlert"  @closeTip="closeTip" :alertText="alertText"></AlertTip>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import { clearInterval } from 'timers'
import { reqSendCode, changePassword } from '../../api'

export default {
  data () {
    return {
      phoneNumber: null, // 电话号码
      newPassWord: null, // 新密码
      oldPassWord: null, // 旧密码
      confirmPassWord: null, // 确认密码
      captchaCodeImg: null, // 验证码地址
      mobileCode: null, // 短信验证码
      computedTime: 0, // 倒数记时
      showAlert: false, // 显示提示组件
      alertText: null, // 提示的内容
      accountType: 'mobile', // 注册方式
      captcha: ''
    }
  },
  methods: {
    async getCode () {
      if (!this.computedTime) {
        this.computedTime = 60
        this.interValId = setInterval(() => {
          this.computedTime--
          if (this.computedTime === 0) {
            clearInterval(this.interValId)
          }
        }, 1000)
      }
      // 发送ajax请求获取数据（向指定手机号发送验证码短信）
      const result = await reqSendCode(this.phone)
      if (result.code === 1) {
        this.showAlert(result.msg)
        if (this.computedTime) {
          this.computedTime = 0
          clearInterval(this.interValId)
          this.interValId = undefined
        }
      }
    },
    // 重置密码
    async resetButton () {
      if (!this.phoneNumber && !this.inputPhoneReg) {
        this.showAlert('请输入正确的账号')
      } else if (!this.oldPassWord) {
        this.showAlert('请输入旧密码')
      } else if (!this.newPassWord) {
        this.showAlert('请输入新密码')
      } else if (!this.confirmPassWord) {
        this.showAlert('请输入确认密码')
      } else if (this.newPassWord !== this.confirmPassWord) {
        this.showAlert('两次输入的密码不一致')
      } else if (!this.mobileCode) {
        this.showAlert('请输验证码')
      }
      // 发送ajax请求（修改密码）
      const res = await changePassword()(this.phoneNumber, this.oldPassWord, this.newPassWord, this.confirmPassWord, this.mobileCode)
      if (res.message) {
        this.showAlert(res.message)
        this.getCode()
      } else {
        this.showAlert('密码修改成功')
      }
    },
    closeTip () {
      this.showAlert = false
    }
  },
  components: {
    HeaderTop,
    AlertTip
  },
  computed: {
    inputPhoneReg () {
      return /^1\d{10}$/gi.test(this.phoneNumber)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/mixins.styl'
.forgetContainer
  margin-top 45px
  .resetPwdForm
    background-color #fff
    padding 6px 8px
    input
      wh(100%, 100%)
      padding-left 10px
      box-sizing border-box
      border 1px solid #ddd
      border-radius 4px
      outline 0
      font-size 14px
      font-weight 400
      font-family Arial, Helvetica, sans-serif
    .login_message
      position relative
      margin-top 16px
      height 48px
      font-size 14px
      background #fff
      .get_verification
        position absolute
        top 50%
        right 10px
        transform translateY(-50%)
        border 0
        background transparent
        &.right_phone
          color black
.modify
  display block
  wh(100%, 42px)
  margin-top 30px
  border-radius 4px
  background #4cd96f
  sc(16px, #fff)
  text-align center
  line-height 42px
  border 0
</style>
