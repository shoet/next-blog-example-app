import { Meta, StoryFn } from '@storybook/react'
import { IconGitHub } from '.'

export default {
  title: 'atoms/Icon',
  component: IconGitHub,
} as Meta<typeof IconGitHub>

export const GitHub = () => {
  return <IconGitHub href="#" />
}
