import { Alert } from 'antd'
import { FC } from 'react'

const HomeView: FC = () => {
  return (
    <div>
      <h2>HomeView</h2>
      <Alert type="success" message="hello" />
    </div>
  )
}

export default HomeView
