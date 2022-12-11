<template>
	<view>
	<view class="cont">
		
	</view>
	<view class="margin bg-fff"></view>
		<view class="text-center" @click="handlerUser">
			<img class="avatar" src="../../static/logo.png" mode="">
		</view>
		<view class="fs-28 text-center">
			{{username}}
		</view>
		<view class="flex grid">
			<view v-for ="(item ,index ) in gridArr.slice(0,4) "class="flex flex-direction align-center padding">
				<text :class="['iconfont margin-bottom-xs',item.icon]"></text>
					{{item.name}}
			</view>
			
			<view v-for ="(item ,index ) in gridArr.slice(4,8) "class="flex flex-direction align-center padding">
				<text :class="['iconfont margin-bottom-xs',item.icon]"></text>
				{{item.name}}
			</view>
				
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridArr:[
					
					{
						icon:'icon-wodedingdan',
						name:'我的订单'
					},
					{
						icon:'icon-daishouhuo',
						name:'待收货'
					},
					{
						icon:'icon-daifukuan',
						name:'待付款'
					},
					{
						icon:'icon-01_huiyuandengjiguanli',
						name:'会员等级'
					},
					{
						icon:'icon-jifen',
						name:'积分'
					},
					{
						icon:'icon-yue',
						name:'余额'
					},
					{
						icon:'icon-hongbao',
						name:'红包'
					},
					{
						icon:'icon-xianjindai',
						name:'现金卡'
					}
				]
			};
		},
		computed: {
			username() {
				let {userInfo} = this.$store.state.user
				let name = userInfo ? userInfo.username : '尚未登录'
				return name
			}
		},
	
		methods:{
			handlerUser(){
				uni.navigateTo({
					url: '../user/login'
					
				})
			}
		}
	}
</script>

<style lang="scss">
// page{
// 	background-color: #f6f6f6;
// }
.cont{
	height: 200upx;
	background-color: #f8f8ff;
}
.grid .iconfont {
	font-size: 100upx;
	color: #f0c300;
}
.avatar{
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
	margin-top: -75upx;
}
.margin .bg-fff{
	margin-top: -100upx;
}
</style>
