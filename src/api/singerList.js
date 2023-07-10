import request from '@/utils/request'

const singerList=((info)=>request({
    url:'/artist/list',
    params:{
       type:info.type,
       area:info.area,
       limit:info.limit,
       offset:(info.offset-1)*info.limit
       
    }
   
}))
export default  singerList
