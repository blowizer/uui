(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/request-payment/request-payment"],{"05bf":function(e,n,t){"use strict";(function(e){t("cfed");r(t("66fd"));var n=r(t("58c1"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"17ce":function(e,n,t){"use strict";var r=t("2b92"),o=t.n(r);o.a},"2b92":function(e,n,t){},"40ea":function(e,n,t){"use strict";t.r(n);var r=t("ce1c"),o=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=o.a},"58c1":function(e,n,t){"use strict";t.r(n);var r=t("e299"),o=t("40ea");for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);t("17ce");var a,i=t("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=u.exports},ce1c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n,t,r,o,c,a){try{var i=e[c](a),u=i.value}catch(s){return void t(s)}i.done?n(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var c=e.apply(n,t);function a(e){u(c,r,o,a,i,"next",e)}function i(e){u(c,r,o,a,i,"throw",e)}a(void 0)}))}}var f={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{loginMpWeixin:function(){return new Promise((function(n,t){e.login({provider:"weixin",success:function(r){console.warn("此处使用uni-id处理微信小程序登录，详情参考: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),e.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:r.code,platform:"mp-weixin"}},success:function(r){0===r.data.code?(e.setStorageSync("openid",r.data.openid),n(r.data.openid)):t(new Error("获取openid失败：",r.result.msg))},fail:function(e){t(new Error("获取openid失败："+e))}})},fail:function(e){t(e)}})}))},weixinPay:function(){var n=this;return s(r.default.mark((function t(){var o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e.getStorageSync("openid"),console.log("发起支付"),n.loading=!0,o){t.next=17;break}return t.prev=4,t.next=7,n.loginMpWeixin();case 7:o=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),console.error(t.t0);case 13:if(o){t.next=17;break}return e.showModal({content:"获取openid失败",showCancel:!1}),n.loading=!1,t.abrupt("return");case 17:return n.openid=o,t.next=20,n.getOrderInfo("wxpay");case 20:if(c=t.sent,c){t.next=24;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),t.abrupt("return");case 24:e.requestPayment(a(a({},c),{},{success:function(n){e.showToast({title:"感谢您的赞助!"})},fail:function(n){e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){n.loading=!1}}));case 25:case"end":return t.stop()}}),t,null,[[4,10]])})))()},requestPayment:function(n,t){var o=this;return s(r.default.mark((function c(){var a,i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o.providerList[t].loading=!0,a=n.id,r.next=4,o.getOrderInfo(a);case 4:if(i=r.sent,i){r.next=8;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),r.abrupt("return");case 8:console.log("--------orderInfo--------"),console.log(i),e.requestPayment({provider:a,orderInfo:i,success:function(n){console.log("success",n),e.showToast({title:"感谢您的赞助!"})},fail:function(n){console.log("fail",n),e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){o.providerList[t].loading=!1}});case 11:case"end":return r.stop()}}),c)})))()},getOrderInfo:function(n){var t=this;return new Promise((function(r,o){t.price||o(new Error("请输入金额")),console.warn("此处使用uni-pay处理支付，详情参考: https://uniapp.dcloud.io/uniCloud/unipay"),e.request({method:"POST",url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay",data:{provider:n,openid:t.openid,totalFee:100*Number(t.price),platform:"mp-weixin"},success:function(e){0===e.data.code?r(e.data.orderInfo):o(new Error("获取支付信息失败"+e.data.msg))},fail:function(e){o(new Error("请求支付接口失败"+e))}})}))},priceChange:function(e){console.log(e.detail.value),this.price=e.detail.value}}};n.default=f}).call(this,t("543d")["default"])},e299:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return r}));var o=function(){var e=this,n=e.$createElement;e._self._c},c=[]}},[["05bf","common/runtime","common/vendor"]]]);