import { Meta, StoryFn } from '@storybook/react'
import Contact from '.'
import Box from '@/components/layout/Box'

export default {
  title: 'molecules/Contact',
  component: Contact,
} as Meta<typeof Contact>

const Template: StoryFn<typeof Contact> = (args) => {
  return (
    <Box width="100px">
      <Contact {...args} />
    </Box>
  )
}

export const AlignStart = Template.bind({})
AlignStart.args = {
  alignment: 'start',
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
  alignment: 'center',
}

export const AlignEnd = Template.bind({})
AlignEnd.args = {
  alignment: 'end',
}
