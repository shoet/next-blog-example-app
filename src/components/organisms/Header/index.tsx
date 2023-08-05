import AppLogo from '@/components/atoms/AppLogo'
import styled from 'styled-components'
import Link from 'next/link'
import Text from '@/components/atoms/Text'
import { toThemeValue } from '@/utils/styles'

const Anchor = styled(Link)`
  color: ${({ theme }) => toThemeValue('color', 'gray', theme)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

const Navigation = styled.div`
    & > a:not(:first-child) {
      margin-left: 10px;
    }
  `

const Header = () => {
  const items = [
    { href: '/', content: 'Home' },
    { href: '/blog', content: 'Blog' },
    { href: '/about', content: 'About' },
  ]

  return (
    <header>
      <Container>
        <AppLogo />
        <Navigation as="nav">
          {items.map((i, idx) => (
            <Anchor key={idx} href={i.href}>
              <Text variant="small">{i.content}</Text>
            </Anchor>
          ))}
        </Navigation>
      </Container>
    </header>
  )
}

export default Header
