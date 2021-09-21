//imports de estilo (dessa forma fica mais limpo o arquivo e so preciso usar S.*Nome do Componente*
import * as S from './style'
// logo & e simbolo de pasta
import addition from 'resources/assets/add-svgr.svg'
import logo from 'resources/assets/Logo.png'
import FileSimbol from 'resources/assets/FileSimbol.svg'
// tipagem do tipo file que vem da pasta @types que guarda todos os tipos da aplicação
import { File } from 'resources/files/type'

type SidebarProps = {
    files: File[]
    onNewFile: () => void
    onSelectFile: any
    onRemoveFile: (id: string) => void
}

export default function MainMenu({
    files,
    onNewFile,
    onSelectFile,
    onRemoveFile,
}: SidebarProps) {
    function mar() {

    }

    return (
        <S.SideMenu>
            <S.LogoNav>
                <img src={logo} alt="logo" />
                <S.Tittle>Markee</S.Tittle>
            </S.LogoNav>
            <S.Diviser>Arquivos</S.Diviser>
            <S.CreatMenu onClick={onNewFile}>
                <S.PlusCross src={addition} />
                Adicionar arquivo
            </S.CreatMenu>
            <S.Ul>
                {files.map((file: File) => (
                    <S.Li key={file.id}>
                        <S.NavBar onClick={onSelectFile(file.id)}>
                            <img src={FileSimbol} alt='simbol' />
                            <S.Archive href={`/file/${file.id}`} >{`${file.name}.md`}</S.Archive>
                        </S.NavBar>
                        {file.active && <S.StatusIconStyled status={file.status} />}

                        {!file.active && (
                            <S.DeleteButton title={`Remover o arquivo ${file.name}`}
                                onClick={() => onRemoveFile(file.id)}>
                                <S.RemoveIcon></S.RemoveIcon>
                            </S.DeleteButton>
                        )}
                    </S.Li>
                ))}
            </S.Ul>
        </S.SideMenu>
    )
}
