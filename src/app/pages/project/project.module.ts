import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './pages/project.component';
// import { AngularSvgIconModule } from 'angular-svg-icon';
import { PlatformTagModule } from 'src/app/shared/components/platform-tag/platform-tag.module';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    NgForOf, AsyncPipe, NgIf,
    ProjectRoutingModule,
    // AngularSvgIconModule,
    PlatformTagModule
  ]
})
export class ProjectModule { }
