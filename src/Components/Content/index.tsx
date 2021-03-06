import { ChangeEvent, RefObject } from 'react'
import { File } from 'resources/files/type'

import * as S from './style'
import 'highlight.js/styles/github.css'
import marked from 'marked'

import { Dowload } from 'ui/icons'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})
type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  file?: File
  onUpdateFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  onUpdateFileContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function ContentContent({
  inputRef,
  file,
  onUpdateFileName,
  onUpdateFileContent,
}: ContentProps) {
  if (!file) {
    return null
  }
  // um botão pra baixar o conteudo escrito (localizadon o canto da tela)
  function SaveArchive() {
    // o typescript me obrigou por um if pra caso o content for vazio :(
    if (file) {
      const element = document.createElement("a")

      const fileS = new Blob([file.content], { type: "text/plain" })
      element.href = URL.createObjectURL(fileS)
      element.download = `${file.name}.md`
      // firefox adaptor
      document.body.appendChild(element)
      element.click()
    }
  }

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input
          ref={inputRef}
          value={file.name}
          onChange={onUpdateFileName(file.id)}
          autoFocus
        />
      </S.Header>
      <S.ContentSection>
        <S.Wrapper>
          <S.TextArea
            placeholder='Digite aqui seu markdown'
            value={file.content}
            onChange={onUpdateFileContent(file.id)}
          />
          <S.CopyButton
            onClick={SaveArchive}
          >
            <Dowload />
          </S.CopyButton>
        </S.Wrapper>
        <S.Article dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
      </S.ContentSection>
    </S.ContentWrapper>
  )
}
