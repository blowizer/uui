<template>
	<view>
		<u-tag text="标签" plain size="mini" type="warning"></u-tag>
		<u-rate count="4"></u-rate>
		<view class="">
			cart: {{num}}
		</view>
		<view class="caomei" @click="handleSend">草莓蛋蛋</view>
		<test-my-comp v-for="(item,index) in 10" :key="index" name="yangiqo" @onNum="handleNum"></test-my-comp>
		
	</view>
</template>

<script>
	import testBus from '../../bus/testBus.js'
	import myComp from '../../components/test-my-comp.vue'
	export default {
		data() {
			return {
				num:100 
			}
		},
		methods: {
			handleNum(n){
				console.log(n)
				this.num += n;
			},
			handleSend(){
				console.log('handle send')
				testBus.$emit('sendData',{
					msg: 'hello',
					num: 1234
				})
			}
			
		},
		onLoad() {
			console.log('bread page')
		},
		created() {
			console.log('bread page in created')
		},
		components: {
			'my-comp': myComp
		}
	}
</script>

<style lang="scss">
	@import '/colorui/main.css';
	@import '/colorui/icon.css';
	@import '/fonts/iconfont.css';
	@import 'uview-ui/theme.scss';
	.caomei{
		width: 100px;
		height: 200px;
		font-size: $uni-bg-color;
	}
</style>
