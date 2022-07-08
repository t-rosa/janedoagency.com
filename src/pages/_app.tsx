import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'store'
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
