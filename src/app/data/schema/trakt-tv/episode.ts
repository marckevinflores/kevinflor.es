export interface Episode {
  season: number
  number: number
  title: string
  ids: Ids
}

interface Ids {
  trakt: number
  tvdb: number
  imdb: string
  tmdb: number
  tvrage: any
}
