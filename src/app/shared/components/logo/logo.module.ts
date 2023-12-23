import { NgModule } from '@angular/core';
import { LogoComponent } from './logo.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [LogoComponent],
  imports: [
    RouterLink
  ],
  exports: [LogoComponent]
})
export class LogoModule { }
