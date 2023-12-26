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
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'success-token',
    loadChildren: () => import('./pages/callback/callback.module').then(m => m.CallbackModule)
  },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  },
]
