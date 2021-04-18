<template>
  <div class="flex" v-show="havePage">
    <img src="../common/imgs/voucher.png" />
    <p @click="onHome">{{ title }}</p>
    <router-link to="./login" class="to_login" v-if="toLogin">
      <mt-button size="small" style="background:#02a774;color:#fff">去登陆</mt-button>
    </router-link>
  </div>
</template>
<script>
import { Button } from 'mint-ui';
export default {
  props: { title: String },
  data() {
    return {
      havePage: true,
      toLogin: true
    };
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    onDisplay() {
      this.havePage = true;
    },
    onHide() {
      this.havePage = false;
    },
    onLogin() {
      this.toLogin = true;
    },
    onHome() {
      this.$router.push('./home');
    }
  }
};
</script>
<style lang="stylus" scoped>
div {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 100%;
}

img {
  text-align: center;
  margin: 50px 0;
  width: 100px;
  height: 60px;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

.to_login {
  margin-top: 20px;
}
</style>
