<template>
    <div class="rooter">
<div>
         <div class="oritation" >
           <div class="background" :style="`background-image: url('${list.coverImgUrl}')`"> </div>
           <img :src="`${list&&list.coverImgUrl}`" alt="">
           <div class="textcontent">
             <span class="highticon">精品歌单</span>
             <p class="one">{{list.name}}</p>
             <p class="two">{{ list.description }}</p>
           </div>
         
        </div> 
         
    </div>
    <div class="distance">
      <!-- 标签导航区 -->
     <tags @tag="tagChange" :tags="tags" class="tag_area"/>
    </div>
    <!-- 标签导航区 -->
     <!-- <tags @tag="tagChange" :tags="tags" class="distance"/> -->
     <!-- 展示区 -->
    <recommentView :dataList="value" class="dis"></recommentView>
    <!-- 分页 -->
   <Pagination :total="total" :queryInfo="queryInfo" @updataData="queryInfoChange"></Pagination>
    </div>
  </template>
  
  <script>
  import recommentView from "@/components/songRecommentlist/index.vue"
   import songHightList from '@/api/songsHightList'
   import tags from '@/components/Tags/index.vue'
   import  Pagination  from "@/components/pagination/index.vue"
  export default {
  name:'songList',
  components:{tags,recommentView,Pagination},
  data() {
    return {
      value:[],
      list:[],
      total:0,
      tags:[ "华语","古风" ,"欧美","流行"],
      queryInfo: {
          tag:'华语',
        // 当前的页数
        pagenum: 1,
        // 当前每次显示多少条数据
        pagesize: 25
      },
    }
  },
 ////////////////////////
 async created(){
  this.playlist(this.queryInfo)
    
  },
///////////////////////////////////
methods:{
  //获取数据
 async  playlist(queryInfo){
    try{
      console.log('新queryInfoValue333333:',this.queryInfo);
        const res= await songHightList(queryInfo)
        console.log('精品歌单为：',res)
        this.list=res.data.playlists[0]
        this.value=res.data.playlists
        this.total=res.data.total
        console.log('list数据',typeof this.value )
       }catch(error){
          console.log(error.message)
       }
  },
  queryInfoChange(obj){
    this.playlist(obj)
  },
  tagChange(val){
    this.queryInfo.tag=val
    console.log('tag更改為:',this.queryInfo.tag)
     this.playlist(this. queryInfo)
  }
},
  }
  </script>
  
  <style lang="scss" scoped>
   .rooter{
    width: 100%;
    margin: 15px 10px;
    overflow: auto;
    height: 500px;
   }
   .oritation{
    display: flex;
    height: 160px; 
    align-items: center;
    position: relative;
    margin: 10px 20px;
    border: 3px solid rgba(69, 65, 65,0.1);
   
    .background{
    background-repeat:no-repeat;
    background-size:cover;
    height: 100%;
    position: absolute;
    width: 100%;
    filter: blur(10px);
    z-index: 0;
    
   }
   img{
      width:130px;
      height: 130px; 
      margin-left: 15px;
      z-index: 1;
     
    } 
   .textcontent{
    margin-left: 30px;
    z-index: 1;
    .highticon{
      border: 1px solid rgb(17, 15, 15);
      border-radius: 10px;
      padding: 5px;
      font-size: 22px;
    }
    p{
      margin-top: 25px;
    }
    .one{
      margin-bottom:15px;
      font-size: 19px;
      white-space: nowrap;//单行显示，强制文本不换行
    }
    .two{
      font-size: 14px;
      overflow: hidden;

      text-overflow: ellipsis;//超出隐藏，显示...
      display: -webkit-box;//将对像作为弹性伸缩盒子模型展示
      -webkit-line-clamp:2 ;//行数
      -webkit-box-orient: vertical;//伸缩盒对象子元素排列方式
    
    }
  
   }
  }
  .distance{
    margin-top: 20px;
    position: relative;
    .tag_area{
    position:absolute;
    right: 20px;
  }
}
  .dis{
    margin-top: 50px;
  }
  
  </style>