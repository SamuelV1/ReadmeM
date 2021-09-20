import { ChangeEvent, RefObject } from 'react'
import { File } from 'resources/files/type'
import styled, { css } from 'styled-components/macro'
import * as S from './style'
import 'highlight.js/styles/github.css'
import marked from 'marked'


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
  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input ref={inputRef}
          value={file.name}
          onChange={onUpdateFileName(file.id)}
          autoFocus />
      </S.Header>
      <S.ContentSection>
        <S.TextArea
          placeholder='Digite aqui seu markdown'
          value={file.content}
          onChange={onUpdateFileContent(file.id)}
        ></S.TextArea>
        <S.Article dangerouslySetInnerHTML={{ __html: marked(file.content) }}></S.Article>
      </S.ContentSection>
    </S.ContentWrapper>
  )
}

