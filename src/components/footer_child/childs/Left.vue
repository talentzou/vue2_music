<template>
    <div class="root">

      <div class="picture">
        <img :src="img&&img.al&&img.al.picUrl" alt="照片为空">
         <span   class="songname">{{ img.name?img.name:songName}}</span>
         <span  class="singername">{{img&&img.ar&& img.ar[0].name?img.ar[0].name: singerName}}</span>
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
      singerName:"暂无数据",
      songName:"暂无数据",
    
    }
  },
  methods:{
    
  },
 
  

  watch:{
    data(){
      console.log('传过来data数据为',this.data)
      if(this.data&&this.data[0]&&this.data[0].ar[0]!==null)
      {
        this.img=this.data[0]
        this.singerName=this.data[0].name
        this.songName=this.data[0].ar[0].name
      }
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