export interface WatchItem {
  type: 'movie' | 'episode';
  headTitle: string;
  title: string | null;
  year: number;
  tmdb: number;
  isWatching: boolean;
  image?: string;
  url: string;
  watchedAt: string | null;
}
