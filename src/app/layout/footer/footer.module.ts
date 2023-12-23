import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialLinkModule } from 'src/app/shared/components/social-link/social-link.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SocialLinkModule,
    LogoModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
