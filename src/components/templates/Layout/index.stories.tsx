import { Meta, StoryFn } from '@storybook/react'
import Layout from '.'

export default {
  title: 'templates/Layout',
  component: Layout,
  argTypes: {
    children: {
      type: 'function',
    },
  },
} as Meta<typeof Layout>

export const Normal = () => {
  return <Layout>Main contents</Layout>
}
