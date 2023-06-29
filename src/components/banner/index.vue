<template>
    <div>
        <div>
            <template>
              <el-carousel :interval="4000" type="card" height="200px" width="100px">
                <el-carousel-item v-for="item in banner" :key="item.id">
                  <img  
                  height="200px"
                  width="100%"
                  :src="item.imageUrl">
                </el-carousel-item>
             </el-carousel>
            </template>
          </div>
    </div>
  </template>
  
  <script>
  import {banner} from "@/api/banner"
  export default {
  name:'banner_',
  data(){
      return{
        banner:[]
      }
  },
  async created(){
    const res= await banner({limit:6})
   
    console.log('轮播图',res)
    this.banner=res.data.banners;
  },
  }
  </script>
  
  <style scoped>
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