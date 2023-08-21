import { Meta, StoryFn } from '@storybook/react'
import TagForm from '.'

export default {
  title: 'atoms/TagForm',
  component: TagForm,
  argTypes: {},
} as Meta<typeof TagForm>

const Template: StoryFn<typeof TagForm> = (args) => (
  <TagForm
    value={[]}
    onKeyDown={(tags) => console.log(tags)}
    placeholder="Tags"
  />
)

export const Normal = Template.bind({})
Normal.args = {}
