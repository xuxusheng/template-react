import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import HomeView from '../view/Home'

export const RootRoute: FC = () => {
  return (
    <Routes>
      {/*<Route path="/" element={<RootView />} />*/}

      <Route path="/home" element={<HomeView />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
