<template>
  <div class="swiper-container mz-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item._id">
        <img :src="item.imgUrl" alt>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 使用axios调用后台的接口 http://localhost:3000/banner/search
// 1.引入axios
import axios from 'axios';
// 2.调用axios.get('http://localhost:3000/banner/search')
export default {
  data () {
    return {
      bannerList: [],
      // swiper的实例对象
      mySwiper: null
    };
  },
  methods: {
    initSwiper () {
      /* 对某段代码不校验 eslint 的规则 */
      /* eslint-disable */
      this.mySwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
      /* eslint-enable */
    }
  },
  created () {
    var that = this;
    axios
      .get('http://localhost:3000/banner/search', {
        // params 才是 get 的参数
        params: {
          pageSize: 10
        }
      })
      .then(res => {
        // 这里的res不是后台返回的数据，真正的后台数据在 res.data 上
        console.log(res);
        let data = res.data;
        if (data.code === 0) {
          that.bannerList = data.data;

          // 1,数据更新之后，对轮播图做一个更新
          // this.$nextTick(() => {
          //   this.mySwiper.update();
          // });
          // 2,数据更新之后再 new Swiper（数据更新完到真实Dom更新中间还需要一点时间） $nextTick() 这个函数可以确保真实dom的更新
          this.$nextTick(() => {
            this.initSwiper();
          });
        } else {
          alert('网络异常，请稍后重试')
        }
      });
  },
  mounted () {
    // console.log(this.$el);
  }
};
</script>

<style lang="less">
.mz-banner {
  height: 210px;
}
img {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet{
  opacity: 1;
}
</style>
