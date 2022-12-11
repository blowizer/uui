(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/request-payment/request-payment"],{260:function(e,n,t){"use strict";(function(e){t(5);r(t(4));var n=r(t(261));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},261:function(e,n,t){"use strict";t.r(n);var r=t(262),o=t(264);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t(266);var c,u=t(11),a=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);a.options.__file="pages/request-payment/request-payment.vue",n["default"]=a.exports},262:function(e,n,t){"use strict";t.r(n);var r=t(263);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},263:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));var o=function(){var e=this,n=e.$createElement;e._self._c},i=!1,c=[];o._withStripped=!0},264:function(e,n,t){"use strict";t.r(n);var r=t(265),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},265:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(34));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n,t,r,o,i,c){try{var u=e[i](c),a=u.value}catch(s){return void t(s)}u.done?n(a):Promise.resolve(a).then(r,o)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}var f={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{loginMpWeixin:function(){return new Promise((function(n,t){e.login({provider:"weixin",success:function(r){console.warn("此处使用uni-id处理微信小程序登录，详情参考: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),e.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:r.code,platform:"mp-weixin"}},success:function(r){0===r.data.code?(e.setStorageSync("openid",r.data.openid),n(r.data.openid)):t(new Error("获取openid失败：",r.result.msg))},fail:function(e){t(new Error("获取openid失败："+e))}})},fail:function(e){t(e)}})}))},weixinPay:function(){var n=this;return s(r.default.mark((function t(){var o,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e.getStorageSync("openid"),console.log("发起支付"),n.loading=!0,o){t.next=17;break}return t.prev=4,t.next=7,n.loginMpWeixin();case 7:o=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),console.error(t.t0);case 13:if(o){t.next=17;break}return e.showModal({content:"获取openid失败",showCancel:!1}),n.loading=!1,t.abrupt("return");case 17:return n.openid=o,t.next=20,n.getOrderInfo("wxpay");case 20:if(i=t.sent,i){t.next=24;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),t.abrupt("return");case 24:e.requestPayment(c(c({},i),{},{success:function(n){e.showToast({title:"感谢您的赞助!"})},fail:function(n){e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){n.loading=!1}}));case 25:case"end":return t.stop()}}),t,null,[[4,10]])})))()},requestPayment:function(n,t){var o=this;return s(r.default.mark((function i(){var c,u;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o.providerList[t].loading=!0,c=n.id,r.next=4,o.getOrderInfo(c);case 4:if(u=r.sent,u){r.next=8;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),r.abrupt("return");case 8:console.log("--------orderInfo--------"),console.log(u),e.requestPayment({provider:c,orderInfo:u,success:function(n){console.log("success",n),e.showToast({title:"感谢您的赞助!"})},fail:function(n){console.log("fail",n),e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){o.providerList[t].loading=!1}});case 11:case"end":return r.stop()}}),i)})))()},getOrderInfo:function(n){var t=this;return new Promise((function(r,o){t.price||o(new Error("请输入金额")),console.warn("此处使用uni-pay处理支付，详情参考: https://uniapp.dcloud.io/uniCloud/unipay"),e.request({method:"POST",url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay",data:{provider:n,openid:t.openid,totalFee:100*Number(t.price),platform:"mp-weixin"},success:function(e){0===e.data.code?r(e.data.orderInfo):o(new Error("获取支付信息失败"+e.data.msg))},fail:function(e){o(new Error("请求支付接口失败"+e))}})}))},priceChange:function(e){console.log(e.detail.value),this.price=e.detail.value}}};n.default=f}).call(this,t(1)["default"])},266:function(e,n,t){"use strict";t.r(n);var r=t(267),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},267:function(e,n,t){}},[[260,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/request-payment/request-payment.js.map