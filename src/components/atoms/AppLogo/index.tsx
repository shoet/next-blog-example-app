import Text from '../Text'
import Flex from '@/components/layout/Flex'

type AppLogoStyle = 'box' | 'basic'

type AppLogoProps = {
  style?: AppLogoStyle
}

const AppLogo = (props: AppLogoProps) => {
  const { style = 'box' } = props
  return (
    <>
      {style === 'box' ? (
        <Flex
          width="100px"
          justifyContent="center"
          padding={2}
          backgroundColor="primary"
        >
          <Text color="white" fontWeight="700">
            AppLogo
          </Text>
        </Flex>
      ) : (
        <Text color="black" fontWeight="700" fontSize="medium">
          AppLogo
        </Text>
      )}
    </>
  )
}

export default AppLogo
