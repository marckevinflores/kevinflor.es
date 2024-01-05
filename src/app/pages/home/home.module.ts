import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
import { Intro } from './components/intro/intro';
import { ExpertiseArea } from './components/expertise-area/expertise-area';
import { LanguageTools } from './components/language-tools/language-tools';
import { InWork } from './components/in-work/in-work.component';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    ExpertiseArea,
    Intro,
    LanguageTools,
    InWork,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ]
})
export class HomeModule {}
