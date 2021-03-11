 <template>
  <div class="rating_page">
    <HeaderTop title="我的余额"></HeaderTop>
    <section>
      <section class="category_title">
        <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">红包</span>
        <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">商家代金券</span>
      </section>
      <transition name="router-fade">
        <section v-if="categoryType === 1">
          <section class="hongbao_container">
            <header class="hongbao_title">
              <section class="total_number">
                有 <span>{{hongbaoList.length || 0}}</span> 个红包即将到期
              </section>
              <section class="hongbao_description">
                  <img src="../../common/imgs/description.png" height="24" width="24">
                  <router-link to="/benefitHBDescription" class="hongbao_detail">红包说明</router-link>
              </section>
            </header>
            <ul class="hongbao_list_ul">
              <li class="hongbao_list_li" v-for="item in hongbaoList" :key="item.id">
                <section class="list_item">
                  <div class="list_item_left">
                    <span>¥</span>
                    <span>{{String(item.amount).split('.')[0]}}</span>
                    <span>.</span>
                    <span>{{String(item.amount).split('.')[1]||0}}</span>
                    <p>{{item.description_map.sum_condition}}</p>
                  </div>
                  <div class="list_item_right">
                    <h4>{{item.name}}</h4>
                    <p>{{item.description_map.validity_periods}}</p>
                    <p>{{item.description_map.phone}}</p>
                  </div>
                  <div class="time_left">{{item.description_map.validity_delta}}</div>
                </section>
                <footer class="list_item_footer" v-if="item.limit_map">
                    <p>{{item.limit_map.restaurant_flavor_ids}}</p>
                </footer>
              </li>
            </ul>
          </section>
          <router-link to="/benefitHBHistory" class="history_hongbao">
              <span class="check_history">查看历史红包</span>
              <svg class="history_right">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
              </svg>
          </router-link>
          <footer class="hongbao_footer">
              <router-link to="/benefitExchange" class="hongbao_style" style="border-right: 1px solid #f5f5f5">
                  兑换红包
              </router-link>
              <router-link to="/benefitCommend" class="hongbao_style">
                  推荐有奖
              </router-link>
          </footer>
        </section>
      </transition>
      <transition name="router-fade">
        <section v-if="categoryType === 2" class="voucher_container">
          <section class="hongbao_description voucher_header">
            <img src="../../common/imgs/description.png" height="24" width="24">
            <router-link to="/benefitCoupon" class="hongbao_detail">商家代金券说明</router-link>
          </section>
          <section class="unable_use">
            <img src="../../common/imgs/voucher.png" height="170" width="300">
            <p>无法使用代金券</p>
            <p>非客户端或客户端版本过低</p>
            <router-link to="/download" class="download_app">
            下载或升级客户端
            </router-link>
          </section>
        </section>
      </transition>
    </section>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {mapState, mapMutations} from 'vuex'
import {getHongbaoNum} from '../../api/index'
// import loading from 'src/components/common/loading'

export default {
  data () {
    return {
      showAlert: false, // 弹出框
      alertText: null, // 弹出框文字
      hongbaoList: {}, // 红包列表
      categoryType: 1 // 红包与商家代金券切换
    }
  },
  mounted () {
    this.initData()
  },
  components: {
    HeaderTop,
    AlertTip
    // loading
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'CLEAR_CART'
    ]),
    async initData () {
      if (this.userInfo) {
        // this.hongbaoList = await getHongbaoNum(this.userInfo.user_id)
      }
    }
  },
  watch: {
    userInfo: function (value) {
      this.initData()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl'
.rating_page
  padding-top 45px
.category_title
  flex-j(space-around)
  align-items center
  height 40px
  background-color #fff
  span
    text-align center
    sc(16px, #333)
    padding-bottom 4px
    border-bottom 2px solid #fff
  .choosed
    border-bottom-color $blue
    color $blue
.hongbao_description
  display flex
  align-items center
  img
    wh(14px, 14px)
    margin-right 4px
  .hongbao_detail
    color $blue
.hongbao_container
  padding 0 14px
  .hongbao_title
    flex-j()
    font-size 12px
    line-height 40px
    .total_number
      color #666
      span
        color $blue
    .hongbao_list_ul
      .hongbao_list_li
        background #fff url(../../common/imgs/hongbao.png) repeat-x
        background-size 10px 4px
        margin-bottom 10px
        border-radius 5px
        .list_item
          flex-j()
          padding 20px 10px 16px
          .list_item_left
            font-size 0
            border-right 1px dotted #ccc
            flex 1
            span:nth-of-type(1)
              sc(15px, $blue)
              font-weight bold
            span:nth-of-type(2)
              sc(30px, $blue)
            span:nth-of-type(3),
            span:nth-of-type(4)
              sc(16px, $blue)
              font-weight bold
            p
              sc(12px, #999)
          .list_item_right
            flex 2
            margin-left 30px
            h4
              sc(14px, #666)
              margin-left -14px
            p
              list-style-type disc
              margin-left -14px
              sc(8px, #999)
          .time_left
            sc(15px, $blue)
        .list_item_footer
          background-color #f9f9f9
          padding 8px 8px
          border-bottom-left-radius 5px
          border-bottom-right-radius 5px
          p
            list-style-type disc
            sc(8px, #999)
            margin-left: 8px
.history_hongbao
  padding: 10px 0 56px
  flex-j(center)
  align-items center
  .check_history
    sc(14px, #999)
    margin-right 4px
  .history_right
    wh(8px, 8px)
    fill #aaa
.hongbao_footer
  position fixed
  bottom 0
  width 100%
  background-color #fff
  display flex
  .hongbao_style
    flex 1
    line-height 40px
    text-align center
    sc(14px, #555)
.voucher_container
  .voucher_header
    font-size 10px
    justify-content flex-end
    line-height 40px
    margin-right 10px
  .unable_use
    text-align center
    margin-top 80px
    img
      wh(12px, 8px)
    p:nth-of-type(1)
      sc(18px, #666)
      margin-top 8px
    p:nth-of-type(2)
      sc(14px, #999)
      margin-top 10px
      margin-bottom 10px
    .download_app
      background-color #56d176
      sc(16px, #fff)
      padding 8px
      border-radius 3px
</style>
