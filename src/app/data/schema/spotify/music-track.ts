export interface MusicTrack {
  isPlaying: boolean,
  playedAt: string | null;
  track: Track,
  progressTime: number,
  durationTime: number
}
interface Track {
  artist: string;
  image: {url: string, height: number, width: number} | undefined;
  name: string;
  url: string;
}
