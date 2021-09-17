import styled, { css } from 'styled-components/macro'

export default function Content() {
  return (
    <ContentWrapper>
      <Header>
        <Input placeholder='Archive Name' defaultValue='Sem título' />
      </Header>
      <ContentSection>
        <TextArea></TextArea>
        <Article></Article>
      </ContentSection>
    </ContentWrapper>
  )
}

const contentPadding = '24px'

const ContentWrapper = styled.div`${({ theme }) => css`
    background: ${theme.colors.white};
    flex-grow: 5;
    flex-wrap: wrap;
    padding: ${contentPadding};
    width: 100%;
`}`

const headerHeight = '30px'

const Header = styled.div`
align-items: center;
display: flex;
height: ${headerHeight};
`
const Input = styled.input`${({ theme }) => css`
border: 0;
flex-grow: 1;
font-size: 1.6rem;
padding: 5px;
padding-left: 32px;
background: ${theme.colors.white};

&:focus{
    outline: none;
}


`}`



const ContentSection = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - ${headerHeight} - (${contentPadding} * 2));
  
  justify-content: space-between;
`

const TextArea = styled.textarea`
  background: transparent;
  border: 0;
  font: 1.6em 'Inconsolata', 'Courir New', Courier, monospace;
  width: 48%;
  height: 100%;
  padding: 20px;
  resize: none;
  
  &:focus{
    outline:none;
  }
`
const Article = styled.article`${({ theme }) => css`
  background: transparent;
  height: 100%;
  font-size: 1.6rem;
  padding: 20px;
  position: relative;
  width: 40%;

  &::before{
    background: ${theme.colors.gray};
    content: ' ';
    left: -4%;
    position: absolute; 
    top: 4%;
    width: 2px;
    height: 100%;
  }
  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
  }
`}`