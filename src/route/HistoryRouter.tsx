import { BrowserHistory } from 'history'
import { FC, useLayoutEffect, useState } from 'react'
import { Router } from 'react-router-dom'

interface Props {
  history: BrowserHistory
}

export const HistoryRouter: FC<Props> = ({ history, children }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  })

  useLayoutEffect(() => {
    history.listen(setState)
  }, [history])

  return (
    <Router navigator={history} {...state}>
      {children}
    </Router>
  )
}
