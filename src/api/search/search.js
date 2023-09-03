import request from '@/utils/request'
//音乐搜索
const search=((msg)=>request({
    method:'GET',
    url:'/cloudsearch',
    params:{
        keywords: msg,
        limit:8
    }
})
)
export default search