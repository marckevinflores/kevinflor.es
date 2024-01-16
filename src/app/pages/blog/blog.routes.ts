import { Routes } from '@angular/router';
import { BlogPage } from '@pages/blog/blog.page'
export const BlogRoutes: Routes = [
  {
    path: '',
    component: BlogPage
  },
  {
    path: ':slug',
    loadChildren: () => import('./blog-detail/blog-detail.routes').then(m => m.BlogDetailRoutes)
  },
];
