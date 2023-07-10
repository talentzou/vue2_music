<template>
  <div class="content">
    <!-- 左边边 -->
    <leftVideo class="left_video" 
    :dataDetail="mvDetail" 
    :dataInfo="mvInfo" 
    :urlData="urlMv"
    :hotComment="hotComment"
    :comment="comment"
    :total="total"></leftVideo>
    <!-- 右边 -->
    <rightVideo class='right_video' :dataDetail="mvDetail" :simimvData="simiMv"></rightVideo>
  </div>
</template>

<script>
import {Detail,detailInfo,simiMv,mvUrl} from '@/api/mvDetail'
import { mvComment } from '@/api/comment'
import rightVideo from '@/components/mvDetail/rightVideo.vue'
import leftVideo from '@/components/mvDetail/leftVideo.vue'
export default {
name:'mvDetail',
components:{leftVideo,rightVideo},
data() {
    return {
        mvDetail:{},//mv详情
        mvInfo:{},//mv动态信息
        simiMv:[],//相似mv
        urlMv:{},//mv地址
        hotComment:[],
        total:'',
        comment:[],
        id:''
       
    }
},
// created(){
//    this.id=this.$route.query.id
//    this.mvDetailData();
//    this.mvDetailInfo();
//    this.simiMvDetail();
//    this.mvAddress()
// },
methods:{
    //mv详情
   
   async mvDetailData(){
    if(this.id!==undefined){
     const res=await Detail(this.id);
       console.log('mvmv',res);
       this.mvDetail=res.data.data;
       console.log('数据来了',this.mvDetail);
    }
    },
    //获取 mv 点赞转发评论数数据
    async mvDetailInfo(){
        const res=await detailInfo(this.id);
       console.log('mvmvinfo',res);
       this.mvInfo=res.data
    },
    //相似mv
   async simiMvDetail(){
        const res=await simiMv(this.id);
        console.log('simiMv',res);
        this.simiMv=res.data.mvs
        console.log('33333',this.simiMv);
    },
    //获取mv地址
    async mvAddress(){
        const res=await mvUrl(this.id);
        console.log('mvurl',res);
        this.urlMv=res.data.data;
        console.log('444444',this.urlMv);
    },
    //评论
   async mvCommentData(){
        const res=await mvComment(this.id);
        console.log('mvcomment',res);
        this.hotComment=res.data.hotComments;
        this.comment=res.data.comments;
        this.total=res.data.total
    }
},
watch:{
    '$route.query.id'(){
        if(this.$route.query.id!==null)
       {
        this.id=this.$route.query.id;
       this.mvDetailData();
       this.mvDetailInfo();
       this.simiMvDetail();
       this.mvAddress();
       this.mvCommentData();
       }
    }
}
}
</script>

<style scoped lang="scss">
.content{
    display: flex;
    overflow: auto;
    .left_video{
        width: 65%;
    }
    .right_video{
        flex: 1;
    }
}
</style>