import styled from 'styled-components'
import Link from 'next/link'
import { toThemeValue } from '@/utils/styles'
import Text from '@/components/atoms/Text'

const items = [
  { href: '/', content: 'Home' },
  { href: '/blog', content: 'Blog' },
  { href: '/about', content: 'About' },
]

const Anchor = styled(Link)`
  color: ${({ theme }) => toThemeValue('color', 'gray', theme)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const NavigationList = styled.div`
    & > a:not(:first-child) {
      margin-left: 10px;
    }
  `

const Navigation = () => {
  return (
    <NavigationList>
      {items.map((i, idx) => (
        <Anchor key={idx} href={i.href}>
          <Text variant="small">{i.content}</Text>
        </Anchor>
      ))}
    </NavigationList>
  )
}

export default Navigation
