 <template>
  <div class="page">
    <header-top title="积分问题" />
    <div class="markdown" v-html="markdownText">
    </div>
  </div>
</template>

<script>
import showdown from 'showdown'
import detail from './detail.md'
export default {
  computed: {
    markdownText () {
      // 转换markDown格式
      let converter = new showdown.Converter()
      return converter.makeHtml(detail)
    }
  }
}

</script>

<style lang="stylus" scoped>
.page
  padding-top 45px
</style>
