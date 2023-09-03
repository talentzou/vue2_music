import request from '@/utils/request'
import momment from 'moment'
// 新专辑
 export const album=((info)=>request({
     url:'/top/album',
     params:{
         
        area:info.area,
    }
}))
// 新歌
export const  newMusic= function newMusic(info){
 return request({
    url:'/top/song',
    params:{
       type:info.type,
   }
})
}

export class newMusicDate{
  constructor(result){
    this.songsName=result.name;// 歌曲名字
    this.songId=result.id;//歌曲id
    const time2=result.duration;
    const formatTime=momment.utc(time2).format('mm:ss');
    this.time=formatTime;//歌曲时长
    this.artists=result.artists[0].name;//歌手
    this.singerId=result.artists[0].id;//歌手id
    this.album = result.album.name;// 专辑名字
    this.imgUrl=result.album.picUrl
    //图片
  }
}