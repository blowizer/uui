(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/registration"],{153:function(n,e,t){"use strict";(function(n){t(5);r(t(4));var e=r(t(154));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},154:function(n,e,t){"use strict";t.r(e);var r=t(155),o=t(157);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t(159);var i,c=t(11),a=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"608de258",null,!1,r["components"],i);a.options.__file="pages/user/registration.vue",e["default"]=a.exports},155:function(n,e,t){"use strict";t.r(e);var r=t(156);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},156:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return r}));var o=function(){var n=this,e=n.$createElement;n._self._c},u=!1,i=[];o._withStripped=!0},157:function(n,e,t){"use strict";t.r(e);var r=t(158),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=o.a},158:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{info:{username:"blowizer",password:"blowizer"}}},methods:{gotoLogin:function(){n.navigateTo({url:"login"})},handleReg:function(){this.$post("/1.1/users",this.info).then((function(e){e.objectId;var t=e.code,r=202===t?"账号已被占用":"注册成功";n.showToast({title:r,icon:"none"})}))}}};e.default=t}).call(this,t(1)["default"])},159:function(n,e,t){"use strict";t.r(e);var r=t(160),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=o.a},160:function(n,e,t){}},[[153,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/registration.js.map