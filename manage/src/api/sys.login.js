import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/account/login',  // 根据实际自行修改， 已添加跨域 cookie 请求 / 后端对应程序开启跨域设置
    method: 'post',
    data
  })
}
