<template>
   <div class='viewport'>
    <!-- 歌单简介 -->
    <Detail :songDetail="dataSongList" :dynamicSong="dynamic"></Detail>
    <div >
      <span class="title">歌曲列表</span>
      <span class="count">{{ count }}首歌</span>
      <span class="playCount" >播放：{{ playCount }}次</span>
    </div>
    <!-- 表格数据 -->
    <tableData :tableData="datas"></tableData>
    </div>
  </template>
  
  <script>
  import {songListDetail,dynamicList, trackAll,detailMessage} from '@/api/detail/songDetail'
  import Detail from '@/components/songListDetail/introduce.vue';
  import tableData from '@/components/table/tableData';////
  export default {
  name:'songDetail',
 components:{Detail, tableData},
 //
  data() {
    return {
      dataSongList:{},//歌單詳情
      dynamic:{},//歌单详情动态
      songLists:[],//歌单歌曲列表
      datas:[],//获取歌曲信息
      musicId:[],
      count:0,
      id:'',
      ids:''
      
    }
  },
  created(){
     this.dataID()
     if(this.id){
     this.songListMessage()
     this.songDynamicList()
     this.songListAll()
     }
  },
  
  methods:{
   async songListMessage(){
    //   <!-- 歌单简介 -->
   
        const res=await songListDetail(this.id)
        console.log('数据来了1111',res)
        this.dataSongList=res.data.playlist
        console.log('数据改变来了1111',this.dataSongList)
    },
     // //歌单动态信息
     async songDynamicList(){
       const res2=await dynamicList(this.id)
        console.log('数据来了22222',res2)
        this.dynamic=res2.data
        console.log('数据改变来了22222',this.dynamic)
     },
     //歌单所有歌曲
       async  songListAll(){
          const res3=await  trackAll(this.id)
          console.log('数据来了33333',res3)
          this.songLists=res3.data.songs
          console.log('歌曲数目',this.songLists)
          this.songLists.forEach((value)=>{
          this.count+=1;
          this.datas.push(new detailMessage(value))
          this.datas.forEach((value)=>{
            // console.log('hshshshsh',value.songId)
            this.musicId.push(value.songId)
          })
          this.$store.commit('playAudio/songsListId',this.musicId)
          this.musicId=[]
        })
  },
  dataID(){
    if(this.$route.query.id!==null)
    { 
      this.ids=this.$route.query.id
      if(this.ids!==null){
        this.id=this.ids
      }
    }
   
  },
  
},
       

  computed:{
    playCount(){
      return (this.dataSongList.playCount/10000).toFixed(2)+'万'

    }
  },
  watch:{
    '$route.query.id':{
      immediate:true, // 立即执行watch函数
      handler(newVal,){
      if (newVal) { // 检查 newVal 是否存在
      console.log('页面刷新')
        this.dataID();
        this.songListMessage();
        this.songDynamicList();
        this.datas=[];
        this.count=0
        this.songListAll();
      }
        
      }
    }
    
  }


}
  </script>
  
  <style scoped>
  .viewport{
    background: rgb(rgb(241, 239, 239), green, blue);
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 10px;
  }
  .playCount{
   
    color: darkgrey;
  }
  .count{
    margin-right: 25px;
    color: darkgrey;
  }
  .title{
    margin-right: 25px;
    font-size: 30px;
  }
  </style>