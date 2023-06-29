import request from '@/utils/request'
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