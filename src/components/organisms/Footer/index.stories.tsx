import { Meta, StoryFn } from '@storybook/react'
import Footer from '.'

export default {
  title: 'organisms/Footer',
  component: Footer,
  argTypes: {
    xxx: {
      type: 'string',
    },
  },
} as Meta<typeof Footer>

const Template: StoryFn<typeof Footer> = (args) => <Footer />

export const Normal = Template.bind({})
Normal.args = {}
