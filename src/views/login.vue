<template>
  <div>
    <h1>我是登录页面</h1>
    <input type="text" placeholder="用户名" v-model="username">
    <input type="password" placeholder="密码" v-model="password">
    <button @click="handLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handLogin () {
      // 登录要想后台发送get请求，所以要引入axios
      axios.post('http://localhost:3000/user/login', {
        userName: this.username,
        password: this.password
      }).then(res => {
        console.log(res);
        var data = res.data;
        if (data.code === 0) {
          // 登录成功之后，保存数据 nickName
          sessionStorage.setItem('nickName', 'data.data.nickName');
          // 跳转页面，这个页面应该是登录之前想要去的页面
          // this.$router.push('/card');    这是默认固定的跳转路径
          // 在点击那三个页面的时候将它们（a标签）保存下来，在前置守卫中可以调用，以保证登录之后可以返回想去的页面
          // this.$router.push({
          //   path: this.$route.query.redirect
          // })
          // 使用 replace 代替 push login登录页面不会重复出现
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          alert(data.msg);
        }
        console.log(data);
      })
    }
  }
}
</script>
