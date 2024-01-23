import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '@pages/project/project.service';
import { ProjectLink } from '@pages/project/components/project-link'
import { NgClass } from '@angular/common';
import { Devicon } from '@shared/components/devicon/devicon';
import { ZoomImageDirective } from '@shared/directives/zoom-image/zoom-image.directive';
@Component({
  selector: 'feature-project',
  standalone: true,
  imports: [ProjectLink, NgClass, Devicon, ZoomImageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="grid grid-cols-1 my-10">
  @for(project of projectService.featuredProjects(); track $index){
  <div class="flex flex-col md:flex-row rounded py-10">
    <div
      class="z-[1] w-full flex flex-col justify-between order-1 md:order-none gap-4 p-5 border-b border-x md:border-0 dark:border-gray-700"
      [ngClass]="{'md:order-2': project.toRight, 'md:order-none': !project.toRight, 'md:text-end': project.toRight}">
      <div>
        <p class="dark:text-primary-400 text-primary-600 text-sm font-bold mb-2">Featured Project</p>
        <h2 class="text-xl dark:text-white font-bold dark:hover:text-primary-400 hover:text-primary-600">
          {{project.title}}</h2>
      </div>
      <div
        class="md:p-3 dark:text-white md:border border-gray-300 dark:border-gray-700 text-black text-sm md:dark:bg-gray-900 md:bg-white rounded-lg">
        <p>{{project.description}}</p>
      </div>
      <div>
        @for(lt of project.tools; track $index){
        <devicon [name]="lt" [key]="$index" cssClass="w-5 mr-3"></devicon>
        }
      </div>
    </div>
    <div class="w-full" [ngClass]="{'md:-ml-10': !project.toRight, 'md:-mr-10': project.toRight}">
      <div class="py-1" [ngClass]="{'md:text-end': !project.toRight}">
        <project-link [links]="project.links"></project-link>
      </div>
      <img class="feature-image md:rounded z-0 max-w-full" draggable="false" [src]="project.image" [alt]="project.title" />
    </div>
  </div>
  }
</div>
`
})
export class FeatureProject{
  constructor(public projectService: ProjectService){}
}