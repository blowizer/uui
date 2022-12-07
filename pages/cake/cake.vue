<template>
	<view>
		<nav-custom></nav-custom>
		<view class="cont"><good-item v-for="(item, index) in glist" :gdata="item"></good-item></view>
		<view class="fixed flex justify-around bg-fff padding-sm">
			<view v-for="(item, index) in tabArr" :key="index" @click="handleTab(item)" class="flex justify-center align-center">
				<view class="">{{ item.name }}</view>
					<u-line v-if="index < tabArr.length - 1" direction="col" length="15" margin="20upx"></u-line>
				<!-- <text class="cuIcon-sort"></text> -->
			</view>
		</view>
		<u-popup :show="show" mode="left"  @close="handleClose">
				<view class="pop-cont">
					<view v-for="(item,index) in cfylist" >
						<view class="padding-sm u-border-bottom">
							{{item.bname}}
							<view class="cu-tag round bg-yellow color-fff margin-left-xs">
								{{item.num}}
							</view>
						</view>
						<view v-if="index==0">
							<view 
								@tap="listShow=!listShow" 
								class="padding-sm"
								:class="{'u-border-bottom':!listShow}"
							>
								口味筛选
							</view>
							<u-cell-group v-if="listShow">
								<u-cell 
									v-for="(itm,idx) in item.list" 
									:title="itm.tname"
									:name="itm.tname"
									isLink
									@click="handleList(itm,1)"
								></u-cell>
							</u-cell-group>
							<view 
								@click="sceneShow=!sceneShow" 
								class="padding-sm"
								:class="{'u-border-bottom':!sceneShow}"
							>
								场景筛选
							</view>
							<u-cell-group v-if="sceneShow">
								<u-cell 
									v-for="(itm,idx) in item.scene" 
									:title="itm.tname" 
									isLink
									@click="handleList(itm,2)"
								></u-cell>
							</u-cell-group>
						</view>
					</view>
				</view>
			</u-popup>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			glist: [],
			page: 0,
			tabArr: [
				{
					name: '分类',
					bcid: '',
					target: ''
				},
				{
					name: '蛋糕',
					bcid: '1',
					target: '/pages/cake'
				},
				{
					name: '面包',
					bcid: '6',
					target: 'pages/bread'
				},
				{
					name: '小食',
					bcid: '11',
					target: 'pages/food'
				},
				{
					name: '购物车',
					bcid: '',
					target: 'pages/cart'
				}
			],
			//bcid: 1,
			show: false,
			cfylist: [],
			listShow: false,
			sceneShow: false,
			// condition:{
			// 	bcid: 11
			// }
		};
	},
	computed:{
		condition(){
			return this.$store.state.condition.cond
		}
	},
	onLoad() {
		this.loadData();
		this.$get('/1.1/classes/classify').then(res=>{
			console.log= res.results;
			this.cfylist = res.results
		})
	},
	onReachBottom() {
		this.loadData();
	},
	onPullDownRefresh() {
		this.glist = []
		this.page = 0
		this.loadData()
	},
	
	methods: {
		handleDetail(idx) {
			console.log(idx);
			uni.navigateTo({
				url: '../detail/detail?idx=' + idx
			});
		},
		loadData() {
			let wh = JSON.stringify(this.condition)
			let skip = this.page * 8;
			let url = `/1.1/classes/goods?where=${wh}&limit=8&skip=${skip}`;
			this.$get(url).then(res => {
				uni.stopPullDownRefresh();
				let { results } = res;
				if (results.length) {
					this.page++;
					this.glist = [
						//拓展运算符
						...this.glist,
						...res.results
					];
					return;
				}
				uni.showToast({
					title: '再没有了',
					icon: 'none'
				});
			});
		},
		reloadData(){ //刷新页面数据
			this.glist = []
			this.page = 0
			this.loadData()
		},
		handleTab(item) {
			let { bcid, target } = item;
			
			if (bcid) {
				
				//this.condition.bcid = Number(bcid);
				this.$$store.commit('changeCondition',{
					bcid: Number(bcid)
				})
				this.loadData();
			}
			if (!bcid && !target) {
				this.show = true;
			}
		},
		handleClose() {
			this.show = false;
		},
		
		handleList({bid,tid},type){ //口味、场景筛选
			
			let obj = {bcid:bid}
			type===1 ? obj.fid=tid : obj.sid=tid
			this.$store.commit('changeCondition',obj)
			this.reloadData()
			this.show = false
		}
	}
};
</script>

<style lang="scss">
page {
	padding: 90upx 0 120upx;
}
.cont {
	display: flex;
	flex-wrap: wrap;
	padding: 15upx;
	justify-content: space-between;
}
.cake-item {
	width: 350upx;
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
.fixed {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 10upx rgba(0, 0, 0, 2);
	.flex {
	}
}
.pop-cont {
	width: 350upx;
	margin-top: 200upx;
	
}

</style>
