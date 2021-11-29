import { message, Modal } from 'antd'
import axios, { AxiosInstance } from 'axios'

import { getToken, login, setToken } from '../utils'

enum ErrCode {
  Success = 0,

  // token 相关错误
  TokenEmpty = 401_00_001,
  TokenExpired = 401_00_002,
  TokenInvalid = 401_00_003
}

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    validateStatus: () => true // 不管 http 状态码为多少，都不抛出错误，在响应拦截器中进行处理
  })

  // 请求拦截器
  instance.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
      Authorization: getToken() ? `Bearer ${getToken()}` : ''
    }
    // 如果后端接口接受的参数规范是蛇形，需要转换的话，在这里处理
    // config.data = c2s(config.data);
    // config.params = c2s(config.params);
    return config
  })

  // 响应拦截器
  instance.interceptors.response.use((res) => {
    const data = res.data

    // 判断接口的返回数据，是否符合预定义的格式
    if (!Object.prototype.hasOwnProperty.call(data, 'errCode')) {
      // 返回的数据中不具备 errCode 字段
      let msg = res.statusText
      if (res.status === 200) {
        // 状态码 200 的时候，返回的数据格式不对，说明可能后端代码有问题
        msg = '接口返回数据格式有误，请联系管理员'
      }
      message.error(msg)
      // 将错误往外抛，打断正常的代码执行
      throw new Error(msg)
    }

    // 如果是 token 相关的错误，直接清空当前的 token，并跳转到登录页面
    if (
      [ErrCode.TokenEmpty, ErrCode.TokenExpired, ErrCode.TokenInvalid].includes(
        data.errCode
      )
    ) {
      setToken('')

      Modal.error({
        okText: '确认',
        content:
          data.errCode === ErrCode.TokenEmpty
            ? '请点击确认按钮进行登录'
            : '登录状态已失效，请点击确认按钮重新登录',
        onOk: () => {
          login()
        }
      })

      throw data
    }

    // 接口返回的数据包含 errCode，符合业务预期
    if (data.errCode !== ErrCode.Success) {
      // todo 判断一下 errDetail 字段，不为空数组的话，就用 notification 提示
      // errCode 不为 success 的情况，说明后端返回了一个业务错误
      message.error(data.errMsg || '未知错误，请联系管理员')

      // 将业务错误往外抛，打断正常代码执行，或者被 try catch 捕获
      throw data
    }

    // 此时 errCode 为 success，不管状态码或其他数据怎么样，都默认为请求成功
    return res
  })

  return instance
}

export class Api {
  protected readonly axios = createAxiosInstance()
}
