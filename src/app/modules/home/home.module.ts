import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpotlightDirective } from './components/expertise-area/directive/spotlight.directive';
import { ExpertiseAreaComponent } from './components/expertise-area/expertise-area.component';
import { LanguageToolsComponent } from './components/language-tools/language-tools.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroLogoComponent } from './components/hero/hero-logo/hero-logo.component';
import { StarfieldModule } from './components/hero/starfield/starfield.module';

@NgModule({
  declarations: [
    HomeComponent,
    SpotlightDirective,
    ExpertiseAreaComponent,
    LanguageToolsComponent,
    HeroComponent,
    HeroLogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    SharedModule,
    StarfieldModule
  ]
})
export class HomeModule { }
