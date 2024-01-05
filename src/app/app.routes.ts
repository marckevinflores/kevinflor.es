import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  },
]
