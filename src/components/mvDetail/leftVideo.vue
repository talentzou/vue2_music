app.<template>
  <div class="left">
    <!-- 标题 -->
      <p class='mv_name'>
        <span class="name_one">mv</span>
        <span >{{ dataDetail.name }}</span>
        <span  v-for="(item, index) in dataDetail.artists"
        :key="item.id"
        class="name_two">
      <span v-if="index<dataDetail.artists.length" >{{ item.name }}</span></span>
      </p>
      <!-- 播放区域 -->
      <div>
        <video v-if="urlData.url!==null" :src="urlData.url" controls class="play_video" ></video>
        <el-row class="distance_video"> 
            <el-button type="danger" plain><i class="el-icon-edit"></i>({{dataInfo.commentCount  }})</el-button>
            <el-button type="danger" plain><i class="el-icon-folder-add"></i>({{  dataInfo.likedCount}})</el-button>
            <el-button type="danger" plain><i class="el-icon-position"></i>({{  dataInfo.shareCount}})</el-button>
        </el-row>
      </div>
    <!-- 评论 -->
    <comment 
    :hotComment="hotComment"
    :comment="comment"
    :total="total"></comment>

  </div>
</template>

<script>
import comment from '@/components/comment/index.vue'
export default {
name:'left_video',
components:{comment},
props:{
dataDetail:{
    type:Object
},
dataInfo:{
  type:Object
},
urlData:{
  type:Object,
  default() {
        return {}
      }
},
hotComment:{
        type:Array
      },
      comment:{
        type:Array
      },
      total:{
        
      }
},
data() {
  return {
    url:this.urlData.url
  }
},
}
</script>

<style scoped lang="scss">
.left{
    padding: 15px;
    border-right: 1px solid rgb(125, 122, 116);
}
.mv_name{
    padding: 15px;
    .name_one{
      border: 1px solid rgb(189, 49, 49);
      color: rgb(200, 47, 47);
      border-radius: 5px;
      padding: 5px;
      font-size: 15px;
    }
    .name_two{
       margin-right:20px;
       font-size: 10px;
       color: rgb(161, 172, 169);
    }
 
}
.play_video{
    width:100%;
    height: 400px;
}
.distance_video{
    margin-top: 15px;
}
</style>