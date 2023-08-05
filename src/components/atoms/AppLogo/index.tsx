import styled from 'styled-components'

const AppLogoMock = () => {
  const Container = styled.div`
    font-size: 30px;
    font-weight: bold;
    display: inline;
  `
  return <Container>AppLogo</Container>
}

const AppLogo = () => {
  return (
    <div>
      <AppLogoMock />
    </div>
  )
}

export default AppLogo
