import Navigation from '@/components/molecules/Navigation'
import NavigationItem from '@/components/atoms/NavigationItem'

const Header = () => {
  const items = [
    { href: '/', content: 'Home' },
    { href: '/blog', content: 'Blog' },
    { href: '/about', content: 'About' },
  ]

  return (
    <header>
      <Navigation>
        {items.map((i, idx) => (
          <NavigationItem key={idx} href={i.href} content={i.content} />
        ))}
      </Navigation>
    </header>
  )
}

export default Header
