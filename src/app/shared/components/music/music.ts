import { NgClass } from '@angular/common';
import {
  Component,
  Signal,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';
import { SpotifyService } from '@core/services/spotify.service';
import { Icon } from '../icon/icon';
import { play } from '@icon/solid.icon';
import { DateAgoPipe} from '@core/pipe/date-ago.pipe'
import { TimeDurationPipe } from '@core/pipe/time-duration.pipe'
@Component({
  selector: 'music',
  standalone: true,
  imports: [NgClass, Icon, DateAgoPipe, TimeDurationPipe],
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
          class="object-cover object-center rounded-1 aspect-square w-auto h-full max-w-full max-h-24 border border-divider transition scale-100 group-hover:scale-105"
          [alt]="data.track.name"
          [src]="data.track.image.url"
          [width]="data.track.image.width"
          [height]="data.track.image.height"
        />
        <div
          class="flex flex-col flex-1 gap-1.5 text-sm truncate mix-blend-hard-light justify-center"
        >
          <p
            class="flex gap-3 font-semibold tracking-wider uppercase dark:text-gray-300 text-gray-600"
          >
            <span class="text-xs text-primary-500">{{data.isPlaying ? 'Now Playing' : (data.playedAt | dateAgo)}}</span>
            <span class="flex justify-between w-3 h-3">
              @for(link of ['0.6', '1', '0.7']; track $index){
              <span
                class="w-0.75 h-full border border-primary-500 rounded-0.75 motion-safe:animate-music-bars origin-bottom"
                [ngClass]="{'!animate-none': !data.isPlaying}"
                style="animation-delay: -{{$index + 1}}.2s; transform: scaleY({{link}})"
              ></span>
            }
            </span>
          </p>
          <span
            class="truncate font-medium transition-colors w-full min-h-6 group-hover:underline"
            >{{ data.track?.name }}</span
          >
          <span
            class="-mt-2 truncate w-full min-h-5.5 dark:text-gray-400 text-gray-600"
            >{{ data.track?.artist }}</span
          >
          <div class="flex text-xs items-center">
            @if(data.isPlaying){
              <span>{{ progressTime() | timeDuration }}</span>
            }@else {
              <icon [path]="playIcon" iconClass="w-4 h-4 dark:!fill-gray-300 text-gray-600"/>
            }
          <div
            class="relative w-full h-1 bg-gray-300 overflow-hidden mx-1"
          >
            <div
              class="absolute top-0 left-0 h-full bg-primary-500"
              [style.width.%]="(progressTime() / totalDuration()) * 100"
            ></div>
          </div>
          <span>{{ totalDuration() | timeDuration }}</span>
          </div>
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
  public progressTime: Signal<number> = computed(() => this.spotifyService.progressTime());
  public totalDuration: Signal<number> = computed(() => this.spotifyService.totalDuration());
  public playIcon = play;
}
