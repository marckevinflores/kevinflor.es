import { NgModule } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ProjectDetailPage } from './project-detail.page';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon} from '@shared/components/devicon/devicon';
import { SafePipe } from 'src/app/core/pipe/safe.pipe';
import { TooltipDirective } from '@shared/components/tooltip/tooltip.directive';
import { routes } from './project-detail.routes';
import { RouterModule } from '@angular/router';
import { Icon } from '@shared/components/icon/icon';

@NgModule({
  declarations: [
    ProjectDetailPage,
    SafePipe
  ],
  imports: [
    Devicon,
    AsyncPipe,
    PlatformTag,
    TooltipDirective,
    Icon,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProjectDetailModule { }
