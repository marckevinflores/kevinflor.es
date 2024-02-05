import {
  Component,
  ChangeDetectionStrategy,
  signal,
  ViewEncapsulation,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from '../blog.service';
import { PlatformCheckService } from '@core/services/platform-check.service';
import { arrowLeft } from '@icon/regular.icon';
import { MetaService } from '@core/services/meta.service';
import { Subscription } from 'rxjs';
import { Icon } from '@shared/components/icon/icon';
import { CoreModule } from '@core/core.module';
import { Prose } from '@shared/components/prose/prose'
import { ZoomImageDirective } from '@shared/directives/zoom-image/zoom-image.directive'
import { BlogSchema } from './blog-detail.interface';
import { ImageSkeletonDirective } from '@core/directives/image-skeleton.directive';
@Component({
  selector: 'blog-detail-page',
  template: `@if(data(); as data){
    <div class="mx-auto dark:text-white text-gray-800">
      <header class="flex flex-col gap-7">
        <a class="text-primary-800 hover:text-black dark:text-primary-200 dark:hover:text-white font-medium"
          (click)="location.back()">
          <div class="flex items-center gap-1">
            <icon [path]="backIcon" [size]="15"></icon> Back to blog list
          </div>
        </a>
        <div>
          <h1 class="font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl  max-w-4xl">
            {{ data.title }}
          </h1>
        </div>
      </header>
      <div class="flex flex-col gap-3 text-lg py-6">
        <prose [data]="data.content"></prose>
      </div>
    </div>
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [Icon, CoreModule, Prose, ZoomImageDirective, ImageSkeletonDirective],
  standalone: true
})
export class BlogDetailPage{
  backIcon = arrowLeft;
  data = signal<BlogSchema | null>(null);
  sub!: Subscription;
  location = inject(Location);
  blogService = inject(BlogService);
  platformCheck = inject(PlatformCheckService);
  metaService = inject(MetaService);
  paramMap = toSignal(inject(ActivatedRoute).paramMap);
  constructor() {
    effect((onCleanup) => {
      this.sub = this.blogService.get(this.paramMap()?.get('slug')).subscribe(data => {
        this.data.set(data)
        this.metaService.setMetaTags( data.title, data.summary, data.keywords, data.smallImage )
      });

      onCleanup(() => {
        this.sub.unsubscribe();
      });
    });
  }
}
