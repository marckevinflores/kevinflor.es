import { NgModule } from '@angular/core';
import { ProjectPage } from './project.page';
import { PlatformTag} from '@shared/components/platform-tag/platform-tag';
import { RouterModule } from '@angular/router';
import { routes } from './project.routes'
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';


@NgModule({
  declarations: [
    ProjectPage
  ],
  imports: [
    PlatformTag,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProjectService],
  exports: []
})
export class ProjectModule { }
