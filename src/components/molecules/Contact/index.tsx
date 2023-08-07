import { IconGitHub, IconTwitter, IconYoutube } from '@/components/atoms/Icons'
import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import { Responsive } from '@/utils/styles'

type Alignment = 'start' | 'center' | 'end'

type ContactProps = {
  alignment?: Responsive<Alignment>
}

const Contact = (props: ContactProps) => {
  const { alignment = 'center' } = props
  return (
    <Flex
      position={{ sm: 'sticky' }}
      top="40px"
      flexDirection="column"
      alignItems={alignment}
    >
      <Text marginBottom={2} variant="small">
        Contact
      </Text>
      <Flex
        marginBottom={2}
        alignItems="center"
        flexDirection="row"
        justifyContent="end"
      >
        <Box marginRight={2}>
          <IconGitHub href="#" size={16} />
        </Box>
        <Box marginRight={2}>
          <IconYoutube href="#" size={16} />
        </Box>
        <Box marginRight={0}>
          <IconTwitter href="#" size={16} />
        </Box>
      </Flex>
      <Text paddingBottom={2} variant="extraSmall">
        example@mail.com
      </Text>
    </Flex>
  )
}

export default Contact
