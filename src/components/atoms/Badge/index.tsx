import { Color, Responsive, toResponsiveValue } from '@/utils/styles'
import { styled } from 'styled-components'

type BadgeProps = {
  label: string
  backgroundColor?: Responsive<Color>
  color?: Responsive<Color>
}
const Badge = (props: BadgeProps) => {
  const { label, backgroundColor = 'black', color = 'white' } = props

  return (
    <BadgeContainer backgroundColor={backgroundColor} color={color}>
      {label}
    </BadgeContainer>
  )
}

const BadgeContainer = styled.span<{
  backgroundColor: Responsive<Color>
  color: Responsive<Color>
}>`
  padding: 5px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 3px;
  text-align: center;
  ${({ backgroundColor, theme }) =>
    toResponsiveValue('background-color', backgroundColor, theme)}
  ${({ color, theme }) => toResponsiveValue('color', color, theme)}
`

export default Badge
