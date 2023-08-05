import { AppTheme } from '@/types/styles'
import { theme } from '@/themes'

const ColorProps = new Set(['color', 'background-color'])
export type Color = keyof typeof theme.colors | (string & {})

const FontSizeProps = new Set(['font-size'])
export type FontSize = keyof typeof theme.fontSizes | (string & {})

const LetterSpacingProps = new Set(['letter-spacing'])
export type LetterSpacing = keyof typeof theme.letterSpacings | (string & {})

export function toThemeValue(
  propKey: string,
  value: any,
  theme: AppTheme,
): string {
  if (isColorThemeKey(propKey, value)) {
    return theme.colors[value as keyof typeof theme.colors]
  }
  if (isFontSizeThemeKey(propKey, value)) {
    return theme.fontSizes[value as keyof typeof theme.fontSizes]
  }
  if (isLetterSpacingThemeKey(propKey, value)) {
    return theme.letterSpacings[value as keyof typeof theme.letterSpacings]
  }
  return value
}

function isColorThemeKey(propKey: string, value: any): value is Color {
  return value && ColorProps.has(propKey) && value in theme.colors
}

function isFontSizeThemeKey(propKey: string, value: any): value is FontSize {
  return value && FontSizeProps.has(propKey) && value in theme.fontSizes
}

function isLetterSpacingThemeKey(
  propKey: string,
  value: any,
): value is LetterSpacing {
  return (
    value && LetterSpacingProps.has(propKey) && value in theme.letterSpacings
  )
}
