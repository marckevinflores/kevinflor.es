import { NgModule } from '@angular/core';
import { ProjectPage } from './pages/project.page';
import { PlatformTag} from 'src/app/shared/components/platform-tag/platform-tag';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { routes } from './project.routes'


@NgModule({
  declarations: [
    ProjectPage
  ],
  imports: [
    NgForOf, AsyncPipe, NgIf,
    PlatformTag,
    AngularSvgIconModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ProjectModule { }
