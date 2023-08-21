import { Meta, StoryFn } from '@storybook/react'
import BlogForm from '.'

export default {
  title: 'organisms/BlogForm',
  component: BlogForm,
  argTypes: {
    BlogForm: {
      type: 'string',
    },
  },
} as Meta<typeof BlogForm>

const Template: StoryFn<typeof BlogForm> = (args) => <BlogForm />

export const Normal = Template.bind({})
Normal.args = {}
