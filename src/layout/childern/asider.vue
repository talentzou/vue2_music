<template>
  <div class="aside">
    <el-menu class="el_menu" router :default-active="$router.path">
      <el-menu-item index="/Found/personRecommend">
        <i class="iconfont icon-yinle"></i>
        <span>发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/video/officialRecommend">
        <i class="iconfont icon-shipin"></i>
        <span>MV</span>
      </el-menu-item>
      <el-menu-item index="/myCollect">
        <i class="iconfont icon-shoucang"></i>
        <span>我的音乐收藏</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>

export default {
  name: 'asiderView',

}
</script>

<style scoped lang="scss">
.aside {
  width: 100%;
}

  .el-menu-item {
    width: 300px;
    height: 100%;
    padding: 0 !important;
    font-size: 20px;
    margin: 10px 0;
  }
</style>