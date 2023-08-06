import { Meta, StoryFn } from '@storybook/react'
import Profile from '.'

export default {
  title: 'molecules/Profile',
  component: Profile,
  argTypes: {},
} as Meta<typeof Profile>

const Template: StoryFn<typeof Profile> = (args) => <Profile />

export const Normal = Template.bind({})
Normal.args = {}
