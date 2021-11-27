// 配置项
export interface Config {
  // 接入统一认证中心时使用
  appId: string // 应用 id，passport 认证时需要
  passportUrl: string // passport 地址，跳转时使用
}
