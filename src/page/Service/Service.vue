<template>
  <div class="rating_page">
    <HeaderTop title="服务中心"></HeaderTop>
    <section class="service_connect">
      <a href="https://ecs-im.ele.me/" class="service_left">
        <svg viewBox="0 0 46 46" id="human" width="100%" height="100%">
          <path
            fill="#ff7b52"
            d="M33.291 37.774c-.25.097-.504.175-.765.233-6.427 1.444-5.954-3.968-6-3.953 10.457-5.053 10.348-13.466 10-16.216-16.15-.041-22.943-7.063-22.943-7.063s-.176 1.733-2.933 4.996c-2.756 3.262-5.236 4.09-5.132 4.113.54 13.9 12.246 14.242 12.246 14.242-.762 4.662-4.357 4.33-4.357 4.33s-6.38.213-11.173-7.446c-.85-1.359-1.02-2.864-1.166-4.579-.217-2.542.14-4.643.312-7.2.271-4.064.96-6.269.96-6.269S7.13 0 21.4 0s17.828 12.508 17.828 12.508l-.035.074c.533.763.984 1.997 1.356 3.36A3.483 3.483 0 0 1 45 19.281v7.257a3.484 3.484 0 0 1-3.325 3.472c-2.009 4.537-6.657 12.185-15.241 12.457C26.023 44.485 24.269 46 22.168 46c-2.407 0-4.357-1.988-4.357-4.44 0-2.453 1.95-4.44 4.357-4.44 1.955 0 3.609 1.311 4.16 3.118 1.447.13 4.044-.094 6.963-2.464zM18.216 27.018s.99 3.08 3.705 3.08 3.807-1.875 3.807-2.906c.467-1.135 1.348-.541 1.482-.071.134.47-.763 4.67-5.24 4.67s-5.205-4.358-5.205-4.358.033-.97.702-.97c.669 0 .749.555.749.555zm10.052-2.332c.963 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664zm-12.723 0c.962 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664z"
          ></path>
        </svg>
        <span>在线客服</span>
      </a>
      <a href="tel:10105757" class="service_right">
        <svg viewBox="0 0 46 46" id="phone" width="100%" height="100%">
          <path
            fill="#6ac20b"
            d="M15.433 30.568c9.342 9.342 17.708 12.15 18.871 12.316 1.163.167 3.07.542 5.837-2.225 3.24-3.24 3.566-4.94 1.783-6.724-1.783-1.783-6.212-4.48-7.416-5.176-1.206-.696-2.228-.472-3.097.133-.868.605-1.87 1.375-2.798 2.047-.927.671-2.087.955-3.332.167-1.245-.79-3.35-2.27-5.735-4.652-2.384-2.384-3.863-4.49-4.651-5.735-.789-1.245-.505-2.405.167-3.332.671-.928 1.441-1.93 2.046-2.798.605-.869.828-1.89.134-3.097-.696-1.204-3.394-5.633-5.177-7.416-1.783-1.783-3.484-1.457-6.724 1.783-2.766 2.766-2.391 4.674-2.226 5.837.167 1.164 2.976 9.53 12.318 18.872"
          ></path>
        </svg>
        <span>在线客服</span>
      </a>
    </section>
    <section class="profile_my_order border-1px" v-if="question">
      <h4 class="qustion_header">热门问题</h4>
      <ul id="scroll_section">
          <a v-for="(item, index) in questionTitle" :key="index" tag="li" class="my_order" @click="toQuestionDetail(item, index)">
            <div class="my_order_div">
              <span>{{item}}</span>
            </div>
              <span class="my_order_icon">
                <i class="iconfont icon-previewright"></i>
              </span>
          </a>
      </ul>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState, mapMutations} from 'vuex'
// import {reqquestion} from '../../api'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      questionTitle: [], // 问题标题
      questionDetail: [] // 问题详情
    }
  },
  components: {
    HeaderTop
  },
  mounted () {
    this.initData()
  },
  computed: {
    ...mapState(['question'])
  },
  methods: {
    ...mapMutations(['SAVE_QUESTION']),
    initData () {
      // this.question = await reqquestion()
      Object.keys(this.question).forEach(item => {
        let avoidRepeat = false
        this.questionTitle.forEach((insertItem) => {
          // 防止重复的数据，后台返回的数据有些是重复的
          if (insertItem === this.question[item]) {
            avoidRepeat = true
          }
        })
        // 将标题和内容分别放进数组中
        if (item.indexOf('Caption') !== -1 && !avoidRepeat) {
          this.questionTitle.push(this.question[item])
        } else if (!avoidRepeat) {
          this.questionDetail.push(this.question[item])
        }
      })
      this.$nextTick(() => {
      // eslint-disable-next-line no-new
        new BScroll('#scroll_section', {
          deceleration: 0.001,
          bounce: true,
          swipeTime: 1800,
          click: true
        })
      })
    },
    // 保存问题详情
    toQuestionDetail (title, index) {
      this.SAVE_QUESTION({title, detail: this.questionDetail[index]})
      this.$router.push('/serviceDetail')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixins.styl"
.rating_page
  padding-top 45px
.service_connect
  display flex
  a
    flex 1
    display flex
    flex-direction column
    align-items center
    justify-content center
    height 100px
    border-bottom 1px solid #f5f5f5
    svg
      wh(30px,30px)
      color: #fff;
  span
    margin-top 8px
    sc(12px, #666)
.profile_my_order
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .qustion_header
      padding 15px
    .my_order
      display flex
      align-items center
      padding-left 15px
      >span
        display flex
        align-items center
        wh(20px, 20px)
        >.iconfont
          margin-left -10px
          font-size 30px
        .icon-dingdan
          color #02a774
        .icon-jifen
          color #ff5f3e
        .icon-viptehuishiduan
          color #f90
        .icon-lianxikefu
          color #02a774
      .my_order_div
        width 100%
        border-bottom 1px solid #f1f1f1
        padding 18px 10px 18px 0
        font-size 16px
        color #333
        display flex
        justify-content space-between
        span
          display block
        .my_order_icon
          wh(10px, 10px)
          .icon-previewright
            sc(10px, #bbb)
</style>
