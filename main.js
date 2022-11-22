import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import uView from 'uview-ui'
Vue.use(uView)
import myComp from 'components/test-my-comp.vue'
Vue.component('test-my-comp',myComp)
import NavCustom from 'components/nav-custom.vue'
Vue.component('nav-custom', NavCustom)
import HomeTitle from 'components/home-title.vue'
Vue.component('home-title',HomeTitle)
import GoodItem from 'components/good-item.vue'
Vue.component('good-item',GoodItem)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import uView from 'uview-ui'
Vue.use(uView)
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif