import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'

type Alignment = 'start' | 'center' | 'end'

type ContactProps = {
  alignment?: Alignment
}

const Contact = (props: ContactProps) => {
  const { alignment = 'center' } = props
  return (
    <Flex
      position="sticky"
      top="40px"
      flexDirection="column"
      alignItems={alignment}
      maxWidth="200px"
    >
      <Text marginBottom={2} variant="small">
        Contact
      </Text>
      <Flex
        marginBottom={2}
        flexDirection="row"
        justifyContent="end"
        width="100%"
      >
        <Text variant="extraSmall" marginRight={1}>
          ①
        </Text>
        <Text variant="extraSmall" marginRight={1}>
          ②
        </Text>
        <Text variant="extraSmall">③</Text>
      </Flex>
      <Text paddingBottom={2} variant="extraSmall">
        example@mail.com
      </Text>
    </Flex>
  )
}

export default Contact
