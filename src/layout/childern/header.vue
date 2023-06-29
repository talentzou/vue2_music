<template>
  <div id="rooter" >
    <div class="img_title">
      <img src="@/assets/img/test.jpg" alt="" height="55px">
      <span>库库音乐</span> 
    </div>
       <div >
        <el-menu></el-menu>
          <i class="el-icon-back shape" @click="$router.back()"></i>
          <i class="el-icon-right shape" @click="$router.go()"></i>
       </div>
         <div class="search_box"> 
         <search_view></search_view>
         </div>
    </div>
   
</template>

<script>
import search_view from '@/components/search'
export default {
name:'HeaderView',
components:{ search_view}
}
</script>

<style scoped>
#rooter{
  line-height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;/*元素垂直居中 */
 
}
.img_title{
  font-size: 25px;
  display: flex;
   line-height: 55px;
   width: 200px;
   align-items: center;
   margin-right: 40px;
}
.img_title img{
  border-radius: 50%;/*圆点*/
  border: 1px solid rgb(189, 184, 184);
}

.shape {
  margin:15px;
    /* display: inline-block;行列块 */
    padding: 3px;/*圆点大小*/
    border-radius: 50%;/*圆点*/
    border: 1px;
    background-color:rgba(242, 240, 237, 0.937) ;
    margin: 0 7px;
}


</style>