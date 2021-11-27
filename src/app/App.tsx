import './App.scss'

import { FC } from 'react'
import { Outlet } from 'react-location'

import { getConfig } from '../config'

export const App: FC = () => {
  // 在项目启动前，应该先检查一下配置是否正确，特别是对于接入了 passport 的项目来说
  console.log('当前配置：', getConfig())
  return <Outlet />
}
