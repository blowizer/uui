<template>
	<view>
		
	</view>
</template>

<script>
	
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
