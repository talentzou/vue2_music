<template>
  <div>
    <el-container>
      <el-aside width="200px">
            <el-menu class="space">
              <el-menu-item index="1-1" @click="foundMusic">
                <i class="iconfont icon-yinle"></i>                
               <span >发现音乐</span>
              </el-menu-item>
              <el-menu-item index="1-2" @click="foundVideo">
                <i class="iconfont icon-shipin"></i>
                <span >视频</span>
              </el-menu-item>
              <el-menu-item index="1-3" @click="foundMyCollect">
                <i class="iconfont icon-shoucang"></i>
                <span >我的音乐收藏</span>
              </el-menu-item>
            </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name:'asiderView',
  methods:{
    foundMusic(){
      this.$router.push('/Found/personRecommend')
    },
    foundMyCollect(){
      this.$router.push('/myCollect')
    },
    foundVideo(){
      this.$router.push('/video')
    }

  }
}
</script>

<style scoped>

.space{
  padding:15px 0;
}

</style>