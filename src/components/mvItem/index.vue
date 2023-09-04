<template>
  <div class="flex">
    <div v-for="obj in dataSong" :key="obj.id">
      <div class="space">
        <!-- 图片 -->
        <div class="position">
          <img :src="obj.cover" alt="">
          <!-- 播放按钮 -->
          <i class="el-icon-video-play" @click="playMv(obj.id)"></i>
        </div>
        <p class="text">{{ obj.name }}</p>
         <!-- 歌手 -->
        <div class="location">
          <div v-for="(obj2, index) in obj.artists" :key="index">
          <span v-if="index < 2">{{ obj2.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="size" v-if="state">
      <el-button type="primary" round @click="previousPages">上一页</el-button>
      <el-button type="primary" round @click="nextPage"> 下一页 </el-button>
    </div>
  </div>
</template>
   
<script>

export default {
  name: 'mvView',
  props: {
    dataSong: {
      type: Array
    },
    state: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      songName: [],

    }
  },

  methods: {
    nextPage() {
      this.$emit('changePage')
    },
    previousPages() {
      console.log('返回·触发')
      this.$emit('previousPages')
    },
    playMv(id) {
      this.$router.push({
        name: 'mvDetail',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
  
<style lang="scss" scoped>
.flex {
  display: flex;
  flex-wrap: wrap;

  .space {
    margin: 15px 15px;

    .position {
      position: relative;

      .el-icon-video-play {
        position: absolute;
        font-size: 45px;
        color: white;
        opacity: 0;
        top: 40px;
        left: 85px;

        &:hover {
          opacity: 1;
        }
      }

    }

    .location {
      display: flex;
      margin-right: 5px;
      text-overflow: ellipsis; //超出隐藏，显示...
      display: -webkit-box; //将对像作为弹性伸缩盒子模型展示
      white-space: nowrap;
      -webkit-box-orient: vertical; //伸缩盒对象子元素排列方式
      overflow: hidden;
      width: 180px;
    }

    .text {
      text-overflow: ellipsis; //超出隐藏，显示...
      display: -webkit-box; //将对像作为弹性伸缩盒子模型展示
      -webkit-line-clamp: 2; //行数
      -webkit-box-orient: vertical; //伸缩盒对象子元素排列方式
      width: 200px;
      overflow-wrap: break-word;
      // overflow: hidden;
    }

    img {
      width: 160px;
      height: 160px;
      border-radius: 5px;
      object-fit: cover;


    }
  }

  .location {
    display: flex;
    justify-content: space-between;

  }
}

.size {
  font-size: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 25px 0;
  // span{
  //     margin-right: 100px;
  // }
  // i{  
  //     font-size: 30px;
  //     border: 1px solid  black;
  //     border-radius:50%;
  //     color: white;
  //     background: rgb(230, 96, 96);

  // }
}
</style>