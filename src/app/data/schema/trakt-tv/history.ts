import { Episode } from './episode';
import { MovieShow } from './movie-show'

export type History = HistoryMovie | HistoryEpisode;

interface HistoryMovie {
  id: number
  watched_at: string
  action: string
  type: 'movie'
  movie: MovieShow
}
interface HistoryEpisode {
  id: number
  watched_at: string
  action: string
  type: 'episode'
  episode: Episode
  show: MovieShow
}
