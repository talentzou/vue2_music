import Vue from 'vue'
import VueRouter from 'vue-router'
import video from './childern/video'
import myCollect from './childern/myCollect'
import found from './childern/found'

Vue.use(VueRouter)
// const myrouter=[
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

    //视频
    ...video,
    // 收藏
    ...myCollect,
    //发现
    ...found


]
    // routes:myrouter
})
export default router