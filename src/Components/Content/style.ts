import styled, { css } from 'styled-components/macro'
import { FileActiveUrl } from 'ui/icons'

const contentPadding = '24px'

export const ContentWrapper = styled.div`${({ theme }) => css`
    background: ${theme.colors.white};
    flex-grow: 5;
    flex-wrap: wrap;
    padding: ${contentPadding};
    width: 100%;
`}`

const headerHeight = '30px'

export const Header = styled.div`
align-items: center;
display: flex;
height: ${headerHeight};
`
export const CopyButton = styled.button`${({ theme }) => css`
position: absolute;
  top: 0;
  top: -5px;
  border: 0;
    right: -18px;
  border-radius: 4px;
  padding: 3px;
  background-color: ${theme.colors.primary};
  cursor:pointer;
  :hover{
    filter: brightness(0.8)
  }
  svg{
    height: 20px;
  }
`}`

export const Input = styled.input`
  background: url(${FileActiveUrl}) left calc(50% - 1px) no-repeat;
  border: 0;
  flex-grow: 1;
  font-size: 1.6rem;
  padding: 5px;
  padding-left: 32px;
  &:focus {
    outline: none;
  }
`

export const ContentSection = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - ${headerHeight} - (${contentPadding} * 2));
  
  justify-content: space-between;
`

export const TextArea = styled.textarea`
  background: transparent;
  border: 0;
  font: 1.6em 'Inconsolata', 'Courir New', Courier, monospace;
  width: 108%;
  height: 100%;
  padding: 20px;
  resize: none;
  
  &:focus{
    outline:none;
  }
`
export const Wrapper = styled.div`
position:relative;
width: 48%;
height: 100%;
`
export const Article = styled.article`${({ theme }) => css`
  background: transparent;
  height: 100%;
  font-size: 1.6rem;
  padding: 20px;
  position: relative;
  width: 40%;
  word-break: normal;
  overflow-y: auto;
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
