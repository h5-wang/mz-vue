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
import Login from './views/login.vue';

// 引入顶部滚动条
import Nprogress from 'nprogress';

// 设置顶部进度条右侧出现小圆圈 默认true
Nprogress.configure({ showSpinner: false });

Vue.use(VueRouter); // 这个方法会调用 vueRouter 的 install 方法，而 install 方法里面就有做全局配置，所以路由可以在全局使用，而且不用注册
let router = new VueRouter({
  mode: 'hash',

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
      // 别名
      alias: '/abc',
      // component: City
      components: {
        top: City,
        default: Detail
      }
    },
    {
      path: '/detail/:id',
      component: Detail,
      // props: true
      props: {
        name: '张三',
        age: 19
      }
    },
    {
      path: '/card/:id',
      component: {
        render (h) {
          var that = this;
          return h('div', [
            '卖座卡页面',
            h('button', {
              on: {
                click: function () {
                  console.log('我被点击了');
                  that.reload();
                }
              }
            }, [
              '我的天',
              h('span', '我是一个标签')
            ])
          ])
        },
        methods: {
          reload () {
            console.log('我被执行了');
            router.push('/card/李四');
          }
        },
        // 组件内的路由守卫函数
        beforeRouteEnter (to, from, next) {
          console.log('Enter');
          next();
        },
        // 只会在页面使用了路由参数的时候才会被触发  /card/100  ->  /card/200
        beforeRouteUpdate (to, from, next) {
          console.log('Update');
          next();
        },
        beforeRouteLeave (to, from, next) {
          console.log('Leave');
          next();
        }
      }
      // 路由独自享有的钩子函数 使用时需要关掉全局前置守卫和后置守卫
      // beforeEnter (to, from, next) {
      //   // 设置false 会导致路由被拦截，无法进入 card 页面
      //   next(false);
      // }
    },
    {
      path: '/money',
      component: {
        render (h) {
          return h('div', '余额页面')
        }
      }
    },
    {
      path: '/system',
      component: {
        render (h) {
          return h('div', '设置页面')
        }
      }
    },
    {
      path: '/login',
      component: Login
    },
    // 设置一个通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会和它匹配
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

// 全局前置守卫
/*
  路由守卫中
  a ->  b
  to 将要去的路由的路由对象         a
  from  从哪里来的路由的路由对象    b
  next  是否允许去       next() 允许    next（false）  不允许（或则不使用next）
*/
/*
router.beforeEach((to, from, next) => {
  // 调用 Nprogress 的 start 方法
  Nprogress.start();

  if (to.path === '/card' || to.path === '/money' || to.path === '/system') {
    // next(false);
    // next('/login');  字符串模式
    next({
      // 对象模式
      path: '/login'
    })
  } else {
    next();
  }
})
*/
// 全局后置守卫
// router.afterEach((to, from, next) => {
//   Nprogress.done();
// })
export default router;
