<template>
    <div class="horizon">
      <div v-for="obj in dataImg" :key="obj.id" class="distance">
        <img :src="obj.picUrl" alt="11111"  class="img">
        <p>{{ obj.name }}</p>
      </div>
    </div>
  </template>
   
  <script>
  export default {
  name:'singer_img',
  props:{
      dataImg:{
        type:Array,
        default(){
            return []
        }
    
      }
  }
  }
  </script>
  
  <style scoped>
  .horizon{
    display: flex;
    flex-wrap: wrap;
  }
  .distance{
    margin: 20px 25px;
  }
   .img{
    width: 160px;
    height: 160px;
    object-fit: contain;
   }
  </style>