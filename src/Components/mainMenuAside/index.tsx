//imports de estilo (dessa forma fica mais limpo o arquivo e so preciso usar S.*Nome do Componente*
import * as S from './style'
// import use state
import { useState } from 'react'
// uid biblioteca que gera um uuid (Identificador Único Universal) pra usar como id do objeto
import { v4 as uuidv4 } from 'uuid';
// logo & e simbolo de pasta
import addition from 'resources/assets/add-svgr.svg'
import logo from 'resources/assets/Logo.png'
import FileSimbol from 'resources/assets/FileSimbol.svg'
// tipagem do tipo file que vem da pasta @types que guarda todos os tipos da aplicação
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
    // o valor inicial e o Files por enquanto so pra demostrar todos os estados do meu botão
    const [arquivos, setArquivos] = useState(files)

    // uma função que faz muita coisa refatoravel talvez
    function HandleCreateFile() {
        let newArchive = []
        // passa pelo estado antigo mudando active pra false 
        for (let prop in arquivos) {
            arquivos[prop].active = false
        }

        let newItem: File = {
            id: uuidv4(),
            name: 'Sem título',
            content: '',
            active: true,
            status: 'saved',
        }
        // precisa comentar isso?
        setArquivos(prevState => [...prevState, newItem])
    }

    return (
        <S.SideMenu>
            <S.LogoNav>
                <img src={logo} alt="logo" />
                <S.Tittle>Markee</S.Tittle>
            </S.LogoNav>
            <S.Diviser>Arquivos</S.Diviser>
            <S.CreatMenu onClick={HandleCreateFile}>
                <S.PlusCross src={addition} />
                Adicionar arquivo
            </S.CreatMenu>
            <S.Ul>
                {arquivos.map(file => (
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
