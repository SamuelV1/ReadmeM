import styled, { css } from 'styled-components'
import FileSimbol from 'resources/assets/FileSimbol.svg'
type props = {
    id: string
    name: string
    content: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
}


export default function MdGenerator(props: any) {
    return (
        <Li>
            <Button>
                <NavBar>
                    <img src={FileSimbol} alt='simbol' />
                    <Archive href="">{`${props.name}.md`}</Archive>
                </NavBar>

                <DeleteButton>X</DeleteButton>
            </Button>

        </Li>
    )
}



const Archive = styled.a`${({ theme }) => css`
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

const DeleteButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-family: 'DM Sans';
    padding: 8px 15px;
    width: 8px;
    display: none;
`
const Li = styled.li`${({ theme }) => css`
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
            display: block;
        }     
    }
`}`
const NavBar = styled.nav`
    display: flex;
    align-items: center;
    img{
        padding: 8px;
       
    }
    :hover{
        ${DeleteButton}{
            display: flex;
        }
    }
`
const Button = styled.button`
    background: none;
    border: 0;
    display: flex;
    align-items: center;
`