 <template>
  <div class="page">
    <HeaderTop title="代金券说明"></HeaderTop>
    <div class="markdown" v-html="markdownText"></div>
  </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop/HeaderTop.vue'
import showdown from 'showdown'
import coupon from './coupon.md'
export default {
  components: {
    HeaderTop
  },
  computed: {
    markdownText () {
      // 转换markDown格式
      let converter = new showdown.Converter()
      return converter.makeHtml(coupon)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  padding-top 45px
</style>
