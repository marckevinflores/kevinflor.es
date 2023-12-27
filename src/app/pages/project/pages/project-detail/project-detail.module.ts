import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProjectDetailPage } from './project-detail.page';
import { PlatformTag } from 'src/app/shared/components/platform-tag/platform-tag';
import { Devicon} from 'src/app/shared/components/devicon/devicon';
import { SafePipe } from 'src/app/core/pipe/safe.pipe';
import { TooltipDirective } from 'src/app/shared/components/tooltip/tooltip.directive';
import { routes } from './project-detail.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProjectDetailPage,
    SafePipe
  ],
  imports: [
    NgForOf,
    Devicon,
    PlatformTag,
    TooltipDirective,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProjectDetailModule { }
