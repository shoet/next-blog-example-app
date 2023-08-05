import AppLogo from '@/components/atoms/AppLogo'
import styled from 'styled-components'
import Link from 'next/link'

const Anchor = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Header = () => {
  const items = [
    { href: '/', content: 'Home' },
    { href: '/blog', content: 'Blog' },
    { href: '/about', content: 'About' },
  ]

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

  return (
    <header>
      <Container>
        <AppLogo />
        <Navigation as="nav">
          {items.map((i, idx) => (
            <Anchor key={idx} href={i.href}>
              {i.content}
            </Anchor>
          ))}
        </Navigation>
      </Container>
    </header>
  )
}

export default Header
