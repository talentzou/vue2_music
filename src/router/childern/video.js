const video=[{
    path:'',
    component:()=>import('@/layout/index'),
    children:[
     { 
       name:'video',
       path:'video',
       component:()=>import('@/pages/video/index')
     }
    ]
 }]
 export default video