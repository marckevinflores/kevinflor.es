import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { ProjectLink } from '@pages/project/components/project-link';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectService } from '@pages/project/project.service';
import { ImageSkeletonDirective } from '@core/directives/image-skeleton.directive';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'other-project',
  standalone: true,
  imports: [ProjectLink, Devicon, ImageSkeletonDirective, Loader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
  @defer(on viewport) {
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-lg mx-auto my-10 text-left">
  @for (post of projectService.otherProjects(); track post.id) {
  <div
    class="dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 py-8 px-7 flex justify-between flex-col items-start">
    <header class="w-full">
      <div class="mb-9 flex justify-between items-center flex-row">
        <div>
          <img skeleton [src]="post.thumbnail" class="w-16 h-16 rounded" [alt]="post.title" draggable="false" />
        </div>
        <project-link [links]="post.links"/>
      </div>
      <p
        class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-300 group-hover:text-primary-500">
        {{post.title}}</p>
      <p class="mb-2 text-sm text-gray-900 dark:text-gray-200">{{post.description}}</p>
    </header>
    <footer class="mt-4 flex flex-row gap-2">
      @for (t of post.tools; track $index) {
      <devicon [name]="t" [key]="$index" cssClass="w-5"/>
      }
      </footer>
    </div>
    }
  </div>
  }@placeholder {
    <loader/>
  }
`
})
export class OtherProject {
  projectService = inject(ProjectService)
}
