<template>
<div id="main">
        <banner_></banner_>
       <div class="space">
        <span>推荐歌单</span>
       </div>
      <!-- 推荐歌单 -->
       <recommentView></recommentView> 
</div>   
</template>
<script>
  // import {banner} from "@/api/banner"
  import recommentView from "@/components/main_recmmentlist/index.vue"
  import banner_ from "@/components/banner/index.vue"
  export default {
  name:'personRecommend',
  components:{recommentView,banner_},
  data() {
    return {
   
          personlized:[],
          Item:['个性推荐','歌单','排行榜','最新音乐','歌手'],
          activeIndex:'',
         
    }
  },
 
   methods:{
    select(index){
      this.activeIndex=index
    }
  //   getapi(){
  //     axios.get('http://localhost:3000/').then(
  //       response=>{console.log(response.data)}
  //       ,error=>{
  //         console.log(error.message)
  //       }
  //     )
  //   }
   }
  }
  </script>
  
  <style scoped>
  .space{
    margin:15px 20px;
    font-size: 25px;
  }
 
  #main{
    overflow: auto;
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
  .tabbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  /* .menu_distance{
   
   background-color: #395b7c;
   line-height: 100px;
   width:100%;
  } */
  .el-header {
    margin-top: 20px;
}
  

.item {
    padding: 2px;
    font-size: 20px;
    color: rgb(115, 176, 223);
    padding: 3px;
    border-bottom: 2px solid skyblue
}

  .el-carousel__item h3 {
    color: #7a8ea7;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #7187b3;
  } */
 
  .el-carousel{
    margin: auto 30px;
  }
  </style>