// 这是一个一级路由，包裹着 fimles，center，cinema 这些个二级路由
<template>
  <div>
    <!-- 这里得要有个坑，渲染fimles，center，cinema等二级路由 -->
    <router-view></router-view>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzFooter from '../components/MzFooter/index.vue';
export default {
  components: {
    MzFooter
  }
};
</script>
