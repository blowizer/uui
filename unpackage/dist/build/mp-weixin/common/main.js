(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0743":function(e,t,n){"use strict";var o=n("cccf"),r=n.n(o);r.a},"63bf":function(e,t,n){"use strict";n.r(t);var o=n("8eb0");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("0743");var c,u,f,a,i=n("f0c5"),l=Object(i["a"])(o["default"],c,u,!1,null,null,null,!1,f,a);t["default"]=l.exports},"789a":function(e,t,n){"use strict";(function(e){n("cfed");var t=i(n("63bf")),o=i(n("66fd")),r=i(n("1077")),c=a(n("9d29")),u=i(n("d55a"));function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,o.default.use(r.default);var d=function(){n.e("components/test-my-comp").then(function(){return resolve(n("ff59"))}.bind(null,n)).catch(n.oe)};o.default.component("test-my-comp",d);var b=function(){n.e("components/nav-custom").then(function(){return resolve(n("3e1c"))}.bind(null,n)).catch(n.oe)};o.default.component("nav-custom",b);var m=function(){n.e("components/home-title").then(function(){return resolve(n("9459"))}.bind(null,n)).catch(n.oe)};o.default.component("home-title",m);var v=function(){n.e("components/good-item").then(function(){return resolve(n("86fe"))}.bind(null,n)).catch(n.oe)};o.default.component("good-item",v);var y=function(){n.e("components/tar-custom").then(function(){return resolve(n("3d40"))}.bind(null,n)).catch(n.oe)};for(var O in o.default.component("tar-custom",y),c)o.default.prototype[O]=c[O];o.default.config.productionTip=!1,t.default.mpType="app";var h=new o.default(p(p({},t.default),{},{store:u.default}));e(h).$mount()}).call(this,n("543d")["createApp"])},"8eb0":function(e,t,n){"use strict";n.r(t);var o=n("ea02"),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a},cccf:function(e,t,n){},ea02:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App Launch");try{var t=e.getStorageSync("userInfo");t&&(this.$store.commit("user/initInfo",t),console.log(t))}catch(n){console.log("提取用户信息失败",n)}},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=n}).call(this,n("543d")["default"])}},[["789a","common/runtime","common/vendor"]]]);