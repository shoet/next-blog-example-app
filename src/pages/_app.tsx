import Layout from '@/components/templates/Layout'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/components/templates/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/themes'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { fetcher } from '@/utils/http'

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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ shouldRetryOnError: false, fetcher }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}
