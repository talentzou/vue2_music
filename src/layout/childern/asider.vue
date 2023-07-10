<template>
  <div>
    <el-container>
      <el-aside width="200px">
            <el-menu class="space"
            router
            :default-active="$router.path">
              <el-menu-item index="/Found/personRecommend">
                <i class="iconfont icon-yinle"></i>                
               <span >发现音乐</span>
              </el-menu-item>
              <el-menu-item index="/video/officialRecommend">
                <i class="iconfont icon-shipin"></i>
                <span >MV</span>
              </el-menu-item>
            
  
              <el-menu-item index="/myCollect">
                
                <i class="iconfont icon-shoucang"></i>
                <span >我的音乐收藏</span>
              </el-menu-item>
              <!-- <el-menu-item index="/mvDetail">
                
                <i class="iconfont icon-shoucang"></i>
                <span >mv详情</span>
              </el-menu-item> -->
              
            </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>

export default {
  name:'asiderView',
  // methods:{
  //   foundMusic(){
  //     this.$router.push('/Found/personRecommend')
  //   },
  //   foundMyCollect(){
  //     this.$router.push('/myCollect')
  //   },
  //   foundVideo(){
  //     this.$router.push('/video')
  //   }

  // }
}
</script>

<style scoped>

.space{
  padding:15px 0;
}

</style>