import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import './assets/styles/reset.less';
// 让浏览器的console里不会出现开发提示
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
