export interface Album {
  album_group?: AlbumGroup
  album_type?: AlbumGroup
  artists?: Artist[]
  available_markets?: string[]
  external_urls?: ExternalUrls
  href?: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision?: ReleaseDatePrecision
  total_tracks?: number
  type?: AlbumGroup
  uri?: string
}

export enum AlbumGroup {
  Album = 'album',
  Single = 'single',
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export enum ReleaseDatePrecision {
  Day = 'day',
  Year = 'year',
}
