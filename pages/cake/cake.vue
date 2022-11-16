<template>
	<view class="cont">
	<view class="cake-item" v-for="(item,index) in 8"v-bind:key ="index">
		<view class="poster">			
		</view>
		<view class="info-cont">
			<view class="info">
				<view class="fs-28">
					蛋糕
				</view>
				<view class="fs-16">
					CaoMei DanGao
				</view>
				<view class="fs-18">
					<text class="fs-14"> ¥</text>
					250.00
				</view>
			</view>
			<view class="cart-btn"></view>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.cont{
		display: flex;
		flex-wrap: wrap;
		padding: 5upx;
		justify-content: space-between;
	}
	.cake-item{
		width: 350upx;
		.poster{
			height: 350upx;
			background-color: #f5f5f5;
		}
		.fs-28{
			margin-top: 24upx;
		}
		.fs-16{
			margin-top: 14upx;
		}
		.fs-18{
			margin-bottom: 22upx;
		}
		
	}
</style>
