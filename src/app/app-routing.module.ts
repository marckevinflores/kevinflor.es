import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'top', // Add this option to scroll to the top
      anchorScrolling: 'enabled', // Add this option if you want to handle anchor scrolling as well
      scrollOffset: [0, 64], // Adjust this value if you have a fixed header or other elements
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
