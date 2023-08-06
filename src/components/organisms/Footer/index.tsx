import AppLogo from '@/components/atoms/AppLogo'
import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'

const Footer = () => {
  return (
    <footer>
      <Flex
        flexDirection="row"
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
          <Box marginRight={1}>
            <Text variant="extraLarge">icon1</Text>
          </Box>
          <Box marginRight={1}>
            <Text variant="extraLarge">icon1</Text>
          </Box>
          <Box marginRight={1}>
            <Text variant="extraLarge">icon1</Text>
          </Box>
        </Flex>
      </Flex>
    </footer>
  )
}

export default Footer
