import { getDevConfig } from './config.dev'
import { getProdConfig } from './config.prod'

export const getConfig = () => {
  // 开发环境从 env 中拿，生产环境从 meta 标签中取值
  return process.env.NODE_ENV === 'production'
    ? getProdConfig()
    : getDevConfig()
}
