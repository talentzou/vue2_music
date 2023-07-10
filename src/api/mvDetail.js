
import request from '@/utils/request'
//mv详情
export   function Detail(id){
    return request({
      url:'/mv/detail',
    //   url:'/video/detail?id=5436712'
      params:{
        mvid:id
      }
    })
}
//获取 mv 点赞转发评论数数据
export   function detailInfo(id){
    return request({
      url:'mv/detail/info',
    
      params:{
        mvid:id
      }
    })
}
//相似mv/simi/mv
export   function simiMv(id){
  return request({
    url:'/simi/mv',
    params:{
      // mvid:10989376
      mvid:id
    }
  })
}
//mv地址
export   function mvUrl(id){
  return request({
    url:'/mv/url',
    params:{
      // id:10989376
      id:id
    }
  })
}
