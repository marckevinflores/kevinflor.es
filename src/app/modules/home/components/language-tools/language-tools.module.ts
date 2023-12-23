import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { LanguageToolsComponent } from './language-tools.component';
import { DeviconModule } from 'src/app/shared/components/devicon/devicon.module';



@NgModule({
  declarations: [LanguageToolsComponent],
  imports: [
    DeviconModule,
    NgForOf
  ],
  exports: [LanguageToolsComponent]
})
export class LanguageToolsModule { }
