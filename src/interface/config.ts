// 配置项
export interface Config {
  // 接入统一认证中心时使用
  appId: string // 应用 id，passport 认证时需要
  passportUrl: string // passport 地址，跳转时使用

  host: string // 当作为子应用加载时，无法拿到自身独立部署的 host，需要通过配置进行指定
}
