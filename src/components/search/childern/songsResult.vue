<template>
    <div v-if="this.searchResult.length>0">
        <p>搜索结果</p>
        <template>
           <ul>
              <li class="songsSearch" 
                  v-for="obj in searchResult" :key="obj.id"
                  @click="returnDAta(obj.id)"
              >
                    <span>{{obj.name }}</span>
                    <span>---</span>
                    <span>{{ obj.ar[0].name }}</span>
                </li>
            </ul>
       </template>
    </div>
  </template>
  
  <script>
  //import request from '@/utils/request'
  import search from '@/api/search'
  export default {
  name:'songsResult',
  props:['msg'],
  data(){
      return{
        songid:'',
        searchValue:this.msg,
        searchResult:[],//搜索结果
        timer:'',//定时器
      }
  },
  watch:{
    deep:true,
    msg(val){
        console.log('输入值为',val)
        if (val.length === 0) {
            this.searchResult=[]
            return 
  } 
    else{      
        this.requestSongs()
        }

    },
    //监听手动输入是否有结果
    searchValue(){
        this.$emit('value',this.searchValue)
    }
  },
  methods:{
     requestSongs(){
        clearTimeout(this.timer);
            //请求防抖定时                                                 
   this.timer= setTimeout( async ()=>{
       this.searchValue=  this.msg
      try{
          const res=await search(this.msg)
        if(res.data.result !==undefined){
          this.searchResult=res.data.result.songs
        }

      }
      //捕获异常
      catch(error){
        console.log(error)
      }
      
  
     },1500)
     },
 
     returnDAta(id){
      console.log('数据id为:',id)
      this.$store.commit('playAudio/reflection',id)
     
     }
  },
beforeDestroy(){
    clearTimeout(this.timer)
 }

  }
  </script>
  
  <style scoped>
  .songsSearch{
    margin: 15px 25px;
  }
   .songsSearch span{
      margin: 20px 0
   }
  </style>