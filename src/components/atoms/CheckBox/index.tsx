import { styled } from 'styled-components'

const Inner = styled.input`
  type: checkbox;
`

type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {}
const CheckBox = (props: CheckBoxProps) => {
  return <Inner {...props} />
}

export default CheckBox
