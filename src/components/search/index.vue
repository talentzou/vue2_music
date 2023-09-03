<template>
  <div id="viewport">
    <el-popover placement="bottom" trigger="click" class="el-popover">
      <!-- 歌单列表 -->
      <songItem :msg="searchValues" v-if="this.ReturnSearchKey === ''" class="location" @onbind="text" />
      <!-- 搜索列表 -->
      <songsResult :msg="searchValues" class="location" ref="childs" />
      <div slot="reference" class="search_box">
        <input type="text" placeholder="请输入搜索关键词" v-model="searchValues" @click="message" class="input">
      </div>
    </el-popover>
  </div>
</template>
  
<script>
import songItem from '@/components/search/childern/songItem.vue'
import songsResult from '@/components/search/childern/songsResult.vue'
export default {
  name: 'search_view',
  components: { songItem, songsResult },
  data() {
    return {
      searchValues: '',
      ReturnSearchKey: '',
      timer: ''
    }
  },
  methods: {
    text(name) {
      this.searchValues = name
    },
    message() {

    }
  },
  // 监听输入结果是否展示 songItem组件
  watch: {
    searchValues() {
      this.timer = setTimeout(() => {
        this.$refs.childs.$on('value', (data) => {
          console.log('返回数据为', data)
          this.ReturnSearchKey = data
        })
      }, 1500)
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>
  
<style scoped>
.viewport {
 width: 600px;
 display: flex;
 align-items: center;
}

.input {
  border-radius: 20px;
  border: 1px solid rgba(97, 94, 94, 0.896);
  height: 50px;
  width: 100%;
}

.el-popover {
  position: relative;
  width: 100%;
  background-color: #A7DBEB;
  border: 0;
}

</style>