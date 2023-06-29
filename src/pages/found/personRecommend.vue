<template>
<div id="main">
        <banner_></banner_>
       <div class="space">
        <span>推荐歌单</span>
       </div>
      <!-- 推荐歌单 -->
       <recommentView :dataList="personList"></recommentView> 
</div>   
</template>
<script>
  // import {banner} from "@/api/banner"
  import recommentView from "@/components/songRecommentlist/index.vue"
  import banner_ from "@/components/banner/index.vue"
  import { personlized} from '@/api/personlized'
  export default {
  name:'personRecommend',
  components:{recommentView,banner_},
  data() {
    return {
   
          personList:[],
          Item:['个性推荐','歌单','排行榜','最新音乐','歌手'],
          activeIndex:'',
         
    }
  },
 
   methods:{
    select(index){
      this.activeIndex=index
    }
  
   },
   async created(){
    const res= await personlized({limit:24})
    this.personList=res.data.result
    console.log('推荐歌单',res)
  
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