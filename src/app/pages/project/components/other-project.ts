import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectLink } from '@pages/project/components/project-link';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectService } from '@pages/project/project.service';
@Component({
  selector: 'other-project',
  standalone: true,
  imports: [ProjectLink, Devicon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: ` <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-lg mx-auto my-10 text-left">
  @for (post of projectService.otherProjects(); track post.id) {
  <div
    class="dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 py-8 px-7 flex justify-between flex-col items-start">
    <header class="w-full">
      <div class="mb-9 flex justify-between items-center flex-row">
        <div>
          <img [src]="post.thumbnail" class="w-16 rounded" [alt]="post.title" draggable="false" />
        </div>
        <project-link [links]="post.links"></project-link>
      </div>
      <p
        class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-300 group-hover:text-primary-500">
        {{post.title}}</p>
      <p class="mb-2 text-sm text-gray-900 dark:text-gray-200">{{post.description}}</p>
    </header>
    <footer class="mt-4">
      @for (t of post.tools; track $index) {
      <devicon [name]="t" [key]="$index" cssClass="w-5 mr-3"></devicon>
      }
    </footer>
  </div>
  }
</div>`
})
export class OtherProject {
  constructor(public projectService: ProjectService){}
}
