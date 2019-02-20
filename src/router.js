// 这里是 vue-router 的配置文件

/**
 * 引入 vue
 * 引入 vue-router
 * 使用 vue.use（vue.router）
 * 路由配置
 * 暴露这个配置
 */

import Vue from 'vue'; // 因为第三步需要用到 vue 的实例方法，所以要引入 vue
import VueRouter from 'vue-router';
import Fimles from './views/Fimles.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue'

Vue.use(VueRouter); // 这个方法会调用 vueRouter 的 install 方法，而 install 方法里面就有做全局配置，所以路由可以在全局使用，而且不用注册
let router = new VueRouter({
  //  路由对照表   url ->  视图组件
  /** localhost:8080/#/Fmles    ->  Fimles.vue
   * localhost:8080/#/Cinema    ->  Cinema.vue
   * localhost:8080/#/Center    ->  Center.vue
   */
  routes: [
    {
      path: '/Fimles', // 就是 url 的路径
      component: Fimles
    },
    {
      path: '/Cinema',
      component: Cinema
    },
    {
      path: '/Center',
      component: Center
    }
  ]
})

export default router;
