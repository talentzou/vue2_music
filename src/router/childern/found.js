const found=[{ 

        // path: '/layout',
        path:'',

        component:()=>import('@/layout/index'),
        //发现音乐
        children:[
           {
             path:'Found',
             component:()=>import('@/layout/childern/container'),
             children:[
                //个性推荐
                {   name:'personRecommend',
                    path:'personRecommend',
                    component:()=>import('@/pages/found/personRecommend')       
                },
               //歌单
                {   name:'songItem',
                    path:'songItem',
                    component:()=>import('@/pages/found/songItem')  
                },
                //歌手
                {   name:'singerList',
                path:'singerList',
                component:()=>import('@/pages/found/singerList')  
                },
                //排行榜
                {   name:'rangSong',
                path:'rangSong',
                component:()=>import('@/pages/found/rangSong')  
                },
                // 最新音乐
                {   name:'newSong',
                path:'newSong',
                component:()=>import('@/pages/found/newSong')  
                },
            ]
        }
    ]

}]
export default found