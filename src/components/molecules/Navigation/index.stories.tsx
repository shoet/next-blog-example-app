import { Meta, StoryFn } from '@storybook/react'
import Navigation from '.'

export default {
  title: 'molecules/Navigation',
  component: Navigation,
  argTypes: {},
} as Meta<typeof Navigation>

const Template: StoryFn<typeof Navigation> = (args) => <Navigation />

export const Normal = Template.bind({})
Normal.args = {}
