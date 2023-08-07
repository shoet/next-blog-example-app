import AppLogo from '@/components/atoms/AppLogo'
import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import { IconGitHub, IconTwitter, IconYoutube } from '@/components/atoms/Icons'

const Footer = () => {
  return (
    <footer>
      <Flex
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        height="200px"
        width="100%"
        backgroundColor="background"
        padding={4}
      >
        <Flex flexDirection="row">
          <AppLogo style="basic" />
        </Flex>
        <Flex flexDirection="row">
          <Box marginRight={2}>
            <IconGitHub href="#" size={22} />
          </Box>
          <Box marginRight={2}>
            <IconYoutube href="#" size={22} />
          </Box>
          <Box marginRight={0}>
            <IconTwitter href="#" size={22} />
          </Box>
        </Flex>
      </Flex>
    </footer>
  )
}

export default Footer
