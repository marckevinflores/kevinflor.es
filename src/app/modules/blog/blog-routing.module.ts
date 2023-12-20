import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: ':slug',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
