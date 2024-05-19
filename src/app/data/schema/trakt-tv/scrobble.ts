import { Episode } from './episode';
import { MovieShow } from './movie-show'
export type Scrobble = ScrobbleMovie | ScrobbleEpisode;

interface ScrobbleMovie {
  expires_at: string
  started_at: string
  action: string
  type: 'movie'
  movie: MovieShow
}
interface ScrobbleEpisode {
  expires_at: string
  started_at: string
  action: string
  type: 'episode'
  episode: Episode
  show: MovieShow
}


