import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import { PropsWithChildren } from 'react'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flex flexDirection="column" minHeight="100vh">
        <Box
          flexGrow={1}
          paddingLeft={{ base: 0, sm: 4 }}
          paddingRight={{ base: 0, sm: 4 }}
        >
          <Header />
          <main>{children}</main>
        </Box>
        <Box marginTop={3}>
          <Footer />
        </Box>
      </Flex>
    </>
  )
}

export default Layout
