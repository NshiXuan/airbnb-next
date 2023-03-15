import type { AppProps } from 'next/app'

// 导入tailwindcss
import '@/assets/css/tailwind.css'
// 重置样式
import 'normalize.css'
import '@/assets/css/global.scss'

// 引入redux
import { Provider } from 'react-redux'
import wrapper from '@/store'

// 布局
import Layout from '@/layouts'

export default function App({ Component, ...rest }: AppProps) {
  // 1.Redux注入
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...rest.pageProps} />
      </Layout>
    </Provider>
  )
}
