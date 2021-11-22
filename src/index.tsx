import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { App } from './app/App'
import { history } from './route/history'
import { HistoryRouter } from './route/HistoryRouter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000, // 数据保质期 10 秒钟，10 秒钟之内不再发第二次查询请求，直接读缓存，在 staleTime 到 cacheTime 之间的这个时间段，会先从缓存中读数据，然后发请求更新缓存（所谓的乐观更新）
      cacheTime: 30 * 1000, // 缓存有效期 30 秒，30 秒之后不再从缓存中读数据
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

render(
  <ConfigProvider locale={zhCN}>
    <QueryClientProvider client={queryClient}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </QueryClientProvider>
  </ConfigProvider>,
  document.querySelector('#root')
)
