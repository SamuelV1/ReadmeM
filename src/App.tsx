import styled from 'styled-components'

import MainMenu from './Components/mainMenuAside'
import Content from 'Components/Content'
function App() {
  return (
    <MainContainer className='App'>
      <MainMenu />
      <Content />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`

export default App
