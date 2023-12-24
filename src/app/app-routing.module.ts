import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'callback',
    loadChildren: () => import('./modules/callback/callback.module').then(m => m.CallbackModule)
  },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
