<template>
    <div id="main">
        <el-popover
          placement="bottom"
          width="400"
          trigger="click"
         > 
         <!-- 歌单列表 -->
         <songItem :msg="searchValues"
                    v-if=" this.ReturnSearchKey===''"
                    @onbind="text"/>
                  <!-- 搜索列表 -->
         <songsResult  :msg="searchValues"
                        ref="childs"/>

         <div slot="reference" class="search_box">
            <input type="text"
                   placeholder="请输入搜索关键词"
                   v-model="searchValues"
                   @click="message">
            <i class="iconfont icon-sousuo"></i>
         </div>   
       
  </el-popover>
    </div>
  </template>
  
  <script>
  import songItem from '@/components/search/childern/songItem.vue'
  import songsResult from '@/components/search/childern/songsResult.vue'
  export default {
  name:'search_view',
  components:{songItem ,songsResult},
  data(){
    return{
        searchValues:'',
        ReturnSearchKey:'',
        timer:''
    }
  },
  methods:{
    text(name){
        this.searchValues=name   
     },
     message(){

     }
  },
// 监听输入结果是否展示 songItem组件
  watch:{
    searchValues(){
   
      this.timer=setTimeout(()=>{
        this.$refs.childs.$on('value',(data)=>{
          console.log('返回数据为',data)
          this.ReturnSearchKey=data
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
   .search_box{
  margin-left: 30px;
  position: relative;
}
input{
  border-radius: 20px;/*圆点*/
  border: 1px solid rgba(97, 94, 94, 0.896);
  height:30px;
}
.search_box i{
  position: absolute;
  right: 7px;
}
  </style>