import { qiankun } from './qiankun'

export const TOKEN_KEY = 'token'

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  // 如果是作为子应用被工作台加载，那么 token 由主应用进行签发，直接返回主应用传递下来的 token 就行了

  if (qiankun.isPoweredBy()) {
    return qiankun.getProps().token || ''
  }
}
