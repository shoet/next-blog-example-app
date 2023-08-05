import Layout from '@/components/templates/Layout'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/components/templates/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
