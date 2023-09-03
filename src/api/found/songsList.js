import request from '@/utils/request'
//歌单 ( 网友精选碟 )
export const choiceness=((queryInfo)=>request({
       method:'GET',
       url:'/top/playlist',
       params:{
              limit: queryInfo.pagesize,
              cat: queryInfo.tag,
              offset: (queryInfo.pagenum - 1) * queryInfo.pagesize,
              before:''
       }
    
})
)
//全球歌单榜单
export const globalList=(()=>request({
    url:'/toplist',
   
}))

