<template>
    <div>
        <el-header class="tabbar" >
           <div 
                v-for="(obj,index) in recommentItem" 
                :key='index'
                @click="select(index)"
                :class="{ item: activeIndex === index }"><!--是应用在每个 元素上的绑定表达式，它的作用是判断当前选项是否为活动选项（即选中状态），如果是则添加 .item 类，否则不添加。 -->
                <span>{{ obj }}</span>
           </div>
        </el-header>
    </div>
  </template>
  
  <script>
  export default {
  name:'tabbarView',//个人推荐导航栏
  props:{
    recommentItem:{
        type:Array
    },
    // songIndex:{
    //     type:Number
    // }
  },
  data() {
    return {
   
          personlized:[],
      
          activeIndex:'',
         
    }
  },
 
   methods:{
    select(index){
      this.activeIndex=index
      this.$emit('routerKey',index)
    },
    
     },
  }
  </script>
  
  <style scoped>
   .tabbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .el-header {
    margin-top: 20px;
}
/* 点击样式 */
.item {
    padding: 2px;
    font-size: 20px;
    color: rgb(115, 176, 223);
    padding: 3px;
    border-bottom: 2px solid skyblue
}
  </style>