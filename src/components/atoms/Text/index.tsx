import { css, styled } from 'styled-components'
import {
  Color,
  FontSize,
  LetterSpacing,
  Responsive,
  Space,
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
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

const Text = styled.span.withConfig({
  shouldForwardProp: (props) =>
    !['variant', 'backgroundColor', 'fontSize', 'letterSpacing'].includes(
      props,
    ),
})<TextProps>`
  ${({ variant, fontSize, letterSpacing, theme }) => {
    if (variant && variants[variant]) {
      const styles = []
      const style = variants[variant]
      !fontSize &&
        styles.push(toResponsiveValue('font-size', style.fontSize, theme))
      !letterSpacing &&
        styles.push(
          toResponsiveValue('letter-spacing', style.letterSpacing, theme),
        )
      return css`${styles.join('\n')}`
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
  ${(props) => toResponsiveValue('margin', props.margin, theme)}
  ${(props) => toResponsiveValue('margin-top', props.marginTop, theme)}
  ${(props) => toResponsiveValue('margin-right', props.marginRight, theme)}
  ${(props) => toResponsiveValue('margin-bottom', props.marginBottom, theme)}
  ${(props) => toResponsiveValue('margin-left', props.marginLeft, theme)}
  ${(props) => toResponsiveValue('padding', props.padding, theme)}
  ${(props) => toResponsiveValue('padding-top', props.paddingTop, theme)}
  ${(props) => toResponsiveValue('padding-right', props.paddingRight, theme)}
  ${(props) => toResponsiveValue('padding-bottom', props.paddingBottom, theme)}
  ${(props) => toResponsiveValue('padding-left', props.paddingLeft, theme)}
`

export default Text
Text.defaultProps = {
  variant: 'extraSmall',
}
