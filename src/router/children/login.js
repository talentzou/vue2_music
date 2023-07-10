const login=[{
   name:'login',
   path:'/login',
   component:()=>import('@/pages/login/index'),
   children:[
    {
        name:'enter',
        path:'enter',
        component:()=>import('@/pages/login/children/login.vue'),
    },
    {
        name:'register',
        path:'register',
        component:()=>import('@/pages/login/children/register.vue'),
    }
   ]
}]
export default login