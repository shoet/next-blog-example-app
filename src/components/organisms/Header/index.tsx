import AppLogo from '@/components/atoms/AppLogo'
import Flex from '@/components/layout/Flex'
import Navigation from '@/components/molecules/Navigation'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

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
