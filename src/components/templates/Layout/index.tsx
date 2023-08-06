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
          paddingLeft={{ base: 2, sm: 4 }}
          paddingRight={{ base: 2, sm: 4 }}
        >
          <Box maxWidth="1280px" marginLeft="auto" marginRight="auto">
            <Box marginBottom={3}>
              <Header />
            </Box>
            <main>{children}</main>
          </Box>
        </Box>
        <Box marginTop={3}>
          <Footer />
        </Box>
      </Flex>
    </>
  )
}

export default Layout
