 <template>
  <div class="rating_page">
        <HeaderTop title="积分商场"></HeaderTop>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixins.styl';
.rating_page
  allover()
  background #fff
  padding-top 45px
  p, span
    font-family Helvetica Neue,Tahoma,Arial
</style>
