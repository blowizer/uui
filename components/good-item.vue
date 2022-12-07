<template>
	<view class="cont">
		<view class="cake-item">
				<image class="poster" :src="gdata.img" mode=""></image>
			<view class="info-cont">
				<view class="info flex align-center  justify-between">
					<view class="fs-28">{{gdata.name}}</view>
					<view class="fs-16"> {{gdata.french}}</view>
					<view class="cart-btn margin-right-sm"><text class="iconfont icon-icon_gouwuche"></text></view>
					<view class="fs-18">
						<text class="fs-14">¥</text>
						{{gdata.price}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "good-item",
	props:['gdata'],
	data() {
		return {
			
		};
	},
	methods: {
		handleDetail(idx) {
			console.log(idx);
			uni.navigateTo({
				url: '../detail/detail?idx=' + idx
			});
		}
	}
};
</script>

<style lang="scss">
.cont {
	display: flex;
	flex-wrap: wrap;
	padding: 15upx;
	justify-content: space-between;
}
.cake-item {
	width: 300upx;
	.poster {
		height: 350upx;
		background-color: #f5f5f5;
	}
	.fs-28 {
		margin-top: 24upx;
	}
	.fs-16 {
		margin-top: 14upx;
	}
	.fs-18 {
		margin-bottom: 22upx;
	}
}
.cart-btn {
	width: 60upx;
	height: 60upx;
	border-radius: 50%;
	background-color: #ffe32a;
	text-align: center;
	line-height: 60upx;
}
</style>
