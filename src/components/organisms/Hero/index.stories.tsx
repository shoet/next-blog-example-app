import { Meta, StoryFn } from '@storybook/react'
import Hero from '.'

export default {
  title: 'organisms/Hero',
  component: Hero,
  argTypes: {
    title: {
      type: 'string',
    },
    subTitle: {
      type: 'string',
    },
    imageOn: {
      type: 'boolean',
    },
  },
  args: {
    title: 'Title',
    subTitle: 'subTitle,subTitle',
  },
} as Meta<typeof Hero>

const Template: StoryFn<typeof Hero> = (args) => <Hero {...args} />

export const Normal = Template.bind({})
export const ImageOn = Template.bind({})
ImageOn.args = {
  imageOn: true,
}
