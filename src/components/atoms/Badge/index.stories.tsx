import { Meta, StoryFn } from '@storybook/react'
import Badge from '.'

export default {
  title: 'atoms/Badge',
  component: Badge,
  argTypes: {},
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />

export const Normal = Template.bind({})
Normal.args = {
  label: 'Badge',
  backgroundColor: 'black',
  color: 'white',
}
