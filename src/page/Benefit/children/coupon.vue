 <template>
  <div class="page">
    <header-top title="代金券说明"/>
    <div class="markdown" v-html="markdownText"></div>
  </div>
</template>

<script>
import showdown from 'showdown'
import coupon from './coupon.md'
export default {
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
