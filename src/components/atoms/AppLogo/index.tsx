import Text from '../Text'
import Flex from '@/components/layout/Flex'

const AppLogo = () => {
  return (
    <Flex
      width="100px"
      justifyContent="center"
      padding={2}
      backgroundColor="primary"
    >
      <Text color="white" fontWeight="bold">
        AppLogo
      </Text>
    </Flex>
  )
}

export default AppLogo
