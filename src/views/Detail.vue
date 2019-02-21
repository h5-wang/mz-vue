<template>
  <div>
    <h1>这里是详情页</h1>
    <div>当前影片的id 是 {{id}}</div>
  </div>

</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    age: Number
  },
  created () {
    // 根据得到的影片的 id 去后台取数据
    console.log(this.$route.params.id);
    console.log(this.$router);
  }
}
</script>
