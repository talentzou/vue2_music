import request from '@/utils/request'
const songslist=((queryInfo)=>request({
       method:'GET',
       url:'/top/playlist',
       params:{
              limit: queryInfo.pagesize,
              cat: queryInfo.tag,
              offset: (queryInfo.pagenum - 1) * queryInfo.pagesize,
              before:''
       }
    
})
   
)
export default songslist