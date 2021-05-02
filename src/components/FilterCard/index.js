import React from 'react'
import * as S from './style';
import filter from '../../assets/filter.png'
export default function Footer({ title, actived }) {
  return (
    <S.Container actived={actived}>
      <img src={filter} alt="" />
      <span>{title}</span>
    </S.Container>
  )
}
