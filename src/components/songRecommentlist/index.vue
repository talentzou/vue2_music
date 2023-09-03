<template>
  <div>
    <div class="list">
      <div class="item" v-for="obj in dataList" :key="obj.id">

        <div class="origin">
          <img :src="obj.picUrl || obj.coverImgUrl || obj.blurPicUrl" alt="" class="img" />
          <playCount :dataCount="obj.playCount" class="location" />
          <i class="el-icon-video-play" @click="detail(obj.id)"></i>
        </div>
        <p>{{ obj.name }}</p>
        <p v-if="obj.artists" class="name">{{ obj.artists[0].name }}</p>

      </div>
    </div>


  </div>
</template>
  
<script>
//import { personlized} from '@/api/personlized'
import playCount from './childern/playCount.vue'
export default {
  name: 'recommentView',
  props: {
    dataList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { playCount },
  data() {
    return {
      list: []
    }
  },
  methods: {
    detail(ids) {
      console.log('999999999999999', ids)
      this.$router.push({
        name: 'songDetail',
        query: {
          id: ids
        }
      })
    }
  }

}

</script>
  
<style lang="scss" scoped>
.list {
  display: flex;
  margin: 0 30px;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;

}

.item {
  width: 300px;
  margin: 15px 12px;
}

.origin {
  position: relative;

  .img {
    border-radius: 8px;
    width: 300px;
    height: 300px;
  }

}

.name {
  margin-top: 5px;
  color: rgba(109, 116, 116, 0.5);
  font-size: 10px;
}

.location {
  position: absolute;
  top: 8px;
  right: 15px;

}


.el-icon-video-play {
  opacity: 0;
  position: absolute;
  bottom: 60px;
  right: 60px;
  font-size: 80px;
  border-radius: 50%;

  &:hover {
    opacity: 1;
    background-color: rgba(237, 238, 227, 0.4);
  }
}
</style>
