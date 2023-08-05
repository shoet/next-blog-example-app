import { theme } from '@/themes'

export type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
