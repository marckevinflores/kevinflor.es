import { Component, Signal, ViewEncapsulation, computed, inject } from '@angular/core';
import { TraktTvService } from '@core/services/trakt-tv.service';
import { ZoomImageDirective } from '@shared/directives/zoom-image/zoom-image.directive';
import { Icon } from '@shared/components/icon/icon';
import { eye } from '@icon/solid.icon';
import { WatchItem } from '@data/schema/trakt-tv/watch-item';

@Component({
  selector: 'watch',
  standalone: true,
  imports: [Icon],
  encapsulation: ViewEncapsulation.None,
  template: `@defer(when watch()){
    @if(watch(); as data){
      <a
      class="group"
      target="_blank"
      [href]="data.url"
      [attr.aria-label]="data.headTitle"
    >
    <div
      class="flex flex-row gap-3.5 p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border dark:border-gray-100/20">
      <img
        class="object-cover object-center rounded-1 w-auto h-full max-w-full max-h-20 border border-divider transition scale-100 group-hover:scale-105"
        alt="test" [src]="data.image" />
      <div class="flex flex-col flex-1 gap-1.5 text-sm truncate mix-blend-hard-light justify-center">
        <div class="flex gap-3">
          <p class="flex items-center gap-1 font-semibold tracking-wider uppercase dark:text-gray-300 text-gray-600">
            @if(data.isWatching){
            <span>Now Watching</span>
            <icon [path]="watchIcon" [size]="20" iconClass="animate-pulse w-5 h-5 fill-primary-500 dark:fill-primary-500"/>
            }@else{
            <span>Last Watched</span>
            }
          </p>

        </div>
        <p class="truncate font-medium transition-colors w-full">
          <span class="group-hover:underline">{{data.headTitle}}</span>
          <span class="dark:bg-gray-600 bg-gray-300 p-1 rounded-lg font-xs mx-1">{{data.year}}</span>
        </p>
        <p class="truncate w-full min-h-5.5 dark:text-gray-400 text-gray-600 capitalize">{{data.title}}</p>
      </div>
    </div>
    </a>
    }
    }@placeholder {
    <div class="bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 border dark:border-gray-100/20 h-28">
    </div>
    }
    `
})
export class Watch {
  traktTvService = inject(TraktTvService);
  watchIcon = eye;
  public watch: Signal<WatchItem | null> = computed(() => this.traktTvService.watch());
}
