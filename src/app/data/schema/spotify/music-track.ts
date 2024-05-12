export interface MusicTrack {
  isPlaying: boolean,
  track: Track
}
interface Track {
  artist: string;
  image: {url: string, height: number, width: number} | undefined;
  name: string;
  url: string
}
