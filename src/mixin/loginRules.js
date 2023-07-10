
const phoneFormRule = (rule, value, callback) => {
    // const regMobile = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
    const regphone = /^1[3-9][0-9]{9}$/
    if (regphone.test(value)) {
        console.log('合法通过')
      // 邮箱号格式合法
      return callback()
    }
    // 返回一个错误提示
    callback(new Error('请输入合法55555的手机号'))
  }
  
  export const loginDataFormRules ={
    data(){
        return{
          loginRules:{
                userName: [
                  { required: true, message: '请输入账号', trigger: 'blur' },
                  { validator:phoneFormRule, trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ],
              
              }
        }
    }
  }
