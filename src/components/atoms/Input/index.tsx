import { css, styled } from 'styled-components'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isError: boolean
}

const Input = styled.input<InputProps>`
  ${({ theme, isError }) => {
    return css`
        border: 1px solid ${
          isError ? theme.colors.danger : theme.colors.border
        };
      `
  }}
  color: ${({ theme }) => theme.colors.text};
  height: 38px;
  font-size: 18px;
  padding: 5px 5px;
  width: 100%;
  border-radius: 3px;

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
