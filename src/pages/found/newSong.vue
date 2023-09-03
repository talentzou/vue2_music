<template>
    <div class="space">      
      <!-- 标签导航区 -->
     <tags @tag="tagChange" :tags="tags" class="distance"/>
     <div class="title">
      <span  @click="titleChange" class="background" id="one">新歌速递</span>
      <span @click="titleChange"  id="two">新碟上架</span>
    </div>
    <!-- 新歌速递 -->
       <tableData v-show="stateDisplay" :tableData=" newMusicDataList"></tableData>
      <!-- 新专辑 -->
        <newAlbum :dataList="newSongsList" v-show="!stateDisplay"></newAlbum>
    </div>
     
  </template>
  
  <script>
  import {album, newMusic} from '@/api/found/newSongs'
  import {newMusicDate} from '@/api/found/newSongs'
  import tags from '@/components/Tags/index.vue'
  import tableData from '@/components/table/tableData';
  import newAlbum from "@/components/songRecommentlist/index.vue"
  export default {
  name:'newSong',
  components:{tags,tableData, newAlbum },
  data() {
    return {
      tags:["全部", "华语","日本" ,"欧美","韩国"],
      language:['All','ZH','JP','EA','KR'],
      type:[0,7,8,96,16],
      title:[],
      newSongsList:[],//  新专辑提取
     // newSongs:[],//  新专辑存放数据
      newMusicList:[], //新歌速递提取
      newMusicDataList:[],//新歌速递数据存放
      stateDisplay:true,
      info:{
        area:'全部',
        type:0

      }
    }
  },
  methods: {
    //歌曲||专辑分类
    tagChange(index) {
        console.log("tag更改为:", index);
        this.info.area=this.language[index]
        this.info.type=this.type[index]
        // console.log('新info数据为:',this.info)
        //  console.log('数据TAGS调用:',)
        this.newSongs=[]
        this.newMusicDataList=[]
        this.dataNewSongs()
        this.newMusicData()
    },
  //  新专辑
    async dataNewSongs(){
      const res=await album(this.info)
      this.newSongsList=res.data.monthData.slice(0,24)
      // console.log('新专辑数据为:',this.newSongsList)
    
     },
     //新歌速递
     async newMusicData(){
        const res=await newMusic(this.info)
        // console.log('新歌数据为:',res)
        this.newMusicList=res.data.data.slice(0,50)
        // console.log('新专辑数据为:',this.newMusicList)
        this.newMusicList.forEach((arr=>{
        this.newMusicDataList.push(new newMusicDate(arr))
      }))
     },
     //展示数据页面切换
     titleChange(){
         this.stateDisplay=!this.stateDisplay
        //  console.log('fvvcvvccthis',this.stateDisplay)
         const titleOne=document.getElementById('one')
         const titleTwo=document.getElementById('two')
         if(this.stateDisplay){
            this.newMusicData()
        }else{
           this.dataNewSongs()
      }
        titleOne.classList.toggle('background')
        titleTwo.classList.toggle('background')
     }
  },
  created(){
    this.newMusicData()
  }
 
  }
  </script>
  
  <style scoped lang="scss">
  .space{
    overflow: auto;
    flex: 1;
  }
   .distance{
    margin-bottom: 25px;

   }
  .title{
   text-align: center;
   margin:30px 0;
   span{
     border: 1px solid rgba(137, 134, 134 ,0.5);
     border-radius:10px;
     margin-left: 20px;
     color:black;
   }
   .background{
    background: rgb(118, 113, 113);
   }
  }
  </style>