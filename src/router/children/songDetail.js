const songDetail=[{
    path:'',
    component:()=>import('@/layout/index'),
    children:[
        {   name:'songDetail',
            path:'songDetail',
            component:()=>import('@/pages/songDetail/index')
        }
    ]
}]
export default songDetail