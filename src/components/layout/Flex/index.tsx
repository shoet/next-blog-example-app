import { styled } from 'styled-components'
import Box from '../Box'
import {
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifySelf,
} from '@/types/styles'
import { toThemeValue } from '@/utils/styles'
import { theme } from '@/themes'

type FlexProps = {
  justifyContent?: CSSPropertyJustifyContent
  justifyItems?: CSSPropertyJustifyItems
  justifySelf?: CSSPropertyJustifySelf
  alignContent?: CSSPropertyAlignContent
  alignItems?: CSSPropertyAlignItems
  alignSelf?: CSSPropertyAlignSelf
  flexDirection?: CSSPropertyFlexDirection
  flexWrap?: CSSPropertyFlexWrap
}

const Flex = styled(Box).withConfig({
  shouldForwardProp: (props) =>
    ![
      'justifyContent',
      'justifyItems',
      'justifySelf',
      'alignContent',
      'alignItems',
      'alignSelf',
      'flexDirection',
      'flexWrap',
    ].includes(props),
})<FlexProps>`
  display: flex;
  justify-content: ${(props) =>
    toThemeValue('justify-content', props.justifyContent, theme)};
  justify-items: ${(props) =>
    toThemeValue('justify-items', props.justifyItems, theme)};
  justify-self: ${(props) =>
    toThemeValue('justify-self', props.justifySelf, theme)};
  align-content: ${(props) =>
    toThemeValue('align-content', props.alignContent, theme)};
  align-items: ${(props) =>
    toThemeValue('align-items', props.alignItems, theme)};
  align-self: ${(props) => toThemeValue('align-self', props.alignSelf, theme)};
  flex-direction: ${(props) =>
    toThemeValue('flex-direction', props.flexDirection, theme)};
  flex-wrap: ${(props) => toThemeValue('flex-wrap', props.flexWrap, theme)};

`

export default Flex
