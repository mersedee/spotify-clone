import axios from 'axios'
import { type Album, type Artist } from 'types'
import { type Dispatch, type SetStateAction } from 'react'

const baseUrl = 'https://api.spotify.com/v1'

export const getAlbums = async (
  token: string,
  query: string,
  setLoading: Dispatch<SetStateAction<boolean>>
): Promise<Album[]> => {
  const headers = {
    Authorization: `Bearer ${token}`
  }

  try {
    setLoading(true)

    const { data: { artists: { items } } } = await axios.get(`${baseUrl}/search`, {
      headers,
      params: {
        q: query,
        type: 'artist'
      }
    })

    if (items.length > 0) {
      const artist = items[0] as Artist
      const { data: { items: fetchedAlbums } } = await axios.get(`${baseUrl}/artists/${artist.id}/albums`, {
        headers
      })

      return fetchedAlbums
    }

    return []
  } catch (error) {
    console.error(error)
    return []
  } finally {
    setLoading(false)
  }
}
