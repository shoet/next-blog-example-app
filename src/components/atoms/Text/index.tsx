import { css, styled } from 'styled-components'
import {
  Color,
  FontSize,
  LetterSpacing,
  Responsive,
  toResponsiveValue,
} from '@/utils/styles'
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
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  fontSize?: Responsive<FontSize>
  letterSpacing?: Responsive<LetterSpacing>
  fontWeight?: Responsive<string>
  textAlign?: Responsive<string>
  textShadow?: Responsive<string>
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
        !props.fontSize && 
          ${toResponsiveValue('font-size', style.fontSize, theme)}
        !props.letterSpacing &&
          ${toResponsiveValue('letter-spacing', style.letterSpacing, theme)}
      `
    }
  }}
  ${(props) => toResponsiveValue('color', props.color, theme)}
  ${(props) =>
    toResponsiveValue('background-color', props.backgroundColor, theme)}
  ${(props) => toResponsiveValue('font-size', props.fontSize, theme)}
  ${(props) => toResponsiveValue('letter-spacing', props.letterSpacing, theme)}
  ${(props) => toResponsiveValue('font-weight', props.fontWeight, theme)}
  ${(props) => toResponsiveValue('text-align', props.textAlign, theme)}
  ${(props) => toResponsiveValue('text-shadow', props.textShadow, theme)}
`

export default Text
Text.defaultProps = {
  variant: 'extraSmall',
}
