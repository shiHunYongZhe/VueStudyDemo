<template>
  <section class="loginContainer">
     <HeaderTop title="登录"></HeaderTop>
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">Mint外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <!-- <button @click.prevent="getCode" :class="{right_phone:rightPhone}" v-show="!computedTime">获取验证码</button>
                <button  @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button> -->
              <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" @click.prevent="getCode">{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_tip">
              温馨提示：未注册Mint外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model.lazy="name">
              </section>
              <section class="login_verification">
                <!-- <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd"> -->
                 <input :type="showPwd ? 'text' : 'password'" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="./images/captcha.svg" alt="captcha" @click="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
          <router-link to="/forget" class="login_submit">重置密码？</router-link>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {reqSendCode, reqSmsLogin, reqPwdLogin} from '../../api'
import axios from 'axios'
export default {
  data () {
    return {
      loginWay: true, // true代表短信登陆, false代表密码
      phone: '', // 手机号
      computeTime: 0, // 已发送时间
      showPwd: false, // 是否显示密码
      pwd: '', // 密码
      name: '', // 用户名
      code: '', // 短信验证码
      captcha: '', // 图形验证码
      alertText: '', // 提示文本
      alertShow: false // 是否显示警告框
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 异步获取短信验证码
    async getCode () {
      if (!this.computeTime) {
        // 启动倒计时
        this.computeTime = 60
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            this.showAlert('验证码已过期，请点击重新获取')
            clearInterval(this.intervalId)
          }
        }, 1000)
      }
      const result = await reqSendCode(this.phone)
      // 手机号验证失败
      if (result.code === 1) {
        this.showAlert(result.msg)
        // 停止计时
        if (this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
          this.intervalId = undefined
        }
      }
    },
    // 异步登录
    async login () {
      let result
      // 前台表单验证
      if (this.loginWay) { // 短信登陆
        const {phone, code} = this
        if (!this.rightPhone) {
          this.showAlert('手机号不正确')
          return
        } else if (!/^\d{6}$/.test(code)) {
          this.showAlert('验证必须是6位数字')
          return
        }
        // 发送ajax请求短信登陆
        result = await reqSmsLogin(phone, code)
      } else { // 密码登陆
        const {name, pwd, captcha} = this
        if (!this.name) {
          // 用户名必须指定
          this.showAlert('用户名必须指定')
          return
        } else if (!this.pwd) {
          // 密码必须指定
          this.showAlert('密码必须指定')
          return
        } else if (!this.captcha) {
          // 验证码必须指定
          this.showAlert('验证码必须指定')
          return
        }
        // 发送ajax请求密码登陆
        result = await reqPwdLogin({name, pwd, captcha})
      }

      // 停止计时
      if (this.computeTime) {
        this.computeTime = 0
        clearInterval(this.intervalId)
        this.intervalId = undefined
      }

      // 根据结果数据处理
      if (result.code === 0) {
        const user = result.data
        // 将user保存到vuex的state
        this.$store.dispatch('recordUser', user)
        // 去个人中心界面
        this.$router.push('/profile')
      } else {
        // 显示新的图片验证码
        this.getCaptcha()
        // 显示警告提示
        const msg = result.msg
        this.showAlert(msg)
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
    // 获取一个新的图片验证码
    getCaptcha () {
      // 现在没开通后台服务器，暂时用静态图片代替，下面的方法可使用外部api生成动态图片（测试已成功）
      // axios({
      //   method:"post",
      //   url:"http://route.showapi.com/26-4", 
      //   params: {
      //     // 这里使用https://www.showapi.com/的api，免费注册后可使用

      //     "showapi_appid": '', //这里需要改成自己的appid
      //     "showapi_sign": '',  //这里需要改成自己的应用的密钥secret
      //   }}).then(res => {
      //   this.$refs.captcha.src = res.data.showapi_res_body.img_path;
      // })
    }
  },
  components: {
    AlertTip,
    HeaderTop
  }
  // created() {
  //   this.getCaptcha()
  // }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    wh(100%, 100%)
    background #fff
    padding-top 45px
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          sc(40px, $green)
          font-weight bold
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            sc(14px, #333)
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color $green
              font-weight 700
              border-bottom 2px solid $green
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              wh(100%, 100%)
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font-size 14px
              font-family Arial
              &:focus
                border 1px solid $green
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
                sc(14px, #ccc)
                background transparent
                width 125px
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                wh(30px, 16px)
                sc(12px, #fff)
                line-height 16px
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                &.on
                  background $green
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_tip
              margin-top 12px
              sc(14px, #999)
              line-height 20px
              >a
                color $green
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 20px
            border-radius 4px
            background #4cd96f
            text-align center
            sc(16px, #fff)
            line-height 42px
            border 0
        .about_us
          display block
          margin-top 20px
          fs(12px, #999)
          text-align center
</style>
