<template>
	<view>
		
	</view>
</template>

<script>
	import testBus from '../../bus/testBus.js'
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			console.log('food page in onload')
			testBus.$on('sendData',(data)=>{
				console.log(data)
			})
		}
	}
</script>

<style lang="scss">

</style>
