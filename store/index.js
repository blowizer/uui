import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import condition from './condition.js'
const store = new Vuex.Store({
		
	modules:{
		condition
	}
})
export default store