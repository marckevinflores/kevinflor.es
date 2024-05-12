import { TrackItem } from "./track-item"

export interface CurrentlyPlaying {
  timestamp: number
  progress_ms: number
  item: TrackItem
  currently_playing_type: string
  is_playing: boolean
}
