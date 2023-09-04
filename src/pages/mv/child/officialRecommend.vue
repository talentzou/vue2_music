<template>
    <div class="viewport">
        <span class="title" v-if="state">热门推荐</span>
    <div  class="recommend" v-if="state" >
        <div v-for="obj in songList" :key="obj.id" class="mv">
            <img :src="obj.picUrl" alt="" >
            <div class="location" >
                <span>{{ obj.name }}</span>
                 <span>{{ obj.artistName }}</span>
            </div>
        </div>
    </div>
     <div>
         <span class="title">官方出品</span>
        <mvOfficial :dataSong="recommendSongList" @changePage="nextPage" @previousPages="previousPages"></mvOfficial>
     </div> 
    </div>
</template>
<script>
import { personalizedOne ,exclusive} from '@/api/mv/recommendMv'
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
     this.dataList();
     this.recommend();
 },
 methods:{
   async dataList(){
         const res=await  personalizedOne();
        //  console.log('数据来了11',res);
         this.songList=res.data.result;
         console.log('数据2222来了',this.songList);
       },
    //  官方推荐
         async recommend(val){
            const res2=await exclusive(val);
            console.log('数据来了eee',res2);
            this.recommendSongList=res2.data.data;
         },
       //点击下一页
       nextPage(){
          this.offset+=30;
        //   this.dataList(this.offset);
          this.recommend(this.offset);
          if( this.offset>0)  this.state=false;
       },
       //返回上一页
       previousPages(){
        if( this.offset>0){
            this.offset-=30;
            this.dataList(this.offset);
            this.recommend(this.offset);
            if( this.offset===0){
                  this.dataList(this.offset);
                  this.state=!this.state;
            }
        }
         
       }
 }
 
}
</script>
<style lang="scss" scoped>
.viewport{
    overflow: auto;
    flex: 1;
    padding: 20px;
}
.title{
        display: block;
        font-size: 35px;
        font-weight: 700;
        padding: 10px;
    }
.recommend{
    display: flex;
  
    .mv{
        margin: 10px 25px 10px 0;
    }
    img{
        width: 300px;
        height: 170px;
        border-radius:15px ;
        object-fit: contain;
    }
    .location{
       display: flex;
       justify-content: space-between;
       
    }
}

</style>