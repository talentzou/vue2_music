<template>
    <div class="list">
        <div class="item"
        v-for="obj in list"
        :key="obj.id">
            <img 
       :src="obj.picUrl"
        alt=""  
        width="160px"
       > 
       
       <span>{{ obj.name }}</span>
       
        </div>
</div>
    
  </template>
  
  <script>
  import { personlized} from '@/api/personlized'
  export default {
  name:'recommentView',
  data(){
    return{
        list:[]
    }
  },
  async created(){
    const res= await personlized({limit:24})
    this.list=res.data.result
    console.log('推荐歌单',res)
  
  }
  }
  </script>
  
  <style scoped>
  .list{
    display: flex;
    margin: 20px 80px;
    justify-content: center;
    flex-wrap: wrap;
  }
.item{
    
  width: 160px;
  /* text-align: center; */
  margin: 10px auto;
 
  
}

  
  </style>
