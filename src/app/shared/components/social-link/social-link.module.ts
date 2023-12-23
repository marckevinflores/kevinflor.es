import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinkComponent } from './social-link.component';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [SocialLinkComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports:[SocialLinkComponent]
})
export class SocialLinkModule { }
