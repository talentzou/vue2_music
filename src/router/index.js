import Vue from 'vue'
import VueRouter from 'vue-router'
import video from './children/video'
import myCollect from './children/myCollect'
import found from './children/found'
import songDetail from './children/songDetail'
import login from './children/login'
import { mvDetail } from './children/mvDetail'
Vue.use(VueRouter)
// const myrouter=['./childern/video'
//     {
//     path:'/layout',
//     component:layout
// },
// {
//     path:'/songItem',
//     component:songItem
// }]
const router=new VueRouter({
   
//    
routes: [
    {
        path: '/',
        redirect: '/Found/personRecommend'
       
     },
    //  登录
    ...login,
    //视频
    ...video,
    // 收藏
    ...myCollect,
    //发现
    ...found,
    //歌单详情
    ...songDetail,
    //mv详情
    ...mvDetail     

]
    // routes:myrouter
})
// router.beforeEach((to,from,next)=>{
//     if(to.meta.authority){//判断是否需要权限
//           if(localStorage.getItem('userName')!==null){
//               if(localStorage.getItem('pastWord'!==null)){
//                    next()
//               }else{
//                 alert('密码不能为空')
//               }
//           }else{
//             alert('用户名不存在')
//         }
//     }
//     }
// )
export default router