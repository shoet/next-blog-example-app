import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'

type ContentProps = {
  MainContent: React.ReactNode
  SubContent: React.ReactNode
}

const Content = (props: ContentProps) => {
  const { MainContent, SubContent } = props
  return (
    <Flex flexDirection={{ base: 'column', sm: 'row' }} justifyContent="center">
      <Box
        width={{ base: '100%', sm: '70%' }}
        marginBottom={{ base: 3, sm: 0 }}
      >
        {MainContent}
      </Box>
      <Box width={{ base: '100%', sm: '30%' }}>{SubContent}</Box>
    </Flex>
  )
}

export default Content