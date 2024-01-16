import { Component, ViewEncapsulation, ChangeDetectionStrategy, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, Location } from '@angular/common';
import { ProjectService } from '@pages/project/project.service';
import { PlatformCheckService } from '@core/services/platform-check.service';
import { arrowLeft } from '@icon/regular.icon';
import { CoreModule } from '@core/core.module';
import { Icon } from '@shared/components/icon/icon';
import { TooltipDirective } from '@shared/components/tooltip/tooltip.directive';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon } from '@shared/components/devicon/devicon';
@Component({
  selector: 'project-detail-page',
  imports: [Devicon, AsyncPipe, PlatformTag, TooltipDirective, Icon, CoreModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
  @if(detail(); as data){
  <div class="mx-auto dark:text-white text-gray-800">
    <header class="flex flex-col gap-7">
      <a
        class="text-primary-800 hover:text-black dark:text-primary-200 dark:hover:text-white font-medium"
        (click)="location.back()"
      >
        <div class="flex items-center gap-1"><icon [path]="backIcon" [size]="15"></icon> Back to project list</div>
      </a>
      <div>
        @for (pl of data.platform; track $index) {
        <platform-tag [name]="pl.name"></platform-tag>
        }
        <h1
          class="font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl  max-w-4xl"
        >
          {{ data.title }}
        </h1>
      </div>
      <img
        [src]="data.image"
        class="max-w-full h-auto rounded-3xl bg-cover bg-center w-full"
      />
    </header>
    <div class="flex flex-col gap-3 text-lg py-6">
      <div class="flex flex-wrap gap-1 items-center">
        <p class="text-base">Tech Stacks:</p>
        @for(t of data.tool; track $index){
        <div>
          <devicon [colored]="true" [name]="t" cssClass="w-8 m-1"></devicon>
        </div>
        }
      </div>
      <div class="post-body" [innerHTML]="data.body | safe : 'html'"></div>
    </div>
  </div>
      }
  `,
  styles: [
    `
      .post-body {
        a {
          @apply text-primary;
        }
      }
    `,
  ]
})
export class ProjectDetailPage {
  public backIcon = arrowLeft
  public detail = computed(() => {
      return this.projectService.projects().find(x => x.slug == this.route.snapshot.paramMap.get('slug'));
  });
  constructor(private route: ActivatedRoute, public location: Location, private projectService: ProjectService, public platformCheck: PlatformCheckService) {}
}
