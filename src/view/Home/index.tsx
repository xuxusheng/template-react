import { Alert, Avatar, Button, Card, Modal, Space } from 'antd'
import { FC, useState } from 'react'

import avatar from './avatar.png'
import styles from './index.module.scss'

const HomeView: FC = () => {
  const [count, setCount] = useState(1)

  const handleHello = () => {
    Modal.success({
      title: 'hello',
      okText: '确认'
    })
  }

  return (
    <div className={styles.root}>
      <Card>
        <h2>HomeView</h2>
        <p>paragraph</p>
      </Card>

      <Alert type="success" message="hello world" onClick={handleHello} />

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
