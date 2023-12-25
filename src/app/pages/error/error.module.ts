import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/shared/components/button/button.module';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: ErrorComponent}]),
    ButtonModule
  ]
})
export class ErrorModule { }
