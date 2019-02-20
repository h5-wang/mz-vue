<template>
  <div>
    <MzBenner></MzBenner>
    <MzTables></MzTables>
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
  }
};
</script>
