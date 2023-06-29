<template>
    <div id="main">
    
       
        <!-- 各项推荐导航栏 -->
        <tabbarView 
               :recommentItem="recommentItem"
               @routerKey="routerROate"
               :routerItem="routerItem"
               :songIndex=" activeIndex">
              </tabbarView>
        <!-- 三级路由 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        
          
    </div>
  </template>
  
  <script>
  import tabbarView from "@/components/tabbar/index.vue"
  export default {
  name:'containView',
  components:{tabbarView},
  data() {
    return {
        
          recommentItem:['个性推荐','歌单','排行榜','最新音乐','歌手'],
          routerItem:['personRecommend','songList','rangSong','newSong','singerList'],
          activeIndex:0,
         
    }
  },
 
   methods:{
   routerROate(index){
   
    //判断路由是否是同一个
    if(this.routerItem[this.activeIndex]!==this.routerItem[index])
           { 
            this.$router.push(this.routerItem[index])
          }
          this.activeIndex=index
     }
     
      
     
   }
    
  }
  </script>
  
  <style scoped>
  
 
  #main{
    overflow: hidden;
    height: 600px;
  }
  #main::-webkit-scrollbar{
    width: 10px;
    height: 2px;
  }
  #main::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: #406dab;
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