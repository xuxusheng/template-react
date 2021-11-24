import { Alert, Avatar, Button, Space } from 'antd'
import { FC, useState } from 'react'

import avatar from './avatar.png'
import styles from './index.module.scss'

const HomeView: FC = () => {
  const [count, setCount] = useState(1)

  return (
    <div className={styles.root}>
      <h2>HomeView</h2>
      <Alert type="success" message="hello world" />
      <Avatar src={avatar} />
      <Space>
        <Button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          点击加 1
        </Button>
        {count}
      </Space>
    </div>
  )
}

export default HomeView
