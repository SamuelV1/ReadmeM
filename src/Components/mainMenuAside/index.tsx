import styled, { css } from 'styled-components/macro'
import * as S from './style'

import addition from 'resources/assets/add-svgr.svg'
import logo from 'resources/assets/Logo.png'
import FileSimbol from 'resources/assets/FileSimbol.svg'
import { File } from 'resources/files/type'

const files: File[] = [
    {
        id: '0',
        name: 'README',
        content: 'Conteudo do README',
        active: true,
        status: 'saving',
    },
    {
        id: '1',
        name: 'README',
        content: 'Conteudo do README',
        active: true,
        status: 'editing',
    },
    {
        id: '2',
        name: 'README',
        content: 'Conteudo do README',
        active: true,
        status: 'saved',
    },
    {
        id: '3',
        name: 'Readno',
        content: "conteudo do Readmio",
        active: false,
        status: 'editing',
    }

]

export default function MainMenu() {
    return (
        <S.SideMenu>
            <S.LogoNav>
                <img src={logo} alt="logo" />
                <S.Tittle>Markee</S.Tittle>
            </S.LogoNav>
            <S.Diviser>Arquivos</S.Diviser>
            <S.CreatMenu>
                <S.PlusCross src={addition} />
                Adicionar arquivo
            </S.CreatMenu>
            <S.Ul>
                {files.map(file => (
                    <S.Li key={file.id}>
                        <S.NavBar>
                            <img src={FileSimbol} alt='simbol' />
                            <S.Archive href="">{`${file.name}.md`}</S.Archive>
                        </S.NavBar>
                        {file.active && <S.StatusIconStyled status={file.status} />}

                        {!file.active && (
                            <S.DeleteButton>
                                <S.RemoveIcon></S.RemoveIcon>
                            </S.DeleteButton>
                        )}
                    </S.Li>
                ))}
            </S.Ul>
        </S.SideMenu>
    )
}
