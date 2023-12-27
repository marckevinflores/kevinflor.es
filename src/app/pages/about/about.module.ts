import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './pages/about.page';
import { RouterModule } from '@angular/router';
import { routes } from './about.routes'


@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AboutModule { }
