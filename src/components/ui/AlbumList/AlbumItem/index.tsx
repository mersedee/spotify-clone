import { type FC } from 'react'
import * as S from './styles'

interface Props {
  img: string
  title: string
  date: string
}

const AlbumItem: FC<Props> = ({ img, title, date }) => {
  return (
    <S.Container>
      <S.Image src={img} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Text>{new Date(date).getFullYear()} - Album</S.Text>
    </S.Container>
  )
}

export default AlbumItem
