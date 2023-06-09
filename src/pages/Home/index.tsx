import { type FC, type ChangeEvent, useState } from 'react'
import { Logo, Exit } from 'components/svg'
import { Input, AlbumList, NoData, Loading } from 'components/ui'
import asyncFuncWrapper from 'helpers/asyncFuncWrapper'
import useToken from 'hooks/useToken'
import { type Album } from 'types'
import { getAlbums } from 'api'
import * as S from './styles'

const Home: FC = () => {
  const { token, logout } = useToken()
  const [albums, setAlbums] = useState<Album[]>([])
  const [query, setQuery] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const onSearchAlbums = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    e.preventDefault()
    const query = e.target.value
    setQuery(query)
    if (query.trim() === '') {
      setAlbums([])
    } else {
      const fetchedAlbums = await getAlbums(token, query, setLoading)
      setAlbums(fetchedAlbums)
    }
  }

  return (
    <S.Container>
      <S.FirstColumn>
        <S.LogoutLink onClick={logout}>
          <Exit />
          <span>Logout</span>
        </S.LogoutLink>

        <S.FirstColumnContent>
          <Logo />
          <S.SearchTitle>
            Find all the albums by the artists you love to listen to.
          </S.SearchTitle>
          <Input
              placeholder="Search"
              onChange={asyncFuncWrapper(onSearchAlbums)}
          />
        </S.FirstColumnContent>
      </S.FirstColumn>

      <S.SecondColumn>
        {loading
          ? <Loading />
          : (
            <>
              {albums?.length === 0
                ? <NoData query={query} />
                : (
                  <>
                    <S.Title>Name of the artist here</S.Title>
                    <S.Subtitle>1000 monthly listeners</S.Subtitle>

                    <AlbumList albums={albums} />
                  </>
                  )
              }
            </>
            )
        }
      </S.SecondColumn>
    </S.Container>
  )
}

export default Home
