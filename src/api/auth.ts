import { Res } from '../interface'
import { Api } from './api'

class AuthApi extends Api {
  // 登录
  login = (data: { name: string; password: string }) =>
    this.axios.post<Res<{ token: string }>>('/api/v1/auth/login', data)

  // 通过 appId 换取 appToken
  getAppToken = (appId: string) =>
    this.axios.post<Res<{ appToken: string }>>('/api/v1/auth/get-app-token', {
      appId
    })
}

export const authApi = new AuthApi()
