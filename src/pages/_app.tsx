import type { AppProps } from 'next/app'

// 导入antd tailwindcss
import 'antd/dist/reset.css'
import '@/assets/css/tailwind.css'
// 重置样式
import 'normalize.css'
import '@/assets/css/global.scss'

// 引入redux
import { Provider } from 'react-redux'
import wrapper from '@/store'

// 布局
import Layout from '@/layouts'
import { useEffect } from 'react'

export default function App({ Component, ...rest }: AppProps) {
  // 1.Redux注入
  const { store, props } = wrapper.useWrappedStore(rest)

  // ssr 服务端不能使用window
  // const location = window.location
  // console.log("🚀 ~ file: _app.tsx:22 ~ App ~ location:", location)

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   console.log("🚀 ~ file: _app.tsx:28 ~ useEffect ~ window.scrollY:", window.scrollY)
  // }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Component {...rest.pageProps} />
      </Layout>
    </Provider>
  )
}
