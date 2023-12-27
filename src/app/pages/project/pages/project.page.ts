import { Component, ViewEncapsulation } from '@angular/core';
import { Observable} from 'rxjs';
import { ProjectService } from 'src/app/data/service/project.service';
import { Project } from 'src/app/data/schema/project.interface';
import languageTool from '../../../data/json/language-tools.json';
import { MetaService } from 'src/app/core/services/meta.service';
import { PlatformCheckService } from 'src/app/core/services/platform-check.service';

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
  @for (post of posts$ | async; track post.id) {
  <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg" (click)="scrollTop()" routerLink="{{post.slug}}">
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
  error: any | undefined;
  posts$: Observable<Project[]> | undefined

  constructor(private projectService: ProjectService, private metaService: MetaService, private platformCheck: PlatformCheckService) {
    this.metaService.setMetaTags(
      'Projects - Marc Kevin Flores',
      'Projects made by Marc Kevin Flores. Get to know all the sources.',
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

  ngOnInit(): void {
    this.posts$ = this.projectService.getData();
  }
  getColorByName(name: string): string{
    const item = languageTool.lists.find(item => item.name == name)
    return item ? item.color : '';
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
  scrollTop(){
    if(this.platformCheck.onBrowser){
      window.scrollTo(0, 0);
    }
  }
}
