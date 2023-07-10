<template>
    <div>
         <!-- 标签导航区 -->
     <tags @tag="tagChange" :tags="tags" />
     <!-- 展示区 -->
     <newmv :dataSong="newList" :state="stateShow" ></newMv>
    </div>
</template>
<script>
import {mvFirst} from '@/api/recommendMv'
import tags from '@/components/Tags/index.vue'
import newmv from '@/components/mvItem/index.vue'

export default {
 name:'newMv', 
 components:{tags,newmv},
 data() {
    return {
        tags:['全部','内地','港台','欧美','日本','韩国'],
        newList:[],
        info:{
            offset:0,
            area:''
        },
        stateShow:false//控制页面
        
    }
 },
 created(){
       this.dataNewMv()
 },
 methods:{
    tagChange(index){
      
        this.info.area=this.tags[index]
        console.log('标签导航改变',this.info)
        if(this.info.area==='全部'){ this.info.area=''}
        this.dataNewMv()

    },
    async dataNewMv(){
         const res=await mvFirst(this.info)
         console.log('数据来了',res)
         this.newList=res.data.data
         console.log('数据改变来了',this.newList)
    },


 }  
}
</script>
<style>
</style>