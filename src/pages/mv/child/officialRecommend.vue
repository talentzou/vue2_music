<template>
    <div class="rooter">
        <span class="title" v-if="state">热门推荐</span>
    <div  class="recommend" v-if="state" >
        <div v-for="obj in songList" :key="obj.id" class="margin">
            <img :src="obj.picUrl" alt="" >
            <div class="location" >
                <span>{{ obj.name }}</span>
                 <span>{{ obj.artistName }}</span>
            </div>
           
        </div>
        
    </div>
     <div>
       
         <span>官方出品</span>
        <mvOfficial :dataSong="recommendSongList" @changePage="nextPage" @previousPages="previousPages"></mvOfficial>
     </div> 
     <!-- <div class="size">
        <span><i class="el-icon-back" @click="this.$router.back()"></i>上一页</span>
        <span> 下一页 <i class="el-icon-right" @click="nextPage"></i></span>
        </div> -->
    </div>
</template>
<script>
import { personalizedOne ,exclusive} from '@/api/recommendMv'
import mvOfficial from '@/components/mvItem/index.vue'
export default {
 name:'officialRecommend',   
 components:{mvOfficial},
 data() {
    return {
        songList:[],
        recommendSongList:[],
        offset:0,
        state:true
    }
 },
 created(){
     this.dataList()
 },
 methods:{
   async dataList(val){
         const res=await  personalizedOne()
         console.log('数据来了11',res)
         this.songList=res.data.result
         console.log('数据2222来了',this.songList)
         const res2=await exclusive(val)
         console.log('数据来了eee',res2)
         this.recommendSongList=res2.data.data
       },
       nextPage(){
          this.offset+=30
          this.dataList(this.offset)
        //   this.state=!this.state
          if( this.offset>0)  this.state=false
       },
       previousPages(){
        if( this.offset>0){
            this.offset-=30
            this.dataList(this.offset)
            // this.state=!this.state
            if( this.offset===0)  this.state=!this.state
        }
         
       }
 }
 
}
</script>
<style lang="scss" scoped>
.rooter{
    overflow: auto;
    height: 500px;
}
.recommend{
    display: flex;
    .title{
        display: block;
    }
    .margin{
        margin: 10px 25px 10px 0;
    }
    img{
        width: 250px;
        height: 150px;
        border-radius:15px ;
    }
    .location{
       display: flex;
       justify-content: space-between;
       
    }
}
// .size{
//     font-size: 20px;
//     display: flex;
//     justify-content: center;
//     span{
//         margin-right: 100px;
//     }
//     i{  
//         font-size: 30px;
//         border: 1px solid  black;
//         border-radius:50%;
//         color: white;
//         background: rgb(230, 96, 96);
       
//     }
// }
</style>