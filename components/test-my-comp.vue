<template>
	<view @click="handleNum">
		test share components {{name}}
	</view>
</template>

<script>
	export default {
		name:"test-my-comp",
		props:['name'],
		data() {
			return {
				
			};
		},
		methods:{
				handleNum(){
					this.$emit('onNum',2)
				}
		},
		created(){
			console.log('share commpoents created')
		}
	}
</script>

<style>

</style>