app.<template>
  <div class="right">
    <h1 class="header_title">mv简介</h1>
    <el-divider></el-divider>
    <div class="introduce">
        <span>发布时间:{{ dataDetail.publishTime }}</span>
        <span>播放次数:{{ playCount}}</span>
        <p>{{ dataDetail.desc }}</p>
    </div>
   
    <el-divider></el-divider>
    <h1 class="title_name">相关推荐</h1>
    <el-divider></el-divider>
    <div>
        <!-- 相似mv -->
            <simiMvC :dataSong="simimvData"  :state="statecc"></simiMvC>
    </div>
  </div>
</template>

<script>
 import simiMvC from '@/components/mvItem/index.vue'
export default {
name:'left_video',
components:{simiMvC},
props:{
dataDetail:{
    type:Object
},
simimvData:{
    type:Array
},
state:{
      type:Boolean,
      default:true
    }
},
data() {
    return {
        statecc:false
    }
},
computed:{
    playCount(){
        return (this.dataDetail.playCount/1000).toFixed(2)+'万'
    }
}
}
</script>

<style lang="scss" scoped>
.right{
    padding: 15px;
    span{
        margin-right:10px;
    }
    .header_title{
        width: fit-content;
      border: 1px solid rgb(189, 49, 49);
      color: rgb(200, 47, 47);
      border-radius: 5px;
      padding: 5px;
      font-size: 25px; 
      font-weight: bold;
    }
    .title_name{
        color: black;
        font-size: 25px;
        font-weight: bold;
    }
    .introduce{
      span{
       display: block;
       margin: 10px 0;
       color: rgb(121, 115, 115);
      }
      p{
        display: -webkit-box;//将对像作为弹性伸缩盒子模型展示
        -webkit-box-orient: vertical;
      }
    }
  
}

</style>