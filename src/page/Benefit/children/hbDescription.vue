 <template>
  <div class="page">
    <HeaderTop title="红包说明"></HeaderTop>
    <div class="markdown" v-html="markdownText"></div>
  </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop/HeaderTop.vue'
import showdown from 'showdown'
import hbDescription from './hbDescription.md'
export default {
  mounted () {
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
