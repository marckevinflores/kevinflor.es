import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from './components/button/button.component';
import { DeviconComponent } from './components/devicon/devicon.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { PlatformTagComponent } from './components/platform-tag/platform-tag.component';
import { IconComponent } from './components/icon/icon.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    ButtonComponent,
    DeviconComponent,
    TooltipComponent,
    TooltipDirective,
    ScrollToTopComponent,
    PlatformTagComponent,
    IconComponent,
    SocialLinkComponent,
    LogoComponent,
  ],
  imports: [CommonModule, RouterModule, AngularSvgIconModule],
  exports: [
    ButtonComponent,
    DeviconComponent,
    TooltipDirective,
    ScrollToTopComponent,
    PlatformTagComponent,
    IconComponent,
    SocialLinkComponent,
    LogoComponent
  ],
})
export class SharedModule {}
