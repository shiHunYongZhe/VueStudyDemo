 <template>
  <div class="page">
    <header-top title="红包说明" />
    <div class="markdown" v-html="markdownText"></div>
  </div>
</template>

<script>
import showdown from 'showdown'
import hbDescription from './hbDescription.md'
export default {
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
