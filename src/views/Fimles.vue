<template>
  <div>
    <MzBenner></MzBenner>
    <MzTables></MzTables>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzBenner from '../components/MzBanner';
import MzTables from '../components/MzTables';
import MzFooter from '../components/MzFooter';
export default {
  // 局部注册组件
  components: {
    MzBenner,
    MzTables,
    MzFooter
  }
};
</script>
