import { Meta, StoryFn } from '@storybook/react'
import SignInForm from '.'

export default {
  title: 'organisms/SignInForm',
  component: SignInForm,
  argTypes: {
    BlogForm: {
      type: 'string',
    },
  },
} as Meta<typeof SignInForm>

const Template: StoryFn<typeof SignInForm> = (args) => <SignInForm />

export const Normal = Template.bind({})
Normal.args = {}
