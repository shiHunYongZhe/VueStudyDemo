 <template>
  <div class="page">
    <header-top title="历史红包" />
      <section id="scroll_section" class="scroll_container">
        <ul class="hongbao_list_ul">
          <li class="hongbao_list_li" v-for="item in expiredList" :key="item.id">
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
            </section>
            <footer class="list_item_footer" v-if="item.limit_map">
              <p>{{item.limit_map.restaurant_flavor_ids}}</p>
            </footer>
            <svg class="expired">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expired"></use>
            </svg>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import {getExpired} from '../../../api/index'

export default {
  data () {
    return {
      showAlert: false,
      alertText: null,
      showLoading: true,
      expiredList: null // 历史红包列表
    }
  },
  mounted () {
    this.initData()
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    async initData () {
      // 获取历史红包
      if (this.userInfo) {
        this.expiredList = await getExpired(this.userInfo.user_id)
        this.showLoading = false
        this.$nextTick(() => {
          // eslint-disable-next-line no-new
          new BScroll('#scroll_section', {
            deceleration: 0.001,
            bounce: true,
            swipeTime: 1800,
            click: true
          })
        })
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
.hongbao_list_ul
  padding 20px 10px
  .hongbao_list_li
    background #fff url(../../../common/imgs/expired.png) repeat-x
    background-size 10px 4px
    margin-bottom 10px
    border-radius 5px
    position relative
    .list_item
      flex-j()
      padding: 20px 10px 16px;
      .list_item_left
        font-size 0
        border-right 5px dotted #ccc;
        flex 1
        span:nth-of-type(1)
          sc(16px, #ccc)
          font-weight bold
        span:nth-of-type(2)
          sc(40px, #ccc)
        span:nth-of-type(3), span:nth-of-type(4)
          sc(20px, #ccc)
          font-weight bold
        p
          sc(10px, #999)
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
    .list_item_footer
      background-color #f9f9f9
      padding 8px
      border-bottom-left-radius 5px
      border-bottom-right-radius 5px
      p
        list-style-type disc
        sc(8px, #999)
        margin-left 8px
    .expired
        fill #ddd
        wh(60px, 60px)
        top 12px
        right 4px
        position absolute
</style>
