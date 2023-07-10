// import request from '@/utils/request'
// import momment from 'moment'
// const newSongs=((info)=>request({
   
//     url:'/personalized/newsong',
//     //  url:'/album/new',
//      params:{
//      limit:50,
//      area:info.area,
//     }
// }))
// export default newSongs
// export class songMessage{
//     constructor(result){
//           if(result!==undefined&&result.song!==null&&result.song.artists[0]!==null&&result.album!==null){
//                   this.count=0//数目
//                   this.id =result.song.id//歌曲id
//                 //   this.url=result.song.url//歌曲url
//                   this.type=result.type//歌曲类型
//                   this.names=result.song.name//歌曲名字
//                   this.album = result.song.album.name//// 专辑名字
//                   this.picUrl = result.picUrl // 图片
//                   const time = result.song.duration// 歌曲时长
//                 //将数值型的毫秒值转化为分秒
//                   const format=momment.utc(time).format('mm:ss')
//                   this.times=format
//                   this.artists = result.song.artists[0].name// 作者名字
//     //              this.lyric = '' // 歌词
   
  
  
//     }
// }
// }