 <template>
  <div class="page">
    <HeaderTop title="红包说明"></HeaderTop>
    <div class="markdown" v-html="markdownText"></div>
  </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop/HeaderTop.vue'
import showdown from 'showdown'
import BScroll from 'better-scroll'
import hbDescription from './hbDescription.md'
export default {
  mounted () {
    this.$nextTick(() => {
      // 忽略eslint 报错
      // eslint-disable-next-line no-new
      new BScroll('#scroll_section', {
        deceleration: 0.001,
        bounce: true,
        swipeTime: 1800,
        click: true
      })
    })
  },
  components: {
    HeaderTop
  },
  computed: {
    markdownText () {
      // 转换markDown格式
      let converter = new showdown.Converter()
      return converter.makeHtml(hbDescription)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  padding-top 45px
</style>
