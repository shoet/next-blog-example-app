import { toResponsiveValue } from '@/utils/styles'
import { css, styled } from 'styled-components'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean
  hasBorder?: boolean
}

const Input = styled.input<InputProps>`
  ${({ theme, hasBorder = true, isError = false }) => {
    if (hasBorder) {
      return css`
        border: 1px solid ${
          isError ? theme.colors.danger : theme.colors.border
        };
      `
    } else {
      return css`
        border: none;
      `
    }
  }}
  color: ${({ theme }) => theme.colors.text};
  height: 38px;
  font-size: 18px;
  padding: 5px 10px;
  width: 100%;
  border-radius: 3px;
  outline: none;

  &::placeholder {
      ${({ theme }) => toResponsiveValue('font-size', 'medium', theme)};
      ${({ theme }) => toResponsiveValue('letter-spacing', 'large', theme)};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export default Input
