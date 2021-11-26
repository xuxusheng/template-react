import './App.scss'

import { FC } from 'react'
import { Outlet } from 'react-location'

export const App: FC = () => {
  return <Outlet />
}
