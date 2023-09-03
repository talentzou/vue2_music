<template>
  <div class="content">

   <div class="container">
              <div class="horizon">
                <h1>{{ loginState?'登录':'注册' }}</h1>
                  <div>
                      <span>{{loginState?'没有账号?':'已有账号'}}</span>
                      <el-link type="primary" @click="register" v-if="loginState">注册</el-link>
                        <el-link type="primary" @click="register" v-if="!loginState">登录</el-link>
                 </div>
              </div>
                <div>
                       <!-- 登录/注册界面 -->
                      <router-view></router-view>
                </div>
               
   </div>
  </div>
</template>

<script>
export default {
name:'loginView',
data() {
    return {
        loginState:true
    }
},
methods:{
    //登录||注册页面转换
    register(){
        this.loginState=!this.loginState
        if(this.loginState){
            this.$router.push('/login/enter')
        }
        else{
            this.$router.push('/login/register')
        }
    }
}
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
    background-image: url('@/assets/img/aidou.jpg');
    background-repeat:no-repeat ;
    background-size: cover;
}
.container{
    padding: 20px 40px;
    width: 400px;
    height: 400px;
    border: 1px solid black;
  
    .horizon{
        display: flex;
        justify-content: space-between;
    }
    }
    h1{
        font-size: 30px;
    }
   
</style>