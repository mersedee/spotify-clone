import { type FC } from 'react'
import styled from 'styled-components'
import AlbumItem from './AlbumItem'
import { type Album } from 'types'

interface Props {
  albums: Album[]
}

const AlbumList: FC<Props> = ({ albums }) => {
  return (
    <Grid>
      {albums?.map((album) => (
        <AlbumItem
            key={album.id}
            title={album.name}
            date={album.release_date}
            img={album?.images?.[0]?.url}
          />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  padding-top: 68px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 27px;

  @media (max-width: ${props => props.theme.screens.md.max}) {
    padding-top: 37px;
    grid-template-columns: repeat(1, 1fr);
  }
`

export default AlbumList
