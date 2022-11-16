<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(uni.$u.config.v);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '/colorui/main.css';
	@import '/colorui/icon.css';
	@import '/fonts/iconfont.css';
	@import 'uview-ui/theme.scss';
</style>
