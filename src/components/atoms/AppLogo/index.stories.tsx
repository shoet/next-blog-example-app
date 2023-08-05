import { Meta } from '@storybook/react'
import AppLogo from '.'

export default {
  title: 'atoms/AppLogo',
  component: AppLogo,
  argTypes: {
    style: {
      type: 'string',
    },
  },
} as Meta<typeof AppLogo>

export const Box = () => <AppLogo />
export const Basic = () => <AppLogo style="basic" />
