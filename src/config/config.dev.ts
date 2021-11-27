import { Config } from '../interface'

export const getDevConfig = (): Config => ({
  // webpack5 不再包含 process 的 polyfill，dotenv-webpack 插件只在 dev 环境下引入了，prod 环境并没有
  // 所以要确保线上代码不能执行到这里，否则会报错。
  passportUrl: process.env.PASSPORT_URL || '',
  appId: process.env.APP_ID || ''
})
