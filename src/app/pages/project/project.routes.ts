import { Routes } from '@angular/router';
import { ProjectPage } from '@pages/project/project.page';

export const ProjectRoutes: Routes = [
  {
    path: '',
    component: ProjectPage
  },
  {
    path: ':slug',
    loadChildren: () => import('./project-detail/project-detail.routes').then(m => m.ProjectDetailRoutes)
  },
];
