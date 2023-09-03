//最热推荐
import request from '@/utils/request'
export function personalizedOne(){
  return  request({
        url:'/personalized/mv',
    })
}
// 网易出品
export function exclusive(val){  
    return request({
        url:'/mv/exclusive/rcmd',
        params:{
          offset:val
        }
    })

}
//排行榜
export function topMv(info){  
  console.log('apishuju',info)
    return request({
        url:'/top/mv',
        params:{
          offset:info.offset,
          area:info.area
        }
    })

}
//最新mv
export function mvFirst(info){  
  return request({
      url:'/mv/first',
      params:{
       area:info.area
      }
  })

}
    

