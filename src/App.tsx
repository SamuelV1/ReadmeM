import styled, { css } from 'styled-components'
// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <div className='App'>
      <Tittle>We outside</Tittle>
    </div>
  )
}
const Tittle = styled.h1`${({ theme }) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.black};
`}`

export default App
