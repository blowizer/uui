<template>
	<view class="content">
		<view class="avatarWrapper">
			<view class="avatar">
				<image class="img" src="../../static/logo.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="form">
			<view class="inputWrapper">
				<input class="input"type="text" value="" placeholder="input name"/>				
			</view>
			<view class="inputWrapper">
				<input class="input" type="password" value="" placeholder="input passwd"/>
			</view>
			<view class="logoBtn">
				<text class="btnVal">Login</text>	
			</view>
			<view class="forgetBtn">
				<text class="forgetVal">forget passwd</text>
			</view>
			<view class="iconfont icon-zhuye">
			
			</view>
		</view>
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

		}
	}
</script>

<style lang="scss">
	.content {
		background: #377EB4;
		width: 100vw;
		height: 100vh;
	}
	.avatarWrapper{
		height: 30vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		
	}
	.avatar {
		width: 200upx;
		height: 200upx;
		overflow: hidden;
	}
	.avatar .img{
		width: 100%;
	}
	.form{
		padding: 0 100upx;
		margin-top: 80px;		
	}
	.inputWrapper {
		width: 100%;
		height: 80upx;
		background-color: white;
		border-radius: 20px;
		box-sizing:  border-box;
		padding: 0 20px;
		margin-top: 25px;
	}
	.inputWrapper .input{
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
	}
	.logoBtn {
		width: 100%;
		height: 80upx;
		background: #77b307;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
		
	.logoBtn .btnVal {
		color: white;
	}
	.forgetBtn {
		text-align: center;
		color: #EAF6F9;
		font-size: 15px;
		margin-top: 20px;
	}
	
	.icon-zhuye {
		font-size:100upx;
	}
</style>
