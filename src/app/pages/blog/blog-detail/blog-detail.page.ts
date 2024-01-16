import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  signal,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
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
import { BlogSchema } from './blog-detail.interface';
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
        <img [src]="data.image" class="max-w-full h-auto rounded-3xl bg-cover bg-center w-full" />
      </header>
      <div class="flex flex-col gap-3 text-lg py-6">
        <prose [data]="data.content"></prose>
      </div>
    </div>
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [Icon, CoreModule, Prose],
  standalone: true
})
export class BlogDetailPage implements OnInit, OnDestroy {
  public backIcon = arrowLeft;
  public data = signal<BlogSchema | null>(null);
  private sub!: Subscription;
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private blogService: BlogService,
    public platformCheck: PlatformCheckService,
    public metaService: MetaService
  ) {}
  ngOnInit() {
    this.sub = this.blogService.get(this.route.snapshot.paramMap.get('slug')).subscribe(data => {
        this.data.set(data)
        this.metaService.setMetaTags( data.title, data.summary, data.keywords, data.smallImage )
    });
  }
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
}
