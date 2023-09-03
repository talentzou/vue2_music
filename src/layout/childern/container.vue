<template>
    <div id="main" >
        <!-- 各项推荐导航栏 -->
        <tabbarView 
               :recommentItem="recommentItem"
               :routerItem="routerItem">
              </tabbarView>
        <!-- 三级路由 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
  </template>
  
  <script>
 
  import tabbarView from "@/components/navbar/index.vue"
  export default {
  name:'containView',
  components:{tabbarView},
  data() {
    return {
          recommentItem:['个性推荐','歌单','排行榜','最新音乐','歌手'],
          routerItem:['personRecommend','songList','rangSong','newSong','singerList'],   
    }
  },
 
  }
  </script>
  
  <style scoped>
  
 
  #main{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    padding: 0 10px;
  }
  #main::-webkit-scrollbar{
    width: 10px;
    height: 2px;
  }
  #main::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: #406dab;
  }
  .display {
    flex: 1;
  }
  .el-carousel__item h3 {
    color: #7a8ea7;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel{
    margin: auto 30px;
  }
  </style>