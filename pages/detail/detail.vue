<template>
	<view>
		商品详情
		<button type="primary" @click="handleBack">返回</button>
		<button type="default" @click="handleHome">主页</button>
		<test-my-comp name="wbl"></test-my-comp>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options){
			console.log("in detail " + options)
		},
		methods: {
			handleBack(){
				uni.navigateBack({
					delta:1
				})
			},
			handleHome(){
				uni.switchTab({
					url:'../index/index'
				})
				
				// uni.navigateTo({
				// 	url:'../index/index'
				// })
			}
		}
	}
</script>

<style lang="scss">

</style>
