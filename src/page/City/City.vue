<template>
	<div>
		<header-top :isBack="false">
			<span slot='left' class="header_search"  @click="reload">ele.me</span>
			<router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span class="header_login_text"  v-if="!userInfo._id">登录 | 注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-yonghuming"></i>
        </span>
      </router-link>
		</header-top>
		<nav class="city_nav">
			<div class="city_tip">
				<span>当前定位城市：</span>
				<span>定位不准时，请在城市列表中选择</span>
			</div>
			<router-link :to="'/searchArea/' + guessCityid" class="guess_city">
				<span>{{guessCity}}</span>
				<span class="my_order_icon">
            <i class="iconfont icon-previewright"></i>
          </span>
			</router-link>
		</nav>
		<section id="hot_city_container">
			<h4 class="city_title">热门城市</h4>
			<ul class="citylistul clearfix">
				<router-link  tag="li" v-for="item in hotcity" :to="'/searchArea/' + item.id" :key="item.id">
						{{item.name}}
				</router-link>
			</ul>
		</section>
		<section class="group_city_container">
			<ul class="letter_classify">
				<li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
					<h4 class="city_title">{{key}}
						<span v-if="index == 0">（按字母排序）</span>
					</h4>
					<ul class="groupcity_name_container citylistul clearfix">
						<router-link  tag="li" v-for="item in value" :to="'/searchArea/' + item.id" :key="item.id" class="ellipsis">
								{{item.name}}
						</router-link>
					</ul>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import {cityGuess, hotcity, groupcity} from '../../api/index'
import {mapState} from 'vuex'
export default {
	data(){
		return{
			guessCity: '',   //当前城市
			guessCityid: '', //当前城市id
			hotcity: [],     //热门城市列表
			groupcity: {},   //所有城市列表
		}
	},

	mounted(){
		// 获取当前城市
		cityGuess().then(res => {
			this.guessCity = res.name;
			this.guessCityid = res.id;
		})

		//获取热门城市
		hotcity().then(res => {
			this.hotcity = res;
		})

		//获取所有城市
		groupcity().then(res => {
			this.groupcity = res;
		})
	},

	components:{
		HeaderTop
	},

	computed:{
		...mapState(['userInfo']),
		//将获取的数据按照A-Z字母开头排序
		sortgroupcity(){
			let sortobj = {};
			for (let i = 65; i <= 90; i++) {
				if (this.groupcity[String.fromCharCode(i)]) {
						sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
				}
			}
			return sortobj
		}
	},

	methods:{
		//点击图标刷新页面
		reload(){
				window.location.reload();
		}
	},
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixins.styl" 
	.city_nav
		padding-top 45px
		border-top 1px solid $bc
		background-color #fff
		margin-bottom 10px
		.city_tip
			flex-j()
			line-height: 30px;
			padding: 0 10px;
			span:nth-of-type(1)
				sc(14px, #666)
			span:nth-of-type(2)
				font-weight 900
				sc(13px, #9f9f9f)
		.guess_city
			flex-j()
			align-items center
			height 40px
			padding 0 10px
			border-top 1px solid $bc
			border-bottom 2px solid $bc
			font(16px, 40px)
			span:nth-of-type(1)
				color $blue
			.my_order_icon
				wh(30px, 30px)
				.icon-previewright
					sc(20px, #bbb)
	#hot_city_container
		background-color #fff
		margin-bottom 10px
	.city_title
		text-align left
		text-indent 14px
		color #666
		border-top 2px solid $bc
		border-bottom 1px solid $bc
		font(14px, 30px, "Helvetica Neue")
		span
			sc(12px, #999)
	.citylistul
		li
			float left
			text-align center
			color $blue
			border-bottom 1px solid $bc
			border-right 1px solid $bc
			wh(25%, 36px)
			font(14px, 36px)
			box-sizing border-box
		&:nth-of-type(4n)
			border-right none
	.letter_classify_li
		margin-bottom 12px
		background-color #fff
		border-bottom 1px solid $bc
		.groupcity_name_container
			li
				color #666
</style>
