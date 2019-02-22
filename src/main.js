import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import './assets/styles/reset.less';

// 引入的 nprogress.css 文件必须要放在 common.less 文件前面
import 'nprogress/nprogress.css';
import './assets/styles/common.less';
// 让浏览器的console里不会出现开发提示
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
