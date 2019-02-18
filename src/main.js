import Vue from 'vue'
import App from './App.vue'
// 让浏览器的console里不会出现开发提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
