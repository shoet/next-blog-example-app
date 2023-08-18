import { theme } from '@/themes'
import { styled } from 'styled-components'
import {
  Color,
  Responsive,
  FontSize,
  Space,
  LetterSpacing,
  toResponsiveValue,
} from '@/utils/styles'
import css from 'styled-components'
import { letterSpacings } from '@/themes/letterSpacings'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

const variants = {
  primary: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    pseudoClass: {
      hover: {
        backgroundColor: theme.colors.primaryDark,
      },
      disabled: {
        backgroundColor: theme.colors.gray,
      },
    },
  },
  secondary: {
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
    pseudoClass: {
      hover: {
        backgroundColor: theme.colors.secondartDark,
      },
      disabled: {
        backgroundColor: theme.colors.gray,
      },
    },
  },
  danger: {
    color: theme.colors.white,
    backgroundColor: theme.colors.danger,
    pseudoClass: {
      hover: {
        backgroundColor: theme.colors.dangerDark,
      },
      disabled: {
        backgroundColor: theme.colors.gray,
      },
    },
  },
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
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
  pseudoClass?: {
    color?: Responsive<Color>
    backgroundColor: Responsive<Color>
  }
}

const Button = styled.button.withConfig({
  shouldForwardProp: (props) =>
    ![
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
    ].includes(props),
})<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    if (variant && variants[variant]) {
      const styles: string[] = []
      const variantStyle = variants[variant]
      !color &&
        styles.push(toResponsiveValue('color', variantStyle.color, theme))
      !backgroundColor &&
        styles.push(
          toResponsiveValue(
            'background-color',
            variantStyle.backgroundColor,
            theme,
          ),
        )
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toResponsiveValue(
              'background-color',
              variantStyle.pseudoClass.hover.backgroundColor,
              theme,
            )}
          }`,
        )
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toResponsiveValue(
              'background-color',
              variantStyle.pseudoClass.disabled.backgroundColor,
              theme,
            )}
          }`,
        )

      return styles.join('\n')
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

  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`

Button.defaultProps = {
  variant: 'primary',
  paddingTop: '10px',
  paddingRight: '20px',
  paddingBottom: '10px',
  paddingLeft: '20px',
  fontSize: 'medium',
  letterSpacing: 'medium',
}

export default Button
