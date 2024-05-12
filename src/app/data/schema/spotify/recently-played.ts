import { TrackItem } from "./track-item"

export interface RecentlyPlayed {
  items: {
    track: TrackItem
    played_at: string
  }[]
  next: string
  limit: number
  href: string
}
