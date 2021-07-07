import Vue from 'vue'
import App from './App'
import openApp from './common/openApp.js'

Vue.config.productionTip = false

App.mpType = 'app'
openApp()
const app = new Vue({
    ...App
})
app.$mount()
