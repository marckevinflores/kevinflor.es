import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpotlightDirective } from './components/expertise-area/directive/spotlight.directive';
import { ExpertiseAreaComponent } from './components/expertise-area/expertise-area.component';
import { LanguageToolsComponent } from './components/language-tools/language-tools.component';
import { HeroComponent } from './components/hero/hero.component';
import { ManSorrowModule } from './components/hero/man-sorrow/man-sorrow.module';

@NgModule({
  declarations: [
    HomeComponent,
    SpotlightDirective,
    ExpertiseAreaComponent,
    LanguageToolsComponent,
    HeroComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    SharedModule,
    ManSorrowModule
  ]
})
export class HomeModule { }
