import { Routes } from '@angular/router';
import { ProjectPage } from './project.page';

export const routes: Routes = [
  {
    path: '',
    component: ProjectPage
  },
  {
    path: ':slug',
    loadChildren: () => import('./project-detail/project-detail.module').then(m => m.ProjectDetailModule)
  },
];
