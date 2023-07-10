<template>
    <div class="rooter">
     <left :data="data"></left>
     <center_ :data="data"></center_>
     <right></right>
    </div>
  </template>
  
  <script>
   import left from "@/components/footer_child/childs/Left"
  import right from "@/components/footer_child/childs/Right"
  import center_ from "@/components/footer_child/childs/Center"
  import request from '@/utils/request'
  export default {
  name:'footerChilds',
  components:{left,right,center_},
  data(){
     return{
        data:[],
        aaid:this.$store.state.playAudio.songId
     }
  },
  created(){
    
  },
  computed:{
    dataone(){
        return this.$store.state.playAudio.songId
    }
  },
  watch:{
 '$store.state.playAudio':{
  
  handler(newvalue,){
        console.log('state数据',newvalue)
        this.aaid=newvalue.songId
        console.log('aaid数据',this.aaid)
            request({
        method:'GET',
        url:"/song/detail",
        params:{
        //   ids:347230
        ids:this.aaid
        }
      }).then(response=>{
          const res=response.data.songs
          console.log('歌曲详情wei',res)
          this.data=res
      },error=>{
      console.log(error.message)
    })
       
  },
  deep:true,
  immediate:true,
 }
       
    //     request({
    //     method:'GET',
    //     url:"/song/detail",
    //     params:{
    //     //   ids:347230
    //     ids:this.aaid
    //     }
    //   }).then(response=>{
    //       const res=response.data.songs[0]
    //       console.log('歌曲详情wei',res)
    //       this.data=res
       
          
    //   },error=>{
    //   console.log(error.message)
    // })
    }
  
  
  }
  </script>
   
  <style scoped>
.rooter{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
  </style>