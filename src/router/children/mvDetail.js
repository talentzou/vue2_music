export const mvDetail=[{
    path:'',
    component:()=>import('@/layout/index'),
    children:[
        {
            name:'mvDetail',
            path:'mvDetail',
            component:()=>import('@/pages/mvDetail/index')
    }
]
  
}]