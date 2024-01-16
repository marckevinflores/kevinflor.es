import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '@pages/project/project.service';
import { MetaService } from '@core/services/meta.service';
import { RouterLink } from '@angular/router';
import profileData from '@data/profile.data';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';

@Component({
  selector: 'project-page',
  imports: [PlatformTag, RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `<div class="container px-8 mx-auto xl:px-5">
  <div class="mx-auto max-w-screen-md">
    <h1
      class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      Projects
    </h1>
  </div>
</div>
<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-10 text-left cursor-pointer">
  @for (post of projectService.projects(); track post.id) {
  <a class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg" [routerLink]="['/project/'+ post.slug+'']">
    <img class="rounded-lg h-52 w-80 object-cover hover:scale-105 transition-all" [src]="post.image"
      [alt]="post.title" />
    <div class="pt-3">
      <div class="my-2">
        @for(pf of post.platform; track $index){
        <platform-tag [name]="pf.name"></platform-tag>
        }
      </div>
      <p class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{{post.title}}</p>
      <p class="mb-2 text-sm text-gray-900 dark:text-gray-200">{{post.desc}}</p>
    </div>
  </a>
  }
</div>
`
})
export class ProjectPage {
  constructor(public projectService: ProjectService, private metaService: MetaService) {
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
}
