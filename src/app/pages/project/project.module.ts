import { NgModule } from '@angular/core';
import { ProjectPage } from './pages/project.page';
import { PlatformTag} from 'src/app/shared/components/platform-tag/platform-tag';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { routes } from './project.routes'
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from 'src/app/data/service/project.service';


@NgModule({
  declarations: [
    ProjectPage
  ],
  imports: [
    NgForOf, AsyncPipe, NgIf,
    PlatformTag,
    HttpClientModule,
    AngularSvgIconModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProjectService],
  exports: []
})
export class ProjectModule { }
