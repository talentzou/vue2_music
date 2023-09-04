<template>
  <div>
    <div class="change">
      <i class="el-icon-video-play"></i>
      <span>{{ countsum }}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'playCount',
  props: {
    dataCount: {
      type: Number
    }
  },
  data() {
    return {
      count: '',
    }
  },

  computed: {
    countsum() {

      return this.dataCount > 10000 ? ((this.dataCount / 10000).toFixed(2) + '万') : this.dataCount
    }
  }
}
</script>
  
<style lang="scss" scoped>
.change {

  font-size: 5px;
  color: rgba(240, 234, 234, 0.915)
}
</style>