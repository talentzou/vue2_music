<template>
    <div class="viewport">
           <left :data="data"></left>
           <center_ :data="data" @previous="previous" @next="next"></center_>
    </div>
  </template>
  
  <script>
  import { songdetail } from "@/api/detail/songDetail"
  import left from "@/components/footer_child/childs/Left"
  import center_ from "@/components/footer_child/childs/Center"

  export default {
  name:'footerChilds',
  components:{left,center_},
  data(){
     return{
        data:[],
        ids:'',
        idsList:'',
        indexId:''
     }
  },
  watch:{
 '$store.state.playAudio':{
 async handler(newvalue,){
        console.log('state11111数据',newvalue)
        this.ids=newvalue.songId
        this.idsList=newvalue.songIds
        this.indexId= this.idsList.indexOf(this.ids)
      //   console.log('索引为',this.indexId)
        this.musicData()
  },
  deep:true,
  immediate:true,
 },    
    },
    methods:{
      //获取数据
     async musicData(){
         console.log('aaid数据',this.ids)
         const response=await songdetail(this.ids)
         const res=response.data.songs
         // console.log('歌曲详情wei55555',res)
         this.data=res   
      },
      //上一首
      previous(){
         if(this.idsList.length===0){return this.$message('error','没有上一首歌曲')}
         if(this.indexId>0){
         // console.log(' previous previous previous');
         this.ids=this.idsList[this.indexId-1];
         this.indexId--;
         this.musicData()
      }else{
         this.ids=this.idsList[this.idsList.length-1]
         // console.log('返回结尾 ', this.ids,'索引为·',this.indexId);
         this.musicData()
      }
   },
     //上一首
      next(){
         if(this.idsList.length===0) {return this.$message('error','没有下一首歌曲')}
         if(this.indexId<this.idsList.length){
            console.log(' next next next next ');
            this.ids=this.idsList[this.indexId+1]
            this.indexId++;
            this.musicData()
         }else{
         this.ids=this.idsList[0]
         this.musicData()
         }
        

      }
    }
  }
  </script>
   
  <style scoped>

.viewport{
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    align-items: center;
  
}
  </style>