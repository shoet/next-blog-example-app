import { Meta } from '@storybook/react'
import Header from '.'

export default {
  title: 'organisms/Header',
  component: Header,
  argTypes: {},
} as Meta<typeof Header>

export const Normal = () => <Header />
