<template>
    <div id="app">
        <router-view />
        <!-- 并放置非路由组件 -->
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
export default {
    name: 'App',
    components: {
        FooterGuide
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.markdown {
  font-size: 14px;
  padding: 0 0.14px;
  color: #666;
  padding-bottom: 90px;
  text-align: left;

  h3 {
    line-height: 34px;
  }

  p, li {
    text-indent: 2em;
    line-height: 18px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
