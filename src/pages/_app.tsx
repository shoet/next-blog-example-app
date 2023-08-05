import Layout from '@/components/templates/Layout'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/components/templates/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
