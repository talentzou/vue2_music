import request from '@/utils/request'
//mv评论
export function mvComment(id){
    return  request({
        url:'/comment/mv',
        method:'post',
        params:{
            id:id,
            limit:50
        }
      })
}