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
import Center from './views/Center.vue';
import City from './views/City.vue';
import Home from './views/Home.vue';
import Detail from './views/Detail.vue';

Vue.use(VueRouter); // 这个方法会调用 vueRouter 的 install 方法，而 install 方法里面就有做全局配置，所以路由可以在全局使用，而且不用注册
let router = new VueRouter({
  mode: 'history',

  //  路由对照表   url ->  视图组件
  /** localhost:8080/#/Fmles    ->  Fimles.vue
   * localhost:8080/#/Cinema    ->  Cinema.vue
   * localhost:8080/#/Center    ->  Center.vue
   */
  routes: [
    { // path 路径定义为 '/' 的话，二级路由追加上来的地址就可以省略一个 '/'
      // 主页
      path: '/',
      component: Home,
      children: [
        // 不是一级路由的话，path中的路径不加 '/'
        /**
         * 二级或二级以上的路由，它们的url地址是在一级路由的基础上追加的
         * localhost：8080/#/fimles
         */
        {
          path: 'Fimles', // 就是 url 的路径
          component: Fimles // 所要渲染的组件
        },
        // localhost：8080/#/cinema
        {
          path: 'Cinema',
          component: Cinema
        },
        // localhost：8080/#/center
        {
          path: 'Center',
          component: Center
        },
        {
          // 重定向  localhost：8080/#/   定向到    lcoalhost：8080/#/fimles
          path: '',
          // component: Fimles
          redirect: '/fimles'
        }
      ]
    },
    {// 城市选择页
      name: 'hhh',
      path: '/city',
      component: City
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '*',
      redirect: '/fimles'
    }
    // {
    //   path: '/Fimles', // 就是 url 的路径
    //   component: Fimles
    // },
    // {
    //   path: '/Cinema',
    //   component: Cinema
    // },
    // {
    //   path: '/Center',
    //   component: Center
    // },
    // {
    //   path: '/City',
    //   component: City
    // }
  ]
})

export default router;
