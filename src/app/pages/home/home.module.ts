import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home.page';
import { RouterModule } from '@angular/router';
import { Intro } from './components/intro/intro';
import { ExpertiseArea } from './components/expertise-area/expertise-area';
import { LanguageTools } from './components/language-tools/language-tools';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    ExpertiseArea,
    Intro,
    LanguageTools,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ]
})
export class HomeModule {}
