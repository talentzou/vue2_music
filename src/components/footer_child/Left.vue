<template>
    <div class="root">

      <div>
        <img :src="img && img.al && img.al.picUrl" alt="" width="80px">
      </div>
     <div class="title" v-if="img.length!==0">
       <h3>{{ img.name }}  </h3>
       <h3 class="space">{{ img.ar[0].name }}</h3> 
     </div>
    
    </div>
  </template>
  
  <script>
       
import axios from 'axios'
  export default {
  name:'left_childs',
  data() {
    return {
      id:'',
      img:[],
    
    }
  },
  methods:{
        dataone(){
          this.$bus.$on('message',(data)=>{
          //console.log("接受数据成功")//接受数据成功
           this.id=data
          axios({
        method:'GET',
        url:"http://localhost:3000/song/detail",
        params:{
          ids:this.id
        }
      }).then(response=>{
          const res=response.data.songs[0]
          this.img=res  
      },error=>{
      console.log(error.message)
    })
        })
        },
        datatwo(){
          console.log('传过照片id为',this.id)
        }
       
  },
  watch:{
    id(){
      console.log('监听',this.id)
    }
  },
  mounted(){
    this.dataone()
    this.datatwo()
  },
  created(){
   
  },
  computed:{
   
  }
  }
  </script>
  
  <style scoped>
   .root{
    display: flex;
    position: relative;
   
   }
   .title{
    position: absolute;
    padding: 10px 0;
    left: 85px;
   
   }
  .space{
    margin-top: 15px;
   }
  </style>