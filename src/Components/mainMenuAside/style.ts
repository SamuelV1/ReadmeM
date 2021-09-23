import styled, { css } from 'styled-components/macro'
import { StatusIcon, StatusIconProps } from './status-icon'
import * as icon from 'ui/icons'

export const Ul = styled.ul`
    background: none;
    border: 0;
    display: flex;
    margin-top: 1.875em;
    align-items: center;    
    flex-direction: column;
`
export const StatusIconStyled = styled(StatusIcon) <StatusIconProps>`${({ status }) => css`
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: ${status === 'saving' ? -5 : 0}px;
  transform: translateY(-50%);
`}`
export const RemoveIcon = styled(icon.Plus)`
  margin: 0;
  transform: rotate(45deg);
`

export const Archive = styled.a`${({ theme }) => css`
    text-decoration: none;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px; 
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
    opacity: 65%;
    
`}`

export const DeleteButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-family: 'DM Sans';
    padding: 8px 15px;
    width: 8px;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
`
export const Li = styled.li`${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20em;
    position: relative;
    justify-content: space-between;
    &:hover{
        background: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
        ${DeleteButton}{
            display: flex;
        }     
    }
`}`
export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    padding: 8px;
    svg{
        padding-right: 2px;
    }
    :hover{
        ${DeleteButton}{
            display: flex;
        }
    }
`
export const Button = styled.button`
    background: none;
    border: 0;
    display: flex;
    align-items: center;
`



export const SideMenu = styled.div`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary};
  display: flex;
  width: 25.75em;
  flex-direction: column;
  align-items: center;
`}`
export const Diviser = styled.h1`${({ theme }) => css`
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

export const LogoNav = styled.nav`
 margin-top: 2.96em;
 display: flex;
 display: flex;
 flex-direction: row;
 align-items: center;
 margin-bottom: 4.125em;
`

export const Tittle = styled.h1`${({ theme }) => css`
 color: ${theme.colors.white};
 font-family: DM Sans;
 font-style: normal;
 font-weight: bold;
 font-size: 33.8401px;
 line-height: 44px;
 letter-spacing: -0.08em;
 margin-left: 0.4em;
`}`
export const CreatMenu = styled.button`${({ theme }) => css`
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
/*Pra o svg dentro dele */
svg{
    width: 9.33px;
  height: 9.33px;
  margin-right: 0.75em;
}
        cursor: pointer;
        transition: filter 0.2s;
    :hover{
        filter: brightness(0.7);
    }
`}`


