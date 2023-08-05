import { Meta, StoryFn } from '@storybook/react'
import Text from '.'

export default {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    children: {
      type: 'function',
    },
  },
} as Meta<typeof Text>

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />

export const WithColor = Template.bind({})
WithColor.args = {
  children: 'WithColor',
  color: 'primary',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  children: 'ExtraSmall',
  variant: 'extraSmall',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small',
  variant: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Medium',
  variant: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  variant: 'large',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  children: 'ExtraLarge',
  variant: 'extraLarge',
}
