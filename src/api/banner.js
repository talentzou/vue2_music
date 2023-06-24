import request from '@/utils/request'//把网络请求工具拿来
export const banner=((params)=>request({
    url:"/banner",
    params
}))