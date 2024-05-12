import { Injectable, effect, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '@env/environment';
import { Observable, catchError, map, switchMap, tap } from 'rxjs';
import { MusicTrack } from '@data/schema/spotify/music-track'
import { Token } from '@data/schema/spotify/token'
import { CurrentlyPlaying } from '@data/schema/spotify/currently-playing'
import { RecentlyPlayed } from '@data/schema/spotify/recently-played'
import { TrackItem } from '@data/schema/spotify/track-item'

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  spotify = environment.spotify;
  nowPlayingEndpoint = `${this.spotify.apiURL}me/player/currently-playing`;
  recentlyPlayedEndpoint = `${this.spotify.apiURL}me/player/recently-played?limit=1`;
  apiTokenEndpoint = 'https://accounts.spotify.com/api/token';

  http = inject(HttpClient)
  music = signal<MusicTrack | null>(null);

  constructor() {
    effect(() => {
      this.nowPlaying();
    })
  }

  accessToken(): Observable<Token> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${this.spotify.clientId}:${this.spotify.clientSecret}`)}`
    });
    const params = new HttpParams({
      fromObject: {
        'grant_type': 'refresh_token',
        'refresh_token': this.spotify.clientRefreshToken
      }
    });
    return this.http.post<Token>(this.apiTokenEndpoint, params, { headers })
  }

  fetchTrackData(endpoint: string): Observable<MusicTrack> {
    return this.accessToken().pipe(switchMap(res => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${res.access_token}`
      });
      return this.http.get<RecentlyPlayed | CurrentlyPlaying>(endpoint, { headers }).pipe(map(res => {
        const hasItem = 'item' in res;
        return {
          track: this.mapTrackData(hasItem ? res.item : res.items[0].track),
          isPlaying: hasItem ? res.is_playing : false
        } as MusicTrack
      }))
    }))
  }

  nowPlaying(): void {
    this.fetchTrackData(this.nowPlayingEndpoint).pipe(
      tap(nowPlayingResult => nowPlayingResult ? this.music.set(nowPlayingResult) : null),
      catchError(() => this.fetchTrackData(this.recentlyPlayedEndpoint).pipe(tap(recentPlayedResult => this.music.set(recentPlayedResult))))
    ).subscribe();
  }

  mapTrackData(track: TrackItem): MusicTrack['track'] | null {
    if (!track) return null
    const preAlbumImage = track.album.images.pop();
    const albumImage = track.album.images.pop() || preAlbumImage;
    return {
      name: track.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      url: track.external_urls.spotify,
      image: albumImage
        ? {
          url: albumImage.url || '',
          height: Math.min(albumImage.height || 78, 78),
          width: Math.min(albumImage.width || 78, 78),
        }
        : undefined,
    }
  }


}
