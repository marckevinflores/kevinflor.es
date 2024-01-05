import { NgModule } from '@angular/core';
import { ErrorPage } from './error.page';
import { RouterModule } from '@angular/router';
import { Button } from '@shared/components/button/button';



@NgModule({
  declarations: [
    ErrorPage
  ],
  imports: [
    RouterModule.forChild([{path: '', component: ErrorPage}]),
    Button
  ]
})
export class ErrorModule { }
