import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { DeviconModule } from 'src/app/shared/components/devicon/devicon.module';
import { PlatformTagModule } from 'src/app/shared/components/platform-tag/platform-tag.module';
import { TooltipModule } from 'src/app/shared/components/tooltip/tooltip.module';

@NgModule({
  declarations: [
    ProjectDetailComponent
  ],
  imports: [
    NgForOf,
    ProjectDetailRoutingModule,
    DeviconModule,
    PlatformTagModule,
    TooltipModule,
  ]
})
export class ProjectDetailModule { }
