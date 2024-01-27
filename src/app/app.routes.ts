import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.routes').then(m => m.HomeRoutes)
  },
  {
    path: 'about',
    loadChildren: () => import('@pages/about/about.routes').then(m => m.AboutRoutes)
  },
  {
    path: 'project',
    loadChildren: () => import('@pages/project/project.routes').then(m => m.ProjectRoutes)
  },
  {
    path: 'blog',
    loadChildren: () => import('@pages/blog/blog.routes').then(m => m.BlogRoutes)
  },
  {
    path: 'uses',
    loadChildren: () => import('@pages/use/use.routes').then(m => m.UseRoutes)
  },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('@pages/error/error.routes').then(m => m.ErrorRoutes)
  },
]
