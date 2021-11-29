import { isInteger, parseInt } from 'lodash-es'

// 一个 Page 类，用于处理从 url 中获取 pn、ps 参数时各种边界判断及格式化问题
export class Page {
  #pn = 1
  #ps = 10

  constructor(pn: unknown, ps: unknown) {
    let parsePn
    typeof pn === 'number' ? (parsePn = pn) : null
    typeof pn === 'string' ? (parsePn = parseInt(pn)) : null
    if (parsePn && isInteger(parsePn) && parsePn > 0) {
      this.#pn = parsePn
    }

    let parsePs
    typeof ps === 'number' ? (parsePs = ps) : null
    typeof ps === 'string' ? (parsePs = parseInt(ps)) : null
    if (parsePs && isInteger(parsePs) && parsePs > 0) {
      this.#ps = parsePs
    }
  }

  get pn() {
    return this.#pn
  }

  set pn(value) {
    this.#pn = value
  }

  get ps() {
    return this.#ps
  }

  set ps(value: number) {
    this.#ps = value
  }
}
