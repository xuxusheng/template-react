import { Alert, Avatar, Button, Card, Space } from 'antd'
import { FC, useState } from 'react'

import avatar from './avatar.png'
import styles from './index.module.scss'

const HomeView: FC = () => {
  const [count, setCount] = useState(1)

  return (
    <div className={styles.root}>
      <Card>
        <h2>HomeView</h2>
      </Card>
      <Alert type="success" message="hello world" />

      <Card>
        <Avatar src={avatar} />
      </Card>

      <Card>
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
      </Card>
    </div>
  )
}

export default HomeView
