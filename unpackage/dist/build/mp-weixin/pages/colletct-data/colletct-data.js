(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/colletct-data/colletct-data"],{"224e":function(t,e,c){"use strict";var a;c.d(e,"b",(function(){return n})),c.d(e,"c",(function(){return u})),c.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"3cc7":function(t,e,c){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={data:function(){return{}},methods:{handleCfy:function(){var e=this;t.request({url:"https://h5.mcake.com/api/5e90690f0e270d04?cityId=675",method:"GET",header:{"access-token":"6368fa63925c3e584b0f4dc489304b2b",version:"v1.0"},success:function(t){var c=t.data.data,a={requests:[]};c.forEach((function(t){a.requests.push({method:"POST",path:"/1.1/classes/classify",body:t})})),e.$post("/1.1/batch",a)}})},handleGoods:function(){var e=this;t.request({url:"https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=2&bid=11",method:"GET",header:{"access-token":"9b53b620b6b3462e84110c89b0c72016",version:"v1.0"},success:function(t){console.log(t);var c=t.data.data.list,a={requests:[]};c.forEach((function(t){a.requests.push({method:"POST",path:"/1.1/classes/goods",body:t})})),e.$post("/1.1/batch",a)}})}}};e.default=c}).call(this,c("543d")["default"])},"53c3":function(t,e,c){"use strict";(function(t){c("cfed");a(c("66fd"));var e=a(c("cf02"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=c,t(e.default)}).call(this,c("543d")["createPage"])},"5c81":function(t,e,c){"use strict";c.r(e);var a=c("3cc7"),n=c.n(a);for(var u in a)"default"!==u&&function(t){c.d(e,t,(function(){return a[t]}))}(u);e["default"]=n.a},cf02:function(t,e,c){"use strict";c.r(e);var a=c("224e"),n=c("5c81");for(var u in n)"default"!==u&&function(t){c.d(e,t,(function(){return n[t]}))}(u);var o,s=c("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=r.exports}},[["53c3","common/runtime","common/vendor"]]]);