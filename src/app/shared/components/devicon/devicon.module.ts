import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { DeviconComponent } from './devicon.component';
import { SafePipe } from 'src/app/core/pipe/safe.pipe';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [DeviconComponent, SafePipe],
  imports: [ NgIf, AngularSvgIconModule
  ],
  exports: [DeviconComponent, SafePipe]
})
export class DeviconModule { }
