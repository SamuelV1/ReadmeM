import styled, { css } from 'styled-components/macro'
import * as S from './style'

export default function Content() {
  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input placeholder='Archive Name' />
      </S.Header>
      <S.ContentSection>
        <S.TextArea></S.TextArea>
        <S.Article></S.Article>
      </S.ContentSection>
    </S.ContentWrapper>
  )
}

