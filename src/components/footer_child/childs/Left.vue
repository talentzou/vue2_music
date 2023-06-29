<template>
    <div class="root">

      <div class="picture">
        <img :src="img&&img.al&&img.al.picUrl" alt="照片为空">
         <span   class="songname">{{ img.name?img.name:songname}}</span>
         <span  class="singername" >{{img&&img.ar&& img.ar[0].name?img.ar[0].name: singername}}</span>
      </div>
       
    
    </div>
  </template>:
  
  <script>
     

  export default {
  name:'left_childs',
  props:['data'],
  data() {
    return {
      id:'',
      img:[],
      singername:"暂无数据",
      songname:"暂无数据",
    
    }
  },
  methods:{
    
  },
 
  

  watch:{
    data(){
      console.log('data数据为',this.data)
      this.img=this.data
    },
    
   
  },
 
  }
  </script>
  
  <style lang="scss" scoped>
   .root{
    display: flex;
    position: relative;
    
   
   }
   .picture{
    display: flex;
    align-items: center;
    width: 180px;
    img{
      width: 60px;
      height: 60px;
    }
    .songname{
    position: absolute;
    top:15px;
    right: 20px;
    
   }
   .singername{
    position: absolute;
    right: 20px;
    margin-top: 30px;
   }

   }
  
  .space{
    margin-top: 15px;
   }
  </style>