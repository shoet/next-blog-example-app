import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import { PropsWithChildren } from 'react'
import Box from '@/components/layout/Box'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Box paddingLeft={4} paddingRight={4}>
        <Header />
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
