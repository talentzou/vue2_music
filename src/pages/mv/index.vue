<template>
  <div class="viewport">
        <!-- 导航栏 -->
      <tabbarView :recommentItem="nav" :routerItem="routerItem"></tabbarView>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  
  </div>
</template>
<script>
import tabbarView from "@/components/navbar/index.vue"
export default{
  name:'videoView',
  components:{tabbarView},
  data() {
    return {
        nav:['网易出品','排行榜','最新Mv'],
        routerItem:['officialRecommend','mvRang','newMv']
    }
  },
}
</script>
<style lang="scss" scoped>
  .viewport {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>