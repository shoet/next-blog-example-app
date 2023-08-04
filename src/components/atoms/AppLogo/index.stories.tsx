import { Meta } from '@storybook/react'
import AppLogo from '.'

export default {
  title: 'atoms/AppLogo',
  component: AppLogo,
} as Meta<typeof AppLogo>

export const Normal = () => <AppLogo />
