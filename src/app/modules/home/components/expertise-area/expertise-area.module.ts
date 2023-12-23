import { NgModule } from '@angular/core';
import { ExpertiseAreaComponent } from './expertise-area.component';
import { IconModule } from 'src/app/shared/components/icon/icon.module';
import { NgForOf } from '@angular/common';
import { SpotlightDirective } from './directive/spotlight.directive';



@NgModule({
  declarations: [ExpertiseAreaComponent, SpotlightDirective],
  imports: [
    IconModule,
    NgForOf
  ],
  exports: [ExpertiseAreaComponent]
})
export class ExpertiseAreaModule { }
