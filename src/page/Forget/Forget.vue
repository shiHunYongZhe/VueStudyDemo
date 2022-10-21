<template>
  <div class="forgetContainer">
    <header-top title="重置密码" />
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
        <img class="get_verification" src="" alt="captcha" @click="getCaptcha" ref="captcha">
      </section>
      <div class="modify" @click="resetButton">确认修改</div>
    </form>
    <alert-tip v-show="alertShow"  @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import { getCaptcha, changePassword } from '../../api'

export default {
  data () {
    return {
      phoneNumber: null, // 电话号码
      newPassWord: null, // 新密码
      confirmPassWord: null, // 确认密码
      alertShow: false, // 显示提示组件
      alertText: null, // 提示的内容
      accountType: 'mobile', // 注册方式
      captcha: ''
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
    // 获取一个新的图片验证码
    async getCaptcha () {
      let res = await getCaptcha()
      this.$refs.captcha.src = res.data
    },
    // 重置密码
    async resetButton () {
      if (!this.phoneNumber && !this.inputPhoneReg) {
        this.showAlert('请输入正确的账号')
      } else if (!this.newPassWord) {
        this.showAlert('请输入新密码')
      } else if (!this.confirmPassWord) {
        this.showAlert('请输入确认密码')
      } else if (this.newPassWord !== this.confirmPassWord) {
        this.showAlert('两次输入的密码不一致')
      } else if (!this.captcha) {
        this.showAlert('请输验证码')
      }
      // 发送ajax请求（修改密码）
      const res = await changePassword()(this.phoneNumber, this.newPassWord, this.confirmPassWord, this.captcha)
      if (res.message) {
        this.showAlert(res.message)
        this.getCode()
      } else {
        this.showAlert('密码修改成功')
      }
    },
    showAlert (alertText) {
      this.alertShow = true
      this.alertText = alertText
    },
    // 关闭警告框
    closeTip () {
      this.alertShow = false
      this.alertText = ''
    },
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
        right 0px
        transform translateY(-50%)
        border 0
        background transparent
        width: 125px;
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
