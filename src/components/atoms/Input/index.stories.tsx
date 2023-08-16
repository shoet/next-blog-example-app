import { Meta, StoryFn } from '@storybook/react'
import Input from '.'

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

export const Normal = Template.bind({})
Normal.args = {
  placeholder: 'placeholder',
}

export const Error = Template.bind({})
Error.args = {
  isError: true,
}
