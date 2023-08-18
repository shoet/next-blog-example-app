import { css, styled } from 'styled-components'
import Text from '../Text'

type BadgeProps = {
  label: string
  backgroundColor?: string
  color?: string
  isShowClose?: boolean
  onClickClose?: () => void
}
const Badge = (props: BadgeProps) => {
  const {
    label,
    backgroundColor = 'black',
    color = 'white',
    isShowClose,
    onClickClose,
  } = props

  const handleOnClickClose = () => {
    isShowClose && onClickClose && onClickClose()
  }

  return (
    <BadgeContainer backgroundColor={backgroundColor} color={color}>
      <Text fontWeight="bold" color="inherit">
        {label}
      </Text>
      {isShowClose && (
        <Text
          marginLeft={1}
          fontSize="extraSmall"
          color="inherit"
          onClick={handleOnClickClose}
        >
          ✗
        </Text>
      )}
    </BadgeContainer>
  )
}

const BadgeContainer = styled.span<{ color: string; backgroundColor: string }>`
  ${({ color, backgroundColor }) => {
    return css`
      background-color: ${backgroundColor};
      color: ${color};
    `
  }}
  display: inline-flex;
  border-radius: 3px;
  align-items: center;
  padding: 5px 7px;
  cursor: pointer;
`

export default Badge
