import { Navigate, Route } from 'react-location'

import HomeView from '../view/Home'

export const routes: Route[] = [
  {
    path: '/home',
    element: <HomeView />
  },
  {
    element: <Navigate to="/home" />
  }
]
