<template>
  <div class="viewport">
    <div>
      <div class="displaySong">
        <div class="background" :style="`background-image: url('${list.coverImgUrl}')`"> </div>
        <img :src="`${list && list.coverImgUrl}`" alt="">
        <div class="textDetail">
          <span class="qualitySong">精品歌单</span>
          <p class="one">{{ list.name }}</p>
          <p class="two">{{ list.description }}</p>
        </div>

      </div>

    </div>
   
      <!-- 标签导航区 -->
      <tags @tag="tagChange" :tags="tags" class="tag_area" />

    <!-- 展示区 -->
    <recommendView :dataList="value" class="content"></recommendView>
    <!-- 分页 -->
    <Pagination :total="total" :queryInfo="queryInfo" @updataData="queryInfoChange"></Pagination>
  </div>
</template>
  
<script>
import recommendView from "@/components/songRecommentlist/index.vue"
import { choiceness } from '@/api/found/songsList'
import tags from '@/components/Tags/index.vue'
import Pagination from "@/components/pagination/index.vue"
export default {
  name: 'songList',
  components: { tags, recommendView, Pagination },
  data() {
    return {
      value: [],
      list: [],
      total: 0,
      tags: ["华语", "古风", "欧美", "流行"],
      queryInfo: {
        tag: '华语',
        pagenum: 1, // 当前的页数
        pagesize: 25,// 当前每次显示多少条数据
      },
    }
  },

  created() {
    this.playlist(this.queryInfo)
  },
  methods: {
    //获取歌单数据
    async playlist(queryInfo) {
      try {
        const res = await choiceness(queryInfo)
        console.log('精品歌单为：', res)
        this.list = res.data.playlists[0]//第一个歌单数据
        this.value = res.data.playlists//歌单总数据
        this.total = res.data.total//歌单总数
        // console.log('list数据',typeof this.value )
      } catch (error) {
        console.log(error.message)
      }
    },
    //页数更新
    queryInfoChange(obj) {
      this.playlist(obj)
    },
    // 标签更改
    tagChange(val) {
      this.queryInfo.tag = this.tags[val]
      console.log('tag更改為:', this.queryInfo.tag)
      this.playlist(this.queryInfo)
    }
  },
}
</script>
  
<style lang="scss" scoped>
.viewport {
  width: 100%;
  margin-top: 15px;
  overflow: auto;
  flex: 1;
  padding: 40px;
}

.displaySong {
  display: flex;
  height: 400px;
  align-items: center;
  position: relative;
  margin: 10px 20px;
  border: 3px solid rgba(69, 65, 65, 0.1);

  .background {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    filter: blur(10px);
    z-index: 0;
    object-fit: contain;
  }

  img {
    width: 300px;
    height: 300px;
    margin-left: 15px;
    z-index: 1;
  }

  .textDetail {
    margin-left: 30px;
    z-index: 1;
    .qualitySong {
      border: 1px solid rgb(17, 15, 15);
      border-radius: 10px;
      padding: 5px;
      font-size: 45px;
      margin-bottom: 20px;
    }

    p {
      margin-top: 25px;
    }

    .one {
      margin-bottom: 15px;
      font-size: 19px;
      white-space: nowrap; //单行显示，强制文本不换行
    }

    .two {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis; //超出隐藏，显示...
      display: -webkit-box; //将对像作为弹性伸缩盒子模型展示
      -webkit-line-clamp: 2; //行数
      -webkit-box-orient: vertical; //伸缩盒对象子元素排列方式
    }

  }
}
  .tag_area {
   box-sizing: border-box;

  }

.content {
  margin-top: 50px;
}
</style>