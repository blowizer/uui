<template>
	<view>
		<view class="fixed flex justify-center bg-fff padding-sm">
			<view v-for="(item,index) in tabArr" :key="index" @click="handleTab(item)" class="flex justify-around align-center">
				<view class="">{{item.name}}</view>
				<u-line v-if="index<tabArr.length-1" direction="col" length="15" margin="30upx"></u-line>
			</view>
			<!-- {{num}} -->
		</view>
		<u-popup :show="show" mode="left"  @close="handleClose">
			<view class="pop-cont">
				<view v-for="(item,index) in cfylist" >
					<view @click="handleList(item,0)" class="padding-sm u-border-bottom">
						{{item.bname}}
						<view class="cu-tag round bg-yellow color-fff margin-left-xs">
							{{item.num}}
						</view>
					</view>
					<view >
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
		name:"tar-custom",
		data() {
			return {
				glist:[],
				page:0,
				tabArr:[
					{name:'分类',bcid:'',target:''},
					{name:'蛋糕',bcid:'1',target:'/pages/cake/cake'},
					{name:'面包',bcid:'11',target:'/pages/cake/cake'},
					{name:'小食',bcid:'6',target:'/pages/cake/cake'},
					{name:'购物车',bcid:'',target:'/pages/cake/cake'},
				],
				show:false,
				cfylist:[],
				listShow:false,
				sceneShow:false
			};
		},
		created() {
				this.$get('/1.1/classes/classify').then(res=>{
					console.log(res);
					this.cfylist = res.results
				})
		},
		
		methods:{
			
			handleTab(item){
				let {bcid,target} = item
				// console.log(typeof bcid);
				if(bcid){  //商品列表数据更新
					// this.condition.bcid = Number(bcid)
					this.$store.commit('changeCondition',{
						bcid:Number(bcid)
					})
					uni.navigateTo({
						url:target
					})
				}
				if(!bcid&&!target){ //侧边分类
					this.show = true
				}
				if(!bcid&&target){
					uni.navigateTo({
						url:target
					})
				}
			},
			handleClose(){
				this.show = false
			},
			handleList({bid,tid},type){ //口味、场景筛选
				let obj = {bcid:bid}
				type===1 ? obj.fid=tid : obj.sid=tid
				if (type === 1){
					obj.fid = tid
				}
				if (type === 2){
					obj.sid = tid
				}
				this.$store.commit('changeCondition',obj)
				
				
				this.show = false
				uni.navigateTo({
					url:'/pages/cake/cake'
				})
			}
		}
		
	}
</script>

<style>
.pop-cont{
	width: 400upx;
	margin-top: 200upx;
}
</style>