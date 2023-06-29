<template>
    <div>
     <div class="center_i">
      
      <i class="el-icon-caret-left"></i>
      <i class="el-icon-video-play" @click="audioplay"></i>
      <i class="el-icon-caret-right"></i>
     
     </div>
     <!-- 播放音乐真正的标签
      看接口文档: 音乐地址需要带id去获取(但是有的歌曲可能404)
      https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e8%8e%b7%e5%8f%96%e9%9f%b3%e4%b9%90-url
     -->
     <audio 
     :src="`https://music.163.com/song/media/outer/url?id=33894312.mp3`"
     ref="audio"
     ></audio>
    </div>
  </template>
  
  <script>


  export default {
  name:'center_childs',
  props:['data'],
  data(){
     return{
      playState:false,
      songList:[],
      songId:347231
     }
  },
 
  methods:{
    audioplay(){
      // this.$refs.audio.pause() 
      if(!this.playState)
      {
        this.$refs.audio.play()
      }else{
         this.$refs.audio.pause() 
      }
      this.playState = !this.playState 
     
    },
   
  },
  watch:{
    data(){
      console.log('data数据为',this.data)
      this.songList=this.data
    }
   
  },
  mounted() {

    
    }
    
  }
  </script>
  
  <style scoped>
   i{
    font-size: 30px;
    margin: 0 15px;
   }
   .center_i{
    display: flex;
    align-items: center;
    /* justify-content: center; */
    height: 80px;
   }
  </style>