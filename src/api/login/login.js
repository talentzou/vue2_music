import request from '@/utils/request'
//邮箱登录
export function email(info){
    console.log('API======hahahahahahah')
    return  request({
        url:'/login',
        method:'post',
        params:{
            email:info.userName,
            password:info.password
        }
      })
}
//手机注册验证码
export function captchaSent(phone){
    return request({
        url:'/captcha/sent',
        params:{
            phone:phone
        }
      })
}
// //验证验证码
export function captchaStatus(info){
  console.log('验证验证码api',info)
  return request({
      url:'/captcha/verify',
      params:{
        phone:info.userPhone,
        captcha:info.captcha
      }
      
    })
}
//手机注册
export function register(info){
  return request({
      url:'/register/cellphone',
      params:{
          nickname:info.nickname,
          phone:info.userPhone,
          password: info.userPhone,
          captcha:info.captcha

      }
    })
}
//获取账号信息
export function account(){
  return request({
      url:'/user/account',
      
    })
}
