<template>
    <div class="viewport">
       <!-- 标签导航区 -->
     <tags @tag="tagChange" :tags="tags"/>
     <!-- 展示区 -->
     <rangMv :dataSong="rangList" @changePage="nextPage"  @previousPages="previousPages"></rangMv>
    </div>
</template>
<script>
import { topMv} from '@/api/mv/recommendMv'
import rangMv from '@/components/mvItem/index.vue'
import tags from '@/components/Tags/index.vue'
export default {
 name:'mvRang', 
 components:{tags,rangMv}  ,
 data() {
    return {
        tags:['全部','内地','港台','欧美','日本','韩国'],
        rangList:[],
        info:{
            offset:0,
            area:''
        }
        
    }
 },
 created(){
        this.dataSong(this.info)
 },
 methods:{
   async dataSong(){
        const res=await topMv(this.info)
        console.log('数据来了',res)
        this.rangList=res.data.data
        console.log('数据改变来了',this.rangList)
    },
    // 下一页数改变
    nextPage(){
       this.dataSong()
       this.info.offset+=30
       console.log('页数改变',this.info)
    },
    // 标签导航改变
    tagChange(index){
        this.info.offset=0
        this.info.area=this.tags[index]
        console.log('标签导航改变',this.info)
        if(this.info.area==='全部'){ this.info.area=''}
        this.dataSong()
    },
    //返回上一页
    previousPages(){
        if( this.info.offset>0){
            this.info.offset-=30
            this.dataSong()
       }
}
 }
}
</script>
<style scoped lang="scss">
.viewport {
    flex: 1;
    overflow: auto;
}
</style>