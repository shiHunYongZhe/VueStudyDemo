 <template>
  <div class="page_container">
        <header-top title="购买记录" />
        <!-- 没有办过会员卡，获取不到数据，只好写死 -->
        <section class="invoice_contianer">
            <img src="../../../common/imgs/no-log.png">
            <p>没有购买记录</p>
        </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl';
  .page_container
    padding-top 45px
  .invoice_contianer
    display flex
    flex-direction: column
    align-items center
    img
      wh(160px, 100px)
      margin-top 100px
    p
      sc(14px, #999)
      margin-top 16px
</style>
