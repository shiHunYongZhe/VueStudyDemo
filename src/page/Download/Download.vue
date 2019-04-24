 <template>
  <div class="download_page">
        <HeaderTop title="下载"></HeaderTop>
        <section class="dowload_container">
            <img src='../../common/imgs/elmlogo.jpeg' class="logo_img">
            <p>下载饿了么APP</p>
            <div class="determine" @click="download">下载</div>
        </section>
        <AlertTip :alertText="alertText" v-show="showAlert" @closeTip="closeTip"/>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import AlertTip from '../../components/AlertTip/AlertTip.vue'

export default {
  data () {
    return {
      system: null,
      showAlert: false,
      alertText: null
    }
  },
  created () {
    // 判断系统
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    if (isAndroid) {
      this.system = 'Android'
    } else if (isIOS) {
      this.system = 'IOS'
    } else {
      this.system = 'pc'
    }
  },
  components: {
    HeaderTop,
    AlertTip
  },
  methods: {
    download () {
      // 如果是ios用户则提示，否则直接下载
      if (this.system === 'IOS') {
        this.showAlert = true
        this.alertText = 'IOS用户请前往AppStore下载'
      } else {
        try {
          let elemIF = document.createElement('iframe')
          elemIF.src = 'http://cangdu.org/files/elm.apk'
          elemIF.style.display = 'none'
          document.body.appendChild(elemIF)
        } catch (e) {
          alert('下载失败')
        }
      }
    },
    closeTip () {
      this.showAlert = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl'
.download_page
  width 100%
  background-color #fff
  z-index 202
  padding-top 45px
  p, span
    font-family Helvetica Neue,Tahoma,Arial
.dowload_container
  text-align center
  .logo_img
    wh(180px, 180px)
    border-radius 20px
    margin-top 20px
    p
      sc(16px, #666)
      margin-bottom 20px
  .determine
    background-color $green
    sc(14px, #fff)
    text-align center
    margin: 0 20px;
    line-height 36px
    border-radius 4px
    margin-top 10px
</style>
