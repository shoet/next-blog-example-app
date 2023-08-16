import { Meta, StoryFn } from '@storybook/react'
import Button from '.'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    Button: {
      type: 'string',
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'danger',
}
