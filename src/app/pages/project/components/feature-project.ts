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
  @defer (when projectService.featuredProjects()) {
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
      }@loading() {
        <svg aria-hidden="true" class="m-auto w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-primary-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      }

    </div>
`
})
export class FeatureProject{
  constructor(public projectService: ProjectService){}
}
