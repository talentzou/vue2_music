import request from '@/utils/request'//把网络请求工具拿来
export const personlized=((params)=>request({
    url:"/personalized",
    params
}))