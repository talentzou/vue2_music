<template>
    <div class="space">      
      <!-- 标签导航区 -->
     <tags @tag="tagChange" :tags="tags" class="distance"/>
      <!-- 表格展示 -->
      <TableView class="padding" :tableData="newSongs"/>
    </div>
     
  </template>
  
  <script>
  import request from '@/api/newSongs'
  import {songMessage} from '@/api/newSongs'
  import tags from '@/components/Tags/index.vue'
  import TableView from '@/components/table/index.vue'
  export default {
  name:'newSong',
  components:{tags,TableView},
  data() {
    return {
      tags:["全部", "华语","日本" ,"欧美","韩国"],
      language:['All','ZH','JP','EA','KR'],

      title:[],
      newSongsList:[],
      newSongs:[],
      info:{
        area:'全部',

      }
    }
  },
  methods: {
    tagChange(index) {
      console.log("tag更改为:", index);
       this.info.area=this.language[index]
       console.log('新info数据为:',this.info)
        console.log('数据TAGS调用:',)
        this.newSongs=[]

       this.dataNewSongs()
    },
    // async dataNewSongs(){
    //   const res=await request(this.info)
    //   this.newSongsList=res.data.result
    //   console.log('新歌数据为:',this.newSongsList)
    //   // 遍历数组内容
    //   this.newSongsList.forEach((value)=>{
    //     // console.log('数据北调用:',value)
    //     this.newSongs.push(new songMessage(value))
    //   })
    //  }
    async dataNewSongs(){
      const res=await request(this.info)
      this.newSongsList=res.data.monthData.slice(0,50)
      console.log('新歌数据为:',this.newSongsList)
      // 遍历数组内容
      this.newSongsList.forEach((value)=>{
        // console.log('数据北调用:',value)
        this.newSongs.push(new songMessage(value))
      })
     }
  },
  created(){
    this.dataNewSongs(this.info)
  }
 
  }
  </script>
  
  <style scoped>
  .space{
    overflow: auto;
    height: 500px;
  }
   .distance{
    margin-bottom: 25px;

   }
   /* .padding{
     padding: 20px;
   } */
  </style>