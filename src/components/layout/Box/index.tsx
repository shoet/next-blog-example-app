import { Color, Space, toThemeValue } from '@/utils/styles'
import { styled } from 'styled-components'
import { theme } from '@/themes'

type BoxProps = {
  color?: Color
  backgroundColor?: Color
  margin?: Space
  marginTop?: Space
  marginRight?: Space
  marginBottom?: Space
  marginLeft?: Space
  padding?: Space
  paddingTop?: Space
  paddingRight?: Space
  paddingBottom?: Space
  paddingLeft?: Space
  width?: string
  maxWidth?: string
  minWidth?: string
  height?: string
  maxHeight?: string
  minHeight?: string
}

const Box = styled.div.withConfig({
  shouldForwardProp: (props) =>
    ![
      'backgroundColor',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'maxWidth',
      'minWidth',
      'maxHeight',
      'minHeight',
    ].includes(props),
})<BoxProps>`
  color: ${(props) => toThemeValue('color', props.color, theme)};
  background-color: ${(props) =>
    toThemeValue('background-color', props.backgroundColor, theme)};
  padding: ${(props) => toThemeValue('padding', props.padding, theme)};
  padding-top: ${(props) =>
    toThemeValue('padding-top', props.paddingTop, theme)};
  padding-right: ${(props) =>
    toThemeValue('padding-right', props.paddingRight, theme)};
  padding-bottom: ${(props) =>
    toThemeValue('padding-bottom', props.paddingBottom, theme)};
  padding-left: ${(props) =>
    toThemeValue('padding-left', props.paddingLeft, theme)};
  margin: ${(props) => toThemeValue('margin', props.margin, theme)};
  margin-top: ${(props) => toThemeValue('margin-top', props.marginTop, theme)};
  margin-right: ${(props) =>
    toThemeValue('margin-right', props.marginRight, theme)};
  margin-bottom: ${(props) =>
    toThemeValue('margin-bottom', props.marginBottom, theme)};
  margin-left: ${(props) =>
    toThemeValue('margin-left', props.marginLeft, theme)};
  width: ${(props) => toThemeValue('width', props.width, theme)};
  max-width: ${(props) => toThemeValue('max-width', props.maxWidth, theme)};
  min-width: ${(props) => toThemeValue('min-width', props.minWidth, theme)};
  height: ${(props) => toThemeValue('height', props.height, theme)};
  max-height: ${(props) => toThemeValue('max-height', props.maxWidth, theme)};
  min-height: ${(props) => toThemeValue('min-height', props.minHeight, theme)};
`

export default Box
