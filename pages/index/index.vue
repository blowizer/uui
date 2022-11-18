<template>
	<view class="">
		<nav-custom></nav-custom>
	<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="#fc1c18">
		<!-- <swiper-item v-for="(item,index) in banner" :key="item.objectId" @click="handleBanner(item.link)">
			<view class="swiper-item">
				<image :src="item.img"></image>
			</view>
		</swiper-item> -->
		<swiper-item v-for="(item, index) in 3">
			<view class="swiper-item">				
				<image src="../../static/img/agriculture.jpg" mode=""></image>			
			</view>	
		</swiper-item>
	</swiper>
	<home-title title="十月二十五" en-title="小雪" en-tit="春节"> </home-title>
	</view>
</template>

<script>
	import testBus from '../../bus/testBus.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log('home page on load')
			testBus.$on('sendData', (data)=> {
				console.log(data)
			})
		},
		methods: {
			handleBanner(link){
				// console.log(1111);
				uni.navigateTo({
					url:`./banner-ad?link=${link}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.banner{
		height: 500upx;
		swiper-item{
			height: 50upx;
		}
		image{
			width: 100%;
			height: 400upx;
		}
	}
</style>
