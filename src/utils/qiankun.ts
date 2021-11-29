export interface QiankunProps {
  container: HTMLElement
  basepath: string
  token: string
}

export class Qiankun {
  #props: Partial<QiankunProps> = {}
  #createdAt = new Date().toISOString() // 实例化的时间，调试使用

  isPoweredBy() {
    return !!window.__POWERED_BY_QIANKUN__
  }

  publicPath() {
    return window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ || ''
  }

  setProps(props?: QiankunProps) {
    props && (this.#props = props)
  }

  getProps() {
    return this.#props
  }
}

export const qiankun = new Qiankun()
