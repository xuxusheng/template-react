import { Config } from '../interface'

// 获取指定 name 的 meta 标签中的 content 值
const getMetaContent = (name: string): string => {
  // 获取 meta 标签
  const meta = document.querySelector(`meta[name=${name}]`) as HTMLMetaElement

  return (meta && meta['content']) || ''
}

export const getProdConfig = (): Config => ({
  passportUrl: getMetaContent('passportUrl'),
  appId: getMetaContent('appId')
})
