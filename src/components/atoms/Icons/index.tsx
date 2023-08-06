import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { styled } from 'styled-components'

type IconProps = {
  size?: number
  href?: string
}

const IconWrapper = styled.div<IconProps>`
  display: 'inline-block';
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`

function withIconStyle(Icon: React.ReactNode) {
  const IconWithStyle = (props: IconProps) => {
    return (
      <IconWrapper size={props.size}>
        <Link href={props.href ?? ''}>{Icon}</Link>
      </IconWrapper>
    )
  }
  return IconWithStyle
}

export const IconGitHub = withIconStyle(<FontAwesomeIcon icon={faGithub} />)
export const IconYoutube = withIconStyle(<FontAwesomeIcon icon={faYoutube} />)
export const IconTwitter = withIconStyle(<FontAwesomeIcon icon={faTwitter} />)
