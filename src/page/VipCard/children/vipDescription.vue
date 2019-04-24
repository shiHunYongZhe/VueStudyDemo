 <template>
  <div class="page_container">
        <HeaderTop title="我的优惠"></HeaderTop>
        <div class="markdown">
            <blockquote>
              <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
            </blockquote>
            <h3 id="q1-">Q1: 特权介绍</h3>
            <ul>
              <li>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
              <li>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
              <li>更多特权，敬请期待！</li>
            </ul>
            <h3 id="q2-">Q2: 资费介绍</h3>
            <ul>
                <li>饿了么会员卡：20元</li>
            </ul>
            <h3 id="q3-">Q3: 使用说明</h3>
            <p>当用户满足以下任一条件，会员服务自动失效：</p>
            <ol>
              <li>自绑定之日起超过31天；</li>
              <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
            </ol>
            <h3 id="q4-">Q4: 购卡说明</h3>
            <ul>
              <li>在线购买：饿了么App&gt;我的&gt;饿了么会员卡</li>
            </ul>
            <h3 id="q5-">Q5: 温馨提示</h3>
            <ul>
              <li>用户在当前会员服务失效前，无法购买新卡。</li>
              <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop/HeaderTop.vue'
import {mapState, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  components: {
    HeaderTop
  },
  methods: {
    ...mapMutations([
      'SAVE_AVANDER'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl';
.page_container
  padding-top 45px
  overflow-y auto
  sc(14px, #999)
  padding 40px 14px 0
  text-align left
.markdown
  margin-top 20px
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5
  margin-top 6px
  margin-bottom 4px
  sc(16px, #333)
.markdown ul
  li
    list-style none
    color #666
    margin-bottom 4px
    text-indent 2em
</style>
