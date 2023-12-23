import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { RouterModule } from '@angular/router';
import { SpotlightDirective } from './components/expertise-area/directive/spotlight.directive';
import { LanguageToolsComponent } from './components/language-tools/language-tools.component';
import { HeroComponent } from './components/hero/hero.component';
import { ManSorrowModule } from './components/hero/man-sorrow/man-sorrow.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ExpertiseAreaModule } from './components/expertise-area/expertise-area.module';
import { DeviconModule } from 'src/app/shared/components/devicon/devicon.module';
import { HeroModule } from './components/hero/hero.module';
import { LanguageToolsModule } from './components/language-tools/language-tools.module';

@NgModule({
  declarations: [
    HomeComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    ManSorrowModule,
    AngularSvgIconModule,
    ExpertiseAreaModule,
    DeviconModule,
    HeroModule,
    LanguageToolsModule
  ]
})
export class HomeModule { }
