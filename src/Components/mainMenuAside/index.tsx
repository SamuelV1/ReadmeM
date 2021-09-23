//imports de estilo (dessa forma fica mais limpo o arquivo e so preciso usar S.*Nome do Componente*
import * as S from './style'
// logo 
import logo from '../../ui/Logo.png'
// tipagem do tipo file que vem da pasta @types que guarda todos os tipos da aplicação
import { File } from 'resources/files/type'
// svgs 
import * as icon from 'ui/icons'
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
                <icon.Add></icon.Add>
                Adicionar arquivo
            </S.CreatMenu>
            <S.Ul>
                {files.map((file: File) => (
                    <S.Li key={file.id}>
                        <S.NavBar onClick={onSelectFile(file.id)}>
                            <icon.File></icon.File>
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
