<template>
  <div>
      <router-view name="top"></router-view>
      <router-view ></router-view>
  </div>
    <!-- <div>
        放置一个坑，后面页面且切换（路由的切换）就会按照路由配置表的内容去渲染这个坑的内容
        <router-view></router-view>
         url地址会渲染对应的组件
          localhost：8080/#/Fimles    Fimles.vue组件

         <MzFooter></MzFooter>
    </div> -->
</template>
