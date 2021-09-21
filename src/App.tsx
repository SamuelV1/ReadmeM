import styled from 'styled-components'
// lib de local storage 
import MainMenu from './Components/mainMenuAside'
import Content from 'Components/Content'
// uid biblioteca que gera um uuid (Identificador Único Universal) pra usar como id do objeto
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { File } from 'resources/files/type'



function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])


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
