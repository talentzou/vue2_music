
const myCollect=[{
   path:'',
   component:()=>import('@/layout/index'),
   children:[
    {
      name:'myCollect',
      path:'myCollect',
      component:()=>import('@/pages/myCollect/index')
    }
   ]
}]
export default myCollect
