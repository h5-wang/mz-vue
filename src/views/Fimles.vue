<template>
  <div>
    <MzBenner></MzBenner>
    <MzTables></MzTables>
    <ul>
      <router-link tag="li" to="/detail/100">浏览地球</router-link>
      <router-link tag="li" to="/detail/200">一路惊喜</router-link>
      <router-link tag="li" to="/detail/300">喜剧之王</router-link>
    </ul>
    <button @click='goCity'>跳转至城市选择页面</button>
    <div id="box"></div>
  </div>
</template>

<script>
import MzBenner from '../components/MzBanner';
import MzTables from '../components/MzTables';
export default {
  // 局部注册组件
  components: {
    MzBenner,
    MzTables
  },
  methods: {

    goCity () {
      this.$router.replace('/city');
      // 字符串跳转
      // // this.$router.push('./City');
      // // 对象方式
      // this.$router.push({
      //   // 根据你定义的 path
      //   path: '/city',
      //   // 路由传参
      //   // params: {
      //   //   id: 10
      //   // },
      //   // 查询字符串传参 url?id=10(自动添加)
      //   query: {
      //     id: 10
      //   }
      //   // 命名路由
      //   // name: ''
      // })
    }
  }
}
</script>

<style lang="less">
  #box{
    height: 1000px;
  }
</style>
