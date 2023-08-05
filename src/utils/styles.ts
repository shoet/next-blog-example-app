import { AppTheme } from '@/types/styles'
import { theme } from '@/themes'

// CSSプロパティ判定用
const ColorPropKeys = new Set(['color', 'background-color'])
const FontSizePropKeys = new Set(['font-size'])
const LetterSpacingPropKeys = new Set(['letter-spacing'])
const SpacePropKeys = new Set([
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
])

// Themeキー判定用
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacingThemeKeys = keyof typeof theme.letterSpacings
type SpaceThemeKeys = keyof typeof theme.spaces

// 型推論用
export type Color = ColorThemeKeys | (string & {})
export type FontSize = FontSizeThemeKeys | (string & {})
export type LetterSpacing = LetterSpacingThemeKeys | (string & {})
export type Space = SpaceThemeKeys | (string & {})

export function toThemeValue(propKey: string, value: any, theme: AppTheme) {
  if (ColorPropKeys.has(propKey) && isColorThemeKey(value, theme)) {
    return theme.colors[value]
  } else if (
    FontSizePropKeys.has(propKey) &&
    isFontSizeThemeKey(value, theme)
  ) {
    return theme.fontSizes[value]
  } else if (
    LetterSpacingPropKeys.has(propKey) &&
    isLetterSpacingThemeKey(value, theme)
  ) {
    return theme.letterSpacings[value]
  } else if (SpacePropKeys.has(propKey) && isSpaceThemeKey(value, theme)) {
    return theme.spaces[value]
  }
  return value
}

function isColorThemeKey(value: any, theme: AppTheme): value is ColorThemeKeys {
  return Object.keys(theme.colors).filter((k) => k == value).length > 0
}

function isFontSizeThemeKey(
  value: any,
  theme: AppTheme,
): value is FontSizeThemeKeys {
  return Object.keys(theme.fontSizes).filter((k) => k == value).length > 0
}

function isLetterSpacingThemeKey(
  value: any,
  theme: AppTheme,
): value is LetterSpacingThemeKeys {
  return Object.keys(theme.letterSpacings).filter((k) => k == value).length > 0
}

function isSpaceThemeKey(value: any, theme: AppTheme): value is SpaceThemeKeys {
  return Object.keys(theme.spaces).filter((k) => k == value).length > 0
}
