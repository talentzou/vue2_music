<template>
    <div>
        <!-- 热门搜索列表 -->
        <div v-if="hotSearchList.length!==0">
            <p class="hot_title">热门搜索</p>
            <ul class="songs_item">
                <li v-for="(obj,index) in hotSearchList" 
                :key="index"
                class="border_i">  {{ obj.first }}</li>
            </ul>
        </div>
       
       
    </div>
  </template>
  
  <script>
import request from '@/utils/request'
  export default {
  name:'songItemList',
  props:['msg'],
  data() {
        return {
         hotSearchList:[],
         serchResult:[],
         searchKey:'',
        
         }
},
 async created(){
   await request({
    url:"/search/hot",
    params:{
        keywords:this.msg
    }
   }).then(response=>{
    console.log('歌单热搜列表',response.data)
    this.hotSearchList=response.data.result.hots

   },error=>{
    console.log('歌单热搜列表错误',error.message)
   })
   
},


methods:{
 
},
mounted(){
   
 
}

  }
  </script>
  
  <style scoped>
.songs_item{
    
    display: flex;
    flex-wrap: wrap;
   }
   .border_i{
    margin: 8px 10px;
    border: 2px solid rgba(228, 225, 223, 0.7);
    border-radius: 10px;
   }
  </style>