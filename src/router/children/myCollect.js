
const myCollect=[{
  path:'',
  component:()=>import('@/layout/index'),
  children:[
   { 
     name:'myCollect',
     path:'myCollect',
     component:()=>import('@/pages/myCollect/index'),
     meta:{
      authority:true,
      title:'收藏'
     },
     beforeEnter: (to, from, next) => {
      // ...
      if(to.meta.authority){//判断是否需要权限
                  if(localStorage.getItem('userName')!==null){
                      if(localStorage.getItem('pastWord')!==null){
                           next()
                      }else{
                        alert('密码不能为空')
                      }
                  }else{
                    alert('用户名不存在')
                }
            }
     },
     children:[
    //   {
    // //////////////////////////////////
    //   }
     ]
   }
  ]
}]
export default myCollect