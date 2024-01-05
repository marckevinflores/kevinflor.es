import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectService } from './project.service';
import { MetaService } from '@core/services/meta.service';
import { PlatformCheckService } from '@core/services/platform-check.service';
import { Router } from '@angular/router';
import { ProjectSchema } from '@data/schema/project.schema';
import profileData from '@data/profile.data';

@Component({
  selector: 'project',
  template: `<div class="container px-8 mx-auto xl:px-5">
  <div class="mx-auto max-w-screen-md">
    <h1
      class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      Projects
    </h1>
  </div>
</div>
<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-10 text-left cursor-pointer min-h-screen">
  @for (post of projectService.projects(); track post.id) {
  <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg" (click)="goToDetail(post)">
    <img class="rounded-lg h-80 w-80 object-cover hover:scale-105 transition-all" [src]="post.image"
      [alt]="post.title" />
    <div class="pt-3">
      <div class="my-2">
        @for(pf of post.platform; track $index){
        <platform-tag [name]="pf.name"></platform-tag>
        }
      </div>
      <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{{post.title}}</h5>
      <p class="mb-2 text-sm text-gray-900 dark:text-gray-200">{{post.desc}}</p>
    </div>
  </div>
  }
</div>
`,
  encapsulation: ViewEncapsulation.None
})
export class ProjectPage {
  constructor(public projectService: ProjectService, private metaService: MetaService, private platformCheck: PlatformCheckService, private router: Router) {
    this.metaService.setMetaTags(
      `Projects - ${profileData.name}`,
      `Projects made by ${profileData.name}. Get to know all the sources.`,
      [
        'tech',
        'software',
        'development',
        'project',
        'portfolio',
        'app',
        'programming',
        'open-source',
        'web',
        'android',
        'ios'
      ]
      )
  }


  getPlatformClasses(platformName: string): { [key: string]: boolean } {
    const colors: { [key: string]: string }  = {
      'Web': 'sky',
      'Android': 'green',
      'IOS': 'slate',
    };

    return {
      [`dark:text-${colors[platformName]}-200`]: true,
      [`dark:bg-${colors[platformName]}-700`]: true,
      [`dark:hover:bg-${colors[platformName]}-200`]: true,
      [`dark:hover:text-${colors[platformName]}-500`]: true,
      [`hover:bg-${colors[platformName]}-700`]: true,
      [`hover:text-${colors[platformName]}-200`]: true,
      [`bg-${colors[platformName]}-200`]: true,
      [`text-${colors[platformName]}-500`]: true,
    };
  }
  goToDetail(data: ProjectSchema){
    if(this.platformCheck.onBrowser){
      this.router.navigateByUrl(`/project/${data.slug}`);
      window.scrollTo(0, 0);
    }
  }
}
