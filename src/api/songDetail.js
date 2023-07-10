import request from '@/utils/request'

import momment from 'moment'
// 歌单详情
 export function songListDetail(id){
  return  request({
        url:'/playlist/detail',
        params:{
          id:id
        }
    })
 }
//  歌单详情动态
export function dynamicList(id){
    return  request({
          url:'/playlist/detail/dynamic',
          params:{
            // id:2105681544
            id:id
          }
      })
   }
    //获取歌单所有歌曲
   export function trackAll(id){
    return  request({
          url:'/playlist/track/all',
          params:{
            limit:50,
            // id:2105681544
            id:id
          }
      })
   }
  

   export class detailMessage{
    constructor(result){
        this.songId=result.id//歌曲id
        this.songsName=result.name////歌曲名字
        this.artists=result.ar[0].name//歌手
        this.album=result.al.name//专辑
        const formatTime=result.dt//格式华时间
        this.time=momment.utc(formatTime).format('mm:ss')//播放时长
    }
   }