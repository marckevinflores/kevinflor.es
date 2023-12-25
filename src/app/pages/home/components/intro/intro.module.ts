import { NgModule } from '@angular/core';
import { IntroComponent } from './intro.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { SocialLinkModule } from 'src/app/shared/components/social-link/social-link.module';
import { ManSorrowModule } from './man-sorrow/man-sorrow.module';

@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    SocialLinkModule,
    ButtonModule,
    ManSorrowModule
  ],
  exports: [IntroComponent]
})
export class IntroModule { }
