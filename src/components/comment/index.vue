app.<template>
  <div>
      <div class="textInput">
        <h1>评论区(已有{{ total+'条' }})</h1>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          autosize
          maxlength="100"
          show-word-limit
          prefix-icon="el-icon-search"
          clearable
          class="input">
       </el-input>
      </div>
      <div class="hotComment">
        <h1>精彩评论</h1>
           <div v-for="(obj,index) in hotComment" :key="index"  class="visiter">
            <img :src="obj.user.avatarUrl" alt="111">
            <div >
                 <span class="nickname">{{ obj.user.nickname }}:</span>
                 <span>{{ obj.content }}</span>
                 <div class="time">
                    <span>{{ obj.timeStr }}</span>
                    <span class="position">点赞<i class=" el-icon-check"></i>|<span>分享<i class="el-icon-position"></i>| <span></span> </span>回复<i class="el-icon-edit"></i></span>
                 </div>
            </div>
           </div>
           <!-- -->
         
         
      </div>
      <div class="hotComment">
        <h1>评论</h1>
           <div v-for="(obj,index) in comment" :key="index"  class="visiter">
            <img :src="obj.user.avatarUrl" alt="111">
            <div >
                 <span class="nickname">{{ obj.user.nickname }}:</span>
                 <span>{{ obj.content }}</span>
                 <div class="time">
                    <span>{{ obj.timeStr }}</span>
                    <span class="position">点赞<i class=" el-icon-check"></i>|<span>分享<i class="el-icon-position"></i>| <span></span> </span>回复<i class="el-icon-edit"></i></span>
                 </div>
            </div>
           </div>  
            
      </div>


   
  </div>
</template>

<script>
//import momment from 'moment'
export default {
    name:'comment_',
    props:{
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
        textarea:''
      }
    },
    // computed:{
    //   time(){
    //       return momment.utc(this.hotComment.time).format('YYYY-MM-DD-mm:hh:mm')
    //   }
    // }

}
</script>

<style scoped lang="scss">
.visiter{
  display: flex;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid rgba(124, 118, 118,0.4);
  .nickname{
      margin-right: 10px;
      color: skyblue;
  }
  img{
    width: 50px;
    height: 50px;
    border: 1px solid rgba(194, 194, 199, 0.3);
    border-radius: 50%;
  }
  p{
    margin-left: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical
  }
}
.textInput{
  margin: 15px 0;
  width: 100%;
  .input{
  margin-top: 10px;
}
}

.hotComment{
  margin: 40px 0;
  position: relative;
  h1{
    font-size: 30px;
    color: black;
  }
  .time{
   margin-top:30px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   .position{
    position: absolute;
    right: 0;
    color: rgb(140, 137, 134);
    font-size: 10px;
   }
  }
}
h1{
  margin: 15px 0;
}
</style>