<template>
    <div class="space">
        <el-form ref="info"  :model="info"  :rules="registerRules">
             
              <el-form-item  prop="nickname">
                <el-input placeholder="请输入你的名称" v-model="info.nickname" clearable></el-input>
              </el-form-item>

              <el-form-item  prop="userPhone">
                <el-input placeholder="请输入你的手机/邮箱" v-model="info.userPhone" clearable></el-input>
              </el-form-item>

              <el-form-item prop="password">
                <el-input placeholder="输入的密码" v-model="info.password" show-password></el-input>
              </el-form-item>
              <!-- <el-form-item prop="password">
                <el-input placeholder="再次确认输入的密码" v-model="info.password" show-password></el-input>
              </el-form-item> -->

              <el-form-item  prop="captcha">
                <el-input placeholder="请输入验证码" v-model="info.captcha" style="width:60%;"></el-input> 
                <el-button type="danger" style="width:40%;" @click="getCode('info')">获取验证码</el-button>
              </el-form-item>

              <el-form-item  >
                <div class="button">
                    <el-button  style="width: 50%;"  type="danger" @click="submitForm('info')">注册</el-button>
                </div>
              </el-form-item>
        </el-form>
    </div>
  </template>
  
  <script>
  import{register,captchaSent, captchaStatus} from '@/api/login'
  import loginDataFormRules from '@/mixin/registerRules'
  export default {
  name:'register_',
  mixins:[loginDataFormRules],
  data() {
    return {
        info:{
            nickname:'',
            userPhone:'',
            // passwordNew:'',
            password:'',
            captcha:'',
        },
       
   
      
     }
  },
  methods:{
    //获取验证码
    async getCode(){ 
          const res=await captchaSent(this.info.userPhone)
          console.log('注册验证码发送',res)
          if(res.status===200)
          {
                  this.$message('success','发送验证码成功')
                  // const res=await captchaStatus(this.info)
                  // console.log('验证码验证',res)
                }
          else{this.$message('error','发送验证码失败')}
    },
        //提交注册
    submitForm(ref){
        console.log('开始验证')
        this.$refs[ref].validate(async(valid)=>{
                if(valid){
                   console.log('校验通过')
                   //验证码验证
                   const cap=await captchaStatus(this.info)
                   console.log('验证码验证',cap)
                   if(cap.status!==200){return this.$message('error','验证码错误')}
                
                   const res=await register(this.info)
                   console.log('校验通过',res)
                   this.$route.push('/login/enter')
                }
                else{
                    return this.$message('error','账号或密码不合法')
                }
                
            })
       
    },

    //提交表单
    
    //邮箱注册
    emailRegister(){

    }
  }
  
  }
  </script>
  
  <style scoped lang="scss">
  .space{
   padding: 15px 0;
 }
 .button{
    text-align: center;
 }
  </style>