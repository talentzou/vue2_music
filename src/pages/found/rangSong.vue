<template>
    <div class="container">
     <!-- <div v-for="obj in list1" :key="obj.id">
      <img :src="`${obj&&obj.coverImgUrl}`" alt="" class="authorityList">
     </div> -->
     <!-- <div class="horizontalLine">
      <div v-for="obj in list2" :key="obj.id" class="horizontalLine">
      <img :src="`${obj&&obj.coverImgUrl}`" alt="" class="globalList">
      <span>{{  }}</span>
     </div>
     </div> -->
     <span> 官方榜单</span>
      <!-- 官方榜单展示区 -->
    <recommentView :dataList="list1"></recommentView>
      <!-- 全球榜单展示区 -->
      <span> 全球榜单</span>
    <recommentView :dataList="list2"></recommentView>
    </div>
  </template>
  
  <script>
  import recommentView from "@/components/songRecommentlist/index.vue"
  import request from '@/api/toplist'
  // import _ from 'lodash'
  export default {
  name:'rangSong',
  components:{recommentView},
  data() {
    return {
      rangList:[],
      list1:[],
      list2:[]
    }
  },
  created(){
    this.rangData()
  },
  methods:{
      async rangData(){
          const res=await request()
          console.log('排行旁數據:',res)
          this.rangList=res.data.list
          console.log('ranglist数据类型为:',typeof this.rangList)
          //截取前面4个数据
          this.list1=this.rangList.slice(0,4)
          console.log('list1111数据为:', this.list1)
          // 截取后面数据
          this.list2=this.rangList.slice(4)
          console.log('list222数为:', this.list2)
         
        }
  }
  }
  ///
  </script>
  
  <style lang="scss" scoped>
  .container{
  overflow: auto;
  height: 500px;
  margin:20px 15px;
  span{
    font-size: 30px;
    color: rgb(26, 20, 20);
  }
  
  }

   
  
  </style>