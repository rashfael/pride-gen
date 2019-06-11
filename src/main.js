import Vue from 'vue'
import Buntpapier from 'buntpapier'
import 'roboto-fontface'
import '@mdi/font/css/materialdesignicons.css'

import 'styles/style.styl'

import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Buntpapier)
new Vue({
	render: h => h(App),
}).$mount('#app')
