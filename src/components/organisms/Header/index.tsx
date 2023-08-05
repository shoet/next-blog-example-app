import AppLogo from '@/components/atoms/AppLogo'
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
      <Container>
        <AppLogo />
        <Navigation />
      </Container>
    </header>
  )
}

export default Header
