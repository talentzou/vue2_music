<template>
  <div >
     <div class="space">
        <!-- <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->
        <el-form ref="form" :model="form" :rules="loginRules">
              <el-form-item  prop="userName" >
                <el-input placeholder="请输入手机号/邮箱" v-model="form.userName" clearable autofocus="true"></el-input>
              </el-form-item>
              <el-form-item  prop="password">
                <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
              </el-form-item>
              <div class="methods">
                <el-link  target="_blank" @click="$router.push('/Found/personRecommend')">游客访问</el-link>
                <el-link type="primary">验证码登录</el-link>
              </div>
              <el-form-item  >
                <el-button  style="width: 100%;"  type="danger" @click="userLogin('form')">登录</el-button>
              </el-form-item>
        </el-form>
     </div>
  </div>
</template>

<script>
  import{email} from '@/api/login'
 import { loginDataFormRules} from '@/mixin/loginRules'
export default {
    name:'login_',
    mixins:[loginDataFormRules],
    data() {
      return {
        input: '',
        form:{
            userName:'',
            password:''
        },
        loginRules:{}
      }
    },
    methods:{
        userLogin(ref){
            this.$refs[ref].validate(async(valid)=>{
                if(valid){
                   this.$message('success','校验通过')
                   const res=await email(this.info)
                   console.log('登陆成功',res) 
                   const { data:{code, cookie, token}}=await email(this.info)
                   console.log('cookie为',cookie) 
                   console.log('token为',token) 
                   if (code!== 200) return this.$message('error', '登录失败')
                   this.$message('success', '成功登录')
                   this.$store.commit('personData/set_cookie',cookie)
                   this.$store.commit('personData/set_token',token)
                   this.$router.push('/Found/personRecommend')
                }
                else{
                    return this.$message('error','账号或密码不正确')
                }
                
            })
            
        }
    }

}
</script>

<style lang="scss" scoped>
.space{
   padding: 15px 0;
 }

 el-input{
    margin: 15px 0;
 }
 .methods{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
 }
</style>