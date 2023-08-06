import Layout from '@/components/templates/Layout'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/components/templates/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/themes'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
