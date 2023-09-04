<template>
    <!-- 歌手导航栏 -->
    <div class="horizon">
       <span>{{ title }}:</span>
       <div v-for="(obj,index) in list" :key="index" class="navText" >
        <span :class="{item:indexActive===index}" class="text-title"
              @click="change(index)">{{ obj }}</span>
       </div>
    </div>
  </template>
   
  <script>
  export default {
    // 歌手导航栏
  name:'navbar_',
  props:{
     title:{
        type:String
     },
     list:{
        type:Array
     }
  },
  data() {
    return {
        indexActive:0,
    }
  },
  methods:{
    change(index){
        this.indexActive=index;
        this.$emit('changeIndex',index)
        console.log('事件被处发了')
    }
  }
}
  </script>
  
  <style lang="scss" scoped>
   .horizon{
    display: flex;
    margin: 15px 0;
   }
   .navText{
    margin-left: 15px;
    font-size: 20px;
    .item{
        color: rgb(227, 42, 42);
    }
   }

  </style>