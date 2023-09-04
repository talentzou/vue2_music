<template>
  <div class="viewport">
    <template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in banner" :key="item.id" class="el-carousel-item">
          <img :src="item.imageUrl" class="img">
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>
  
<script>
export default {
  name: 'banner_',
  props: {
    banner: {
      type: Array
    }
  },

}
</script>
  
<style scoped>
.viewport {
  padding: 25px 0;
}
.el-carousel__item h3 {
  color: #7a8ea7;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel {
  margin: auto 30px;
}

.img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
</style>