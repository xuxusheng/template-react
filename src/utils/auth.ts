// 跳转登录页面
import { getConfig } from '../config'
import { reactLocation } from '../route'
import { setToken } from './token'

export const login = (r?: string) => {
  // 1. 接 Passport
  // const redirectUrl = encodeURIComponent(r || window.location.href)
  // const { passportUrl, appId } = getConfig()
  // if (!passportUrl || !appId) {
  //   const errMsg =
  //     '未指定 passportUrl 或 appId，无法跳转统一认证中心，请检查后重试'
  //   console.error(errMsg)
  //   message.error(errMsg)
  //   return
  // }
  // // 构造 url 中 search 部分
  // const searchParams = new URLSearchParams({
  //   appId,
  //   redirectUrl
  // })
  // // 构造登录页 url
  // const href = `${passportUrl}?${searchParams.toString()}`
  // console.warn(`即将跳转登录页：${href}`)
  // // 跳转
  // window.location.href = href

  // 2. 自建登录
  const redirectUrl = encodeURIComponent(
    window.location.pathname + window.location.search
  )
  reactLocation.history.push(`/login?redirectUrl=${redirectUrl}`)

  // 3. 作为子应用，调用主应用传下来的 login 函数即可
}

// 跳转登出页面
export const logout = (r?: string) => {
  // 清空 token
  setToken('')

  // 1. 接 passport
  // const redirectUrl = encodeURIComponent(r || window.location.href)
  // const { passportUrl, appId } = getConfig()
  // if (!passportUrl || !appId) {
  //   const errMsg =
  //     '未指定 passportUrl 或 appId，无法跳转统一认证中心，请检查后重试'
  //   console.error(errMsg)
  //   message.error(errMsg)
  //   return
  // }
  // // 构造 url 中 search 部分
  // const searchParams = new URLSearchParams({
  //   appId,
  //   redirectUrl
  // })
  // // 构造登出页 url
  // const href = `${passportUrl}/logout?${searchParams.toString()}`
  // console.warn(`即将跳转登出页：${href}`)
  // // 跳转
  // window.location.href = href

  // 2. 自建登录
  // 清完 token 之后，直接跳转登录页即可
  login()

  // 3. 子应用
  // 作为子应用，就不要提供登出功能了，或者调用主应用传下来的 logout 函数，整个工作台登出好了
}
