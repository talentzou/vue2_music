<template>
  <div>
    <div class="list">
        <div class="item"
        v-for="obj in dataList"
        :key="obj.id">

        <div class="origin">
          <img :src="obj.picUrl||obj.coverImgUrl" alt="" width="160px" class="variable" /> 
          <playCount :dataCount="obj.playCount" class="location"/>
          <i class="el-icon-video-play"></i>
        </div>
        <!-- <span>{{ obj.name }}</span> -->
        <p>{{ obj.name }}</p>
        
      </div>
     <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
    </div>
   
      
</div>
    
  </template>
  
  <script>
  //import { personlized} from '@/api/personlized'
  import playCount from './childern/playCount.vue'
  export default {
  name:'recommentView',
  props:{
    dataList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{playCount},
  data(){
    return{
        list:[]
    }
  },
  
  }

  </script>
  
  <style lang="scss" scoped>
  .list{
    display: flex;
    margin: 0 30px;
    justify-content: center;
    flex-wrap: wrap;
    
  }
.item{
  width: 160px;
  margin: 15px 12px;
}
.origin{
  position: relative;
    .img:hover{
      width: 120%;
    }
  }

.location{
   position: absolute;
   top: 8px;
   right: 10px;
  
}


.el-icon-video-play{
  opacity: 0;
  position: absolute;
  bottom: 25px;
  right: 12px;
  font-size: 30px;
 
  border-radius: 50%;
   &:hover{
    opacity: 1;
    background-color: rgba(237, 238, 227, 0.4);
   }
}

  
  </style>
