<template >
  <div class="viewport">

    <el-table :data="tableData" stripe  :key="itemKey" class="el-table" >

      <el-table-column type="index" label="#"  align="center" :index="indexMethod">
      </el-table-column>

      <el-table-column label="播放" align="center" width="250">
        <template slot-scope="scope">
          <div class="position">
            <img alt="">
            <i class=" el-icon-video-play" @click="playSong(scope.row.songId)"></i>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="songsName" label="歌名" width="250" align="center">
      </el-table-column>

      <el-table-column prop="artists" label="歌手" width="250"  align="center">
      </el-table-column>

      <el-table-column prop="album" label="专辑" width="250" align="center">
      </el-table-column>

      <el-table-column prop="time" label="时长" width="250" align="center">
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  name: 'tableData',
  props: {
    tableData: {
      type: Array
    }
  },
  data() {
    return {
      dataSong: [],
      itemKey: 1111
    }
  },
  methods: {
    //自定义索引号
    indexMethod(index) {
      return index + 1
    },
    playSong(id) {
      console.log('点击了播放按钮:', id)
      this.$store.commit('playAudio/reflection', id)
    }

  },
  watch: {
    tableData() {
      this.dataSong = []
      // this.datasong=''
      console.log('数据更新了:')
      this.itemKey = Math.random()
      this.dataSong = this.tableData
    }
  }
}
</script>
<style scoped lang="scss">
.viewport {
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  padding: 10px;
}

.el-table {
  width: 100% !important;
  overflow: auto;
  font-size: 16px;
  line-height: 20px;
 
}

.position {
  position: relative;

  .el-icon-video-play {
    font-size: 25px;
    color: white;
    position: absolute;
    left: 50px;
    top: 20px;
    opacity: 0;

    &:hover {
      opacity: 1;
     background-color: black;
    }

  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }
}
</style>