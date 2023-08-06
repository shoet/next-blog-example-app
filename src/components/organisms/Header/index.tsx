import AppLogo from '@/components/atoms/AppLogo'
import Flex from '@/components/layout/Flex'
import Navigation from '@/components/molecules/Navigation'

const Header = () => {
  return (
    <header>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <AppLogo />
        <Navigation />
      </Flex>
    </header>
  )
}

export default Header
