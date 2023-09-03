<template>
  <div class="horizontal">
    <div class="picture">
      <img :src="`${songDetail.coverImgUrl}`" alt="111">
    </div>
    <div class="content">
      <!-- 第一部分 -->
      <div class="sketch">
        <el-tag type="danger">歌单</el-tag><span>{{ songDetail.name }}</span>
      </div>
      <div class="function">
        <!-- 第二部分 -->
        <span><i class="el-icon-video-play"></i>播放</span>
        <span><i class="el-icon-folder-add"></i>收藏({{ bookedCount }})</span>
        <span><i class="el-icon-position"></i>分享({{ shareCount }})</span>
        <span><i class="el-icon-download"></i>下载</span>
        <span><i class="el-icon-edit-outline"></i>评论({{ commentCount }})</span>
      </div>
      <!-- 第三部分 -->
      <div class="creater" v-if="creator && creator.nickname">
        <img :src="creator.avatarUrl" alt="">
        <span>创建者： {{ creator.nickname }}</span>
        <span>创建时间： {{ Time }}</span>
      </div>
      <!-- 第四部分 -->
      <div class="tag">
        <span>标签:</span>
        <span v-for="(obj, index) in tags" :key="index" class="distance">{{ obj }}</span>


      </div>
      <!-- 第五部分 -->
      <div class="introduce">
        <h3>介 绍: </h3>
        <p class="text"> {{ songDetail.description }}</p>
      </div>
    </div>
  </div>
</template>
   
<script>
import momment from 'moment'

export default {
  name: 'songDetail',
  data() {
    return {
      updateTime: ''
    }
  },
  props: {
    // 歌单详情
    songDetail: {
      type: Object
    },
    //歌单详情动态
    dynamicSong: {
      type: Object,
    }
  },
  computed: {

    tags() {
      return this.songDetail.tags
    },
    //    创建者
    creator() {
      return this.songDetail.creator
    },

    //    创建时间
    Time() {
      return momment.utc(this.songDetail.updateTime).format('YYYY-MM-DD hh:mm:ss')

    },
    //    分享数
    shareCount() {
      return (this.dynamicSong.shareCount / 10000).toFixed(2) + '万'
    },
    //评论数
    commentCount() {
      return (this.dynamicSong.commentCount / 10000).toFixed(2) + '万'
    },
    //收藏数

    bookedCount() {
      return (this.dynamicSong.bookedCount / 10000).toFixed(2) + '万'
    }
  }
}
</script>
  
<style lang="scss" scoped>
.horizontal {
  display: flex;

  .picture {
    margin: 10px 10px;

    img {
      width: 180px;
      height: 180px;
    }
  }

  .content {
    margin: 10px 15px;

    span {
      margin-right: 15px;

    }

    ;

    .creater {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 35px;
        height: 35px;
      }

      span {
        margin: 0 15px
      }

      ;
    }

    .function {
      margin-bottom: 15px;

      span {
        border: 1px solid rgb(100, 95, 95);
        border-radius: 10px;
        padding: 5px;
        margin-right: 15px;
      }
    }

    .sketch {
      margin-bottom: 15px;

    }

    .introduce {
      display: flex;
      margin-top: 5px;

      .text {
        // text-overflow: ellipsis;//超出隐藏，显示...
        // display: -webkit-box;//将对像作为弹性伸缩盒子模型展示
        // white-space: nowrap;
        // -webkit-box-orient: vertical;//伸缩盒对象子元素排列方式
        // overflow: hidden;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 800px;

      }
    }

    .tag {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }

}

.distance {
  margin-right: 15px;
  border: 1px solid rgb(134, 129, 129);
  border-radius: 5px;
  padding: 3px;
}</style>