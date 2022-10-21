 <template>
  <div class="detail_page">
        <header-top :title="questionItem.title" />
        <section id="scroll_section" class="scroll_container">
            <section v-html="markdownText" class="markdown"></section>
        </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import showdown from 'showdown'
import BScroll from 'better-scroll'

export default {
  data () {
    return {

    }
  },
  mounted () {
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
  computed: {
    ...mapState([
      'questionItem'
    ]),
    markdownText () {
      // 转换markDown格式
      let converter = new showdown.Converter()
      return converter.makeHtml(this.questionItem.detail)
    }
  }
}
</script>

<style lang="stylus">
  .detail_page
    padding-top 45px;
  .scroll_container
    overflow-y: auto;
</style>
