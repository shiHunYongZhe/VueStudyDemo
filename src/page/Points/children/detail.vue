 <template>
  <div class="page">
    <HeaderTop title="积分问题"></HeaderTop>
    <div class="markdown" v-html="markdownText">
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../../components/HeaderTop/HeaderTop.vue'
import showdown from 'showdown'
import detail from './detail.md'
export default {
  components: {
    HeaderTop
  },
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
