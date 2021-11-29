import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import ReactDOM from 'react-dom'
import { Router } from 'react-location'
import { ReactLocationDevtools } from 'react-location-devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { App } from './app/App'
import { reactLocation, routes } from './route'
import { qiankun } from './utils/qiankun'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000, // 数据保质期 10 秒钟，10 秒钟之内不再发第二次查询请求，直接读缓存，在 staleTime 到 cacheTime 之间的这个时间段，会先从缓存中读数据，然后发请求更新缓存（所谓的乐观更新）
      cacheTime: 30 * 1000, // 缓存有效期 30 秒，30 秒之后不再从缓存中读数据
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

function render() {
  const { container, basepath } = qiankun.getProps()
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <QueryClientProvider client={queryClient}>
        <Router location={reactLocation} routes={routes} basepath={basepath}>
          <App />
          <ReactQueryDevtools />
          <ReactLocationDevtools position="bottom-right" />
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ConfigProvider>,
    (container || document).querySelector('#root')
  )
}

if (!qiankun.isPoweredBy()) {
  // 不是从工作台基座中作为子应用加载，而是独立访问
  render()
}

/**
 * 下面的代码为 qiankun 子应用的生命周期钩子函数，如果开发的不是子应用的话，可以都删掉，webpack 中的 output 里的 umd 相关配置也可以都删掉
 */

// export async function bootstrap() {
//   console.log('【 MicroApp 】Bootstrap')
// }
//
// export async function mount(props: QiankunProps) {
//   console.log('【 MicroApp 】Mount', props)
//
//   // 将基座应用中传递下来的属性保存下来
//   qiankun.setProps(props)
//
//   render()
// }
//
// export async function unmount(props: QiankunProps) {
//   console.log('【 MicroApp 】Unmount', props)
//
//   // 这里保存一下我也不确定有没有意义，先写上，后面对比下这里的 props 和 mount 时的 props 是不是一样的，同时确认下子应用 unmount 后，内存中的 qiankun 对象会不会销毁
//   qiankun.setProps(props)
//
//   const { container } = props
//   const element = (container || document).querySelector('#root')
//   element && ReactDOM.unmountComponentAtNode(element)
// }
