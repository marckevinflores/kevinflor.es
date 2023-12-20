import { NgModule } from '@angular/core';
import { ProjectComponent } from './pages/project.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: ':slug',
    loadChildren: () => import('./pages/project-detail/project-detail.module').then(m => m.ProjectDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
