const emailFormRule = (rule, value, callback) => {
   
    // const regEmail = /^\w{3,}(\.\w+)*@(163|126)\.com$/
    const regEmail=/^1[3-9][0-9]{9}$/
    if (regEmail.test(value)) {
        console.log('合法通过')
      // 邮箱号格式合法
      return callback()
    }
    // 返回一个错误提示
    callback(new Error('请输入合法的邮箱啊啊啊啊'))
  }
  const loginDataFormRules ={
   

    data(){
        return{
            registerRules: {
                userPhone: [
                  { required: true, message: '请输入邮箱', trigger: 'blur' },
                  { validator:emailFormRule, trigger: 'blur' }
                ],
                nickname: [
                  { required: true, message: '请输入名称', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                captcha: [
                  { required: true, message: '请输入验证码', trigger: 'blur' }
                ]
              }
        }
    }
    // 注册规则
   
  }
  export default loginDataFormRules