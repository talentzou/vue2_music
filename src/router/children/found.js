const found=[{ 

        path:'',
        component:()=>import('@/layout/index'),
        //发现音乐
        children:[
           {
             path:'Found',
            //  component:()=>import('@/layout/childern/container'),
            component:()=>import('@/pages/found/container'),
             children:[
                //个性推荐
                {   name:'personRecommend',
                    path:'personRecommend',
                    component:()=>import('@/pages/found/personRecommend')       
                },
               //歌单
                {   name:'songList',
                    path:'songList',
                    component:()=>import('@/pages/found/songList')  
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