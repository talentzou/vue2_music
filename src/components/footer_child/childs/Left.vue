<template>
  <div class="viewport">
    <img :src="img?.al?.picUrl" alt="無照片" class="img">
    <div class="songInfo">
      <span class="songname">{{ img.name ? img.name : songName }}</span>
      <span class="singername">{{ img && img.ar && img.ar[0]?.name ? img.ar[0].name : singerName }}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'left_childs',
  props: ['data'],
  data() {
    return {
      id: '',
      img: [],
      singerName: "暂无数据",
      songName: "暂无数据",
    }
  },
  watch: {
    data() {
      console.log('传过来data数据为', this.data)
      if (this.data && this.data[0] && this.data[0].ar[0] !== null) {
        this.img = this.data[0]
        this.singerName = this.data[0].name
        this.songName = this.data[0].ar[0].name
      }
    },
  },

}
</script>
  
<style lang="scss" scoped>
.viewport {
  padding: 10px;
  width: 200px !important;
  display: flex;
}
.songInfo {
  line-height: 30px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  flex: 1;
}
.img {
  width: 70px;
  height: 70px;
}
.space {
  margin-top: 15px;
}
</style>