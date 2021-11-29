// 是否在 qiankun 主应用中作为子应用加载
export const isQiankun = (): boolean => {
  return !!window.__POWERED_BY_QIANKUN__
}
