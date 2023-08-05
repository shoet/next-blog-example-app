import { css, styled } from 'styled-components'
import { Color, FontSize, LetterSpacing, toThemeValue } from '@/utils/styles'
import { theme } from '@/themes'

type Variant = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'

const variants = {
  extraSmall: {
    fontSize: 'extraSmall',
    letterSpacing: 'extraSmall',
  },
  small: {
    fontSize: 'small',
    letterSpacing: 'small',
  },
  medium: {
    fontSize: 'medium',
    letterSpacing: 'medium',
  },
  large: {
    fontSize: 'large',
    letterSpacing: 'large',
  },
  extraLarge: {
    fontSize: 'extraLarge',
    letterSpacing: 'extraLarge',
  },
}

type TextProps = {
  variant?: Variant
  color?: Color
  backgroundColor?: Color
  fontSize?: FontSize
  letterSpacing?: LetterSpacing
  fontWeight?: string
  textAlign?: string
  textShadow?: string
}

const Text = styled.span.withConfig({
  shouldForwardProp: (props) =>
    !['variant', 'backgroundColor', 'fontSize', 'letterSpacing'].includes(
      props,
    ),
})<TextProps>`
  ${({ variant }) => {
    if (variant && variants[variant]) {
      const style = variants[variant]
      return css`
        !props.fontSize && font-size: ${toThemeValue(
          'font-size',
          style.fontSize,
          theme,
        )};
        !props.letterSpacing && letter-spacing: ${toThemeValue(
          'letter-spacing',
          style.letterSpacing,
          theme,
        )};
      `
    }
  }}
  color: ${(props) => toThemeValue('color', props.color, theme)};
  background-color: ${(props) =>
    toThemeValue('background-color', props.backgroundColor, theme)};
  font-size: ${(props) => toThemeValue('font-size', props.fontSize, theme)};
  letter-spacing: ${(props) =>
    toThemeValue('letter-spacing', props.letterSpacing, theme)};
  font-weight: ${(props) =>
    toThemeValue('font-weight', props.fontWeight, theme)};
  text-align: ${(props) => toThemeValue('text-align', props.textAlign, theme)};
  text-shadow: ${(props) =>
    toThemeValue('text-shadow', props.textShadow, theme)};
`

export default Text
Text.defaultProps = {
  variant: 'extraSmall',
}
