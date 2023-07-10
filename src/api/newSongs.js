import request from '@/utils/request'
import momment from 'moment'
const newSongs=((info)=>request({
   
   
     url:'/top/album',
     params:{
         
        area:info.area,
    }
}))
export default newSongs
export class songMessage{
    constructor(result){
        // console.log('新歌数据为:',result)
        if(result!==undefined&&result.artist!==null){
              
                this.id =result.id// 专辑id
                  this.album = result.name//// 专辑名字
      
                  const time = result.publishTime// 歌曲时长
                //将数值型的毫秒值转化为年月日
                  const format=momment.utc(time).format('YYYY-MM-DD')
                  this.times=format
                  this.artists = result.artist.name// 作者名字
   
   
  
  
    }
}
}