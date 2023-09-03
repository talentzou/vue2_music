<template>
    <div>
        <el-header class="tabbar" >
           <div 
                v-for="(obj,index) in recommentItem" 
                :key='index'
                @click="select(index)"
                :class="{ item: listIndex === index }"><!--是应用在每个 元素上的绑定表达式，它的作用是判断当前选项是否为活动选项（即选中状态），如果是则添加 .item 类，否则不添加。 -->
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
    routerItem:{
      type:Array
    }
  },
  data() {
    return {
          routerList:this.routerItem,
          listIndex:0,//控制导航文字
          listIndexTwo:0//控制路由跳转是否相同
    }
  },
 
   methods:{
    select(index){
       this.listIndex=index
      //  this.$emit('routerKey',index)
      this.routerRoate(index)
    },
    routerRoate(index){
    
   //判断路由是否是同一个
       if(this.routerList[this.listIndexTwo]!==this.routerList[index])
          { 
            console.log('进去index:')
            this.listIndexTwo=index
            this.$router.push(this.routerList[index]
            )
         }
    }
    
     },
  }
  </script>
  
  <style scoped lang="scss">
   .tabbar{
    display: flex;
    align-items: center;
    span{
      margin:0 20px;
      font-size: 80px;
    }
  }
  .el-header {
    margin-top: 20px;
}
/* 点击样式 */
.item {
    padding: 2px;
    font-size: 30px;
    color: rgb(33, 29, 29);
    padding: 3px;
    text-decoration: underline rgb(46, 184, 199);
  
}
  </style>