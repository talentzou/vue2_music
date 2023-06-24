<template>
    <div v-if="this.searchResult.length>0">
        <p>搜索结果</p>
        <template>
           <ul>
              <li class="songsSearch" v-for="obj in searchResult" :key="obj.id">
                    <span>{{obj.name }}</span>
                    <span>---</span>
                    <span>{{ obj.ar[0].name }}</span>
                </li>
            </ul>
       </template>
    </div>
  </template>
  
  <script>
  import request from '@/utils/request'
  export default {
  name:'songsResult',
  props:['msg'],
  data(){
      return{
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
   this.timer= setTimeout( ()=>{
       this.searchValue=this.msg
       request({
            method:'GET',
            url:'/cloudsearch',
            params:{
                keywords: this.msg,
                limit:8
            }
        }).then(response=>{
         console.log('歌单搜索列表结果',response.data)
     if ( response.data.result !==undefined&& response.data.result !== undefined) 
        {
          this.searchResult=response.data.result.songs
    }
       else {
            this.searchResult = []
        }
   
   },
   error=>{
    console.log('歌单搜列表错误',error.message)
   })
     },1500)
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