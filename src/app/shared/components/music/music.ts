import {
  Component,
  Signal,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';
import { SpotifyService } from '@core/services/spotify.service';
@Component({
  selector: 'music',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `@defer(when music()){ @if(music(); as data){
    <a
      class="group"
      target="_blank"
      [href]="data.track.url"
      [attr.aria-label]="data.track.name"
    >
      <div
        class="flex flex-row gap-3.5 p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border dark:border-gray-100/20"
      >
        <img
          class="object-cover object-center rounded-1 aspect-square w-auto h-full max-w-full max-h-20 border border-divider transition scale-100 group-hover:scale-105"
          [alt]="data.track.name"
          [src]="data.track.image.url"
          [width]="data.track.image.width"
          [height]="data.track.image.height"
        />
        <div
          class="flex flex-col flex-1 gap-1.5 text-sm truncate mix-blend-hard-light justify-center"
        >
          <p
            class="flex items-center gap-3 font-semibold tracking-wider uppercase dark:text-gray-300 text-gray-600"
          >
            @if(data.isPlaying){
            <span>Now Playing</span>
            <span class="flex justify-between w-3 h-3">
              <span
                class="w-0.75 h-full border border-primary-500 rounded-0.75 motion-safe:animate-music-bars"
                style="transform-origin: center bottom;"
              ></span>
              <span
                class="w-0.75 h-full border border-primary-500 rounded-0.75 motion-safe:animate-music-bars"
                style="animation-delay: -2.2s; transform-origin: center bottom;"
              ></span>
              <span
                class="w-0.75 h-full border border-primary-500 rounded-0.75 motion-safe:animate-music-bars"
                style="animation-delay: -3.7s; transform-origin: center bottom;"
              ></span>
            </span>
            }@else{
            <span>Last Played</span>
            }
          </p>
          <span
            class="truncate font-medium transition-colors w-full min-h-6 group-hover:underline"
            >{{ data.track?.name }}</span
          >
          <span
            class="-mt-2 truncate w-full min-h-5.5 dark:text-gray-400 text-gray-600"
            >{{ data.track?.artist }}</span
          >
        </div>
      </div>
    </a>
    } }@placeholder {
    <div
      class="bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 border dark:border-gray-100/20 h-28"
    ></div>
    }`,
})
export class Music {
  spotifyService = inject(SpotifyService);
  public music: Signal<any> = computed(() => this.spotifyService.music());
}
