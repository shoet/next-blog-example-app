import { Meta, StoryFn } from '@storybook/react'
import Box from '.'

export default {
  title: 'layout/Box',
  component: Box,
  argTypes: {},
} as Meta<typeof Box>

const Template: StoryFn<typeof Box> = (args) => <Box {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: 'Noamal',
  backgroundColor: 'gray',
  width: '50%',
}
