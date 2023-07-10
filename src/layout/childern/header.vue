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
       <!-- 搜索栏 -->
         <div class="search_box"> 
         <search_view></search_view>
         </div>
         <!-- 点击登录区域 -->
         <div class="login">
          <el-dropdown class="dropdown">
               <img src="@/assets/img/un_user.png" alt="" >
               <i class="el-icon-arrow-down el-icon--right"></i>
             <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus" disabled>游客</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus" @click.native="login">{{status?'登录':'退出登录'}}</el-dropdown-item>
            </el-dropdown-menu>
         </el-dropdown>
         </div>
    </div>
  
</template>

<script>
import search_view from '@/components/search'
export default {
name:'HeaderView',

components:{ search_view},
data() {
  return {
    status:true
  }
},
methods:{
  login(){
    this.status=!this.status
    this.$router.push('/login/enter')
  }
}
}
</script>

<style lang="scss" scoped>
#rooter{
  line-height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;/*元素垂直居中 */
  position: relative;
 
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
.login{
  margin-right: 50px;
  position: absolute;
  right: 0;
  display: flex;
  padding-bottom: 5px;
  .dropdown
  { display: flex;
    align-items: center;
  }
  img{
    width: 35px;
    height: 35px;
    margin-bottom: 5px;
    border-radius:50% ;
    border: 1px solid rgb(183, 181, 178);
  }
  
}


</style>