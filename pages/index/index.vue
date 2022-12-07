<template>
	<scroll-view :scroll-into-view="topItem" scroll-with-animation class="scroll-cont" scroll-y="true" @scroll="handleScroll" :enable-back-to-top="true">
	<view>
		<view id="top"></view>
		<nav-custom></nav-custom>
		<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="#fc1c18">
			<swiper-item v-for="(item,index) in banner" :key="item.objectId" @click="handleBanner(item.link)">
			<view class="swiper-item">
				<image :src="item.img"></image>
			</view>
		</swiper-item>
		<!-- 	<swiper-item v-for="(item, index) in 3">
				<view class="swiper-item"><image src="../../static/img/agriculture.jpg" mode=""></image></view>
			</swiper-item>-->
			
		</swiper> 
		<home-title title="十月二十五" en-title="小雪" en-tit="春节"></home-title>
		<scroll-view scroll-x="true">
			<view class="scroll-inner">
				<image src="../../static/img/recommend1.jpeg" mode="heightFix"></image>
				<image src="../../static/img/recommend2.jpg" mode="heightFix"></image>
				<image src="../../static/img/recommend3.jpg" mode="heightFix"></image>
			</view>
		</scroll-view>
		<home-title title="收购" en-title="辣椒" en-tit="¥1.5"></home-title>
		<view class="flex flex-wrap padding padding-sm justify-between"><good-item v-for="(item, index) in 4"></good-item></view>
		<view class="back-top" v-if="isShow" @click="handleBackTop">
			<text class="iconfont icon-fanhuidingbu1 "></text>
		</view>
	</view>
	</scroll-view>
</template>

<script>
import {$http} from '../../utils/request.js'
import testBus from '../../bus/testBus.js';
export default {
	data() {
		return {
			title: 'Hello',
			isShow: false,
			topItem: '',//返回顶部标记点,
			banner:[]
			
		};
	},
	onLoad() {
		console.log('home page on load');
		testBus.$on('sendData', data => {
			console.log(data);
		});
	},
	methods: {
		handleScroll(ev){
			//console.log(ev);
			let {scrollTop} = ev.detail
			this.isShow = scrollTop>300
			this.topItem = ''
		},
		handleBackTop(){
			this.topItem = 'top'
		},
		handleBanner(link){
			// console.log(1111);
			uni.navigateTo({
				url:`./banner-ad?link=${link}`
			})
		},
		onLoad(){
			// uni.request({
			// 	url:"https://xehs0yjh.lc-cn-n1-shared.com/1.1/classes/Fram",
			// 	method:"GET",
			// 	header:{
			// 		"X-LC-Id":"XEhs0yJhjujR67BCV7jNdSaG-gzGzoHsz",
			// 		"X-LC-Key":"VOnu3J0I91d39Mh7jgYw5qf7",
			// 		"Content-Type":"application/json"
			// 	},
			// 	success: (res) => {
			// 		console.log(res)
			// 	}
			// })
			this.$get('/1.1/classes/banner').then(res => {
				console.log(res);
				this.banner = res.results;
			})
			
		}
	}
};
</script>

<style lang="scss">
.banner {
	height: 500upx;
	swiper-item {
		height: 50upx;
	}
	image {
		width: 100%;
		height: 400upx;
	}
}
.scroll-inner {
	white-space: nowrap;
	image {
		height: 290upx;
	}
}
.back-top{
	height: 100upx;
	width: 100upx;
	background-color: white;
	border-radius: 50%;
	box-shadow: 0 0 30upx 4upx rgba(0,0,0,4);
	position: fixed;
	bottom: 30upx;
	right: 20upx;
	text-align: center;
	line-height: 100upx;
}
.scroll-cont{
	// border: 1px solid red;
	height: 100vh;
}
</style>
