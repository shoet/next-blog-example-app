import Navigation from '@/components/molecules/Navigation'
import NavigationItem from '@/components/atoms/NavigationItem'

const Header = () => {
  const items = [
    { href: '#', content: 'page1' },
    { href: '#', content: 'page2' },
    { href: '#', content: 'page3' },
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
