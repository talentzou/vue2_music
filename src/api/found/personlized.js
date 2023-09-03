import request from '@/utils/request'//把网络请求工具拿来
//个性推荐歌单
export const personlized=((params)=>request({
    url:"/personalized",
    params
}))
//轮播图·
export const banner=((params)=>request({
    url:"/banner",
    params
}))