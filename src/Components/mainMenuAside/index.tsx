import styled, { css } from 'styled-components'

import addition from 'resources/assets/add-svgr.svg'
import logo from 'resources/assets/Logo.png'
import MdGenerator from '../NewsGenerator'
type File = {
    id: string
    name: string
    content: string
    active: boolean
    status: string
}

const files: File[] = [
    {
        id: '0',
        name: 'README',
        content: 'Conteudo do README',
        active: false,
        status: 'saved',
    },
    {
        id: '0',
        name: 'README',
        content: 'Conteudo do README',
        active: false,
        status: 'saved',
    }

]

export default function MainMenu() {
    return (
        <SideMenu>
            <LogoNav>
                <img src={logo} alt="logo" />
                <Tittle>Markee</Tittle>
            </LogoNav>
            <Diviser>Arquivos</Diviser>
            <CreatMenu>
                <PlusCross src={addition} />
                Adicionar arquivo
            </CreatMenu>
            <ArchiveList>
                <MdGenerator name='Contributing' />
                <MdGenerator name='Contributing' />
                <MdGenerator name='Contributing' />
                <MdGenerator name='Contributing' />
            </ArchiveList>

        </SideMenu>
    )
}

const SideMenu = styled.div`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary};
  display: flex;
  width: 25.75em;
  flex-direction: column;
  align-items: center;
`}`
const Diviser = styled.h1`${({ theme }) => css`
 overflow: hidden; 
 text-align: left;
 width: 17em;
 margin-bottom: 1.5em;

 text-indent: 40px;
 font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.02em;

:before,
:after{
    background-color: ${theme.colors.primary};
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;    
}
:before{
    right: 0.5em;
    margin-left: -50%;
}
:after{
    left: 0.5em;
    margin-right: -50%;
}
`}`

const LogoNav = styled.nav`
 margin-top: 2.96em;
 display: flex;
 display: flex;
 flex-direction: row;
 align-items: center;
 margin-bottom: 4.125em;
`

const Tittle = styled.h1`${({ theme }) => css`
 color: ${theme.colors.white};
 font-family: DM Sans;
 font-style: normal;
 font-weight: bold;
 font-size: 33.8401px;
 line-height: 44px;
 letter-spacing: -0.08em;
 margin-left: 0.4em;
`}`
const CreatMenu = styled.button`${({ theme }) => css`
background: ${theme.colors.primary};
color: ${theme.colors.lighBlack};
border-radius: 3.3px;
width: 16.75em;
height: 33.88px;
border: 0;
/*style pra os children */
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 13.5522px;
line-height: 18px;
        cursor: pointer;
        transition: filter 0.2s;
    :hover{
        filter: brightness(0.7);
    }
`}`
const PlusCross = styled.img`
  width: 9.33px;
  height: 9.33px;
  margin-right: 0.75em;
`
const ArchiveList = styled.ul`
    display: flex;
    width: 25em;
    margin-top: 1.875em;
    flex-direction: column;
    align-items: center;

`
