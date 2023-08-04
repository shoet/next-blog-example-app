import Navigation from '@/components/molecules/Navigation'
import NavigationItem from '@/components/atoms/NavigationItem'
import { CSSProperties, PropsWithChildren } from 'react'
import AppLogo from '@/components/atoms/AppLogo'

const Header = () => {
  const items = [
    { href: '/', content: 'Home' },
    { href: '/blog', content: 'Blog' },
    { href: '/about', content: 'About' },
  ]

  const Container = ({ children }: PropsWithChildren) => {
    const style: CSSProperties = {
      width: '100%',
      display: 'inline-flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
    return <div style={style}>{children}</div>
  }

  return (
    <header>
      <Container>
        <AppLogo />
        <Navigation>
          {items.map((i, idx) => (
            <NavigationItem key={idx} href={i.href} content={i.content} />
          ))}
        </Navigation>
      </Container>
    </header>
  )
}

export default Header
