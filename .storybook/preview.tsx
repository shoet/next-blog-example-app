import React from 'react'
import type { Preview } from '@storybook/react'
import GlobalStyle from '../src/components/templates/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
}

export default preview
