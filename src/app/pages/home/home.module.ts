import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { RouterModule } from '@angular/router';
import { ExpertiseAreaModule } from './components/expertise-area/expertise-area.module';
import { LanguageToolsModule } from './components/language-tools/language-tools.module';
import { IntroModule } from './components/intro/intro.module';

@NgModule({
  declarations: [
    HomeComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    ExpertiseAreaModule,
    IntroModule,
    LanguageToolsModule
  ]
})
export class HomeModule { }
