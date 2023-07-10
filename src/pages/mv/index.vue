<template>
  <div>
    
      <tabbarView :recommentItem="nav"   :routerItem="routerItem"></tabbarView>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  
  </div>
</template>
<script>
import tabbarView from "@/components/tabbar/index.vue"
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
  
</style>