import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CallbackComponent],
  imports: [
    RouterModule.forChild([{path: '', component: CallbackComponent}]),
    CommonModule
  ]
})
export class CallbackModule { }
