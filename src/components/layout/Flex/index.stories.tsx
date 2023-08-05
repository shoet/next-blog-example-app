import { Meta } from '@storybook/react'
import Flex from '.'
import Box from '../Box'

export default {
  title: 'layout/Flex',
  component: Flex,
  argTypes: {},
} as Meta<typeof Flex>

export const FlexDirectionColumn = () => {
  return (
    <Flex
      flexDirection="row"
      width="100%"
      justifyContent="space-between"
      backgroundColor="gray"
    >
      <Box backgroundColor="blue">Box1</Box>
      <Box backgroundColor="green">Box2</Box>
    </Flex>
  )
}
