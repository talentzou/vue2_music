
const video=[{
  path:'',
  component:()=>import('@/layout/index'),
  children:[
    {
      name:'parentVideo',
      path:'video',
      component:()=> import('@/pages/mv/index'),

      children:[
        {
          name: 'mvRang',
          path: 'mvRang',
          component: () => import('@/pages/mv/child/mvRang')
        },
        {
          name:'officialRecommend',
          path:'officialRecommend',
          component: () => import('@/pages/mv/child/officialRecommend')

        },
        {
          name:'newMv',
          path:'newMv',
          component: () => import('@/pages/mv/child/newMv')
        }
      ]
    }
  ]
}]
export default video
