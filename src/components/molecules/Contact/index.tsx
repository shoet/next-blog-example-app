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
    <Flex flexDirection="column" alignItems={alignment}>
      <Text marginBottom={2} variant="small">
        Contact
      </Text>
      <Flex
        marginBottom={2}
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Text variant="extraSmall">①</Text>
        <Text variant="extraSmall">②</Text>
        <Text variant="extraSmall">③</Text>
      </Flex>
      <Text paddingBottom={2} variant="extraSmall">
        example@mail.com
      </Text>
    </Flex>
  )
}

export default Contact
