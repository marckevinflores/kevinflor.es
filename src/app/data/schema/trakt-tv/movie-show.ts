export interface MovieShow {
  title: string
  year: number
  ids: Ids2
}

interface Ids2 {
  trakt: number
  slug: string
  tvdb?: number
  imdb: string
  tmdb: number
  tvrage?: any
}
