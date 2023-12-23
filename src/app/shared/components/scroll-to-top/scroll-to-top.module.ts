import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';



@NgModule({
  declarations: [ScrollToTopComponent],
  imports: [
    NgClass
  ],
  exports: [ScrollToTopComponent]
})
export class ScrollToTopModule { }
