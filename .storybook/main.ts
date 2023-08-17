import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'
import TSConfigPathPlugin from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-console',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve !== undefined) {
      config.resolve.plugins = [
        new TSConfigPathPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        }),
      ]
    }
    return config
  },
}
export default config
