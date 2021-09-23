import styled from 'styled-components'
// lib de local storage 
import localforage, { setItem, getItem } from 'localforage'
import MainMenu from './Components/mainMenuAside'
import Content from 'Components/Content'
// uid biblioteca que gera um uuid (Identificador Único Universal) pra usar como id do objeto
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { File } from 'resources/files/type'

/* decidi criar um valor inicial pra ser um readme de exemplo e linkar
 a documentação para o usuario mais novo
*/
const Initialfiles: File =
{
  id: '0',
  name: 'ReadMe',
  content: "### aprenda markedown <br> # 📕: Caso vc não conheça markedown <br> leia a  [documentação](https://www.markdownguide.org/basic-syntax/)",
  active: true,
  status: 'saved',
}

function App() {
  // input ref pra mudar o foco automaticamente pro usuario
  const inputRef = useRef<HTMLInputElement>(null)
  // linha fundamental pra o app
  const [files, setFiles] = useState<File[]>([Initialfiles])

  // primeiro use effect pra guardar no local storage usando localforage
  useEffect(() => {
    async function StoragePrint() {
      let dataStore = await localforage.getItem<File[]>('archives')
      if (dataStore) {
        setFiles(dataStore)
        return
      }
      handleCreateNewFile()
    }
    StoragePrint()
  }, [])
  // um useeffect que roda sempre que as files(arquivo principal) muda pra manter o local storage atualizado
  useEffect(() => {
    localforage.setItem('archives', files)
  }, [files])
  // um use effect que te empurra url
  useEffect(() => {

    const selectedFile = files.find(file => file.active === true)

    if (selectedFile) {
      window.history.replaceState(null, '', `/file/${selectedFile.id}`)
    }

  }, [files])

  // use effect feito para mudar o status da file selecionada e fazer as animações baseado no tempo de idle do usuario
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus() {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])


  const handleRemoveFile = (id: string) => {
    setFiles(files => files.filter(file => file.id !== id))


  }

  const handleSelectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()

    inputRef.current?.focus()

    setFiles(files => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }
  const handleCreateNewFile = () => {

    inputRef.current?.focus()
    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))

  }
  const handleUpdateFileName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))

  }

  const handleUpdateFileContent = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))

  }


  return (
    <MainContainer className='App'>
      <MainMenu files={files}
        onNewFile={handleCreateNewFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile} />

      <Content inputRef={inputRef}
        file={files.find(file => file.active === true)}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent} />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`

export default App
