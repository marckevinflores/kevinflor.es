import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { SocialLinkModule } from 'src/app/shared/components/social-link/social-link.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ManSorrowModule } from './man-sorrow/man-sorrow.module';



@NgModule({
  declarations: [HeroComponent],
  imports: [
    SocialLinkModule,
    ButtonModule,
    ManSorrowModule
  ],
  exports: [HeroComponent]
})
export class HeroModule { }
