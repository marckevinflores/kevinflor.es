import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DeviconComponent } from './devicon.component';
import { SafePipe } from 'src/app/core/pipe/safe.pipe';



@NgModule({
  declarations: [DeviconComponent, SafePipe],
  imports: [
    AngularSvgIconModule, NgIf
  ],
  exports: [DeviconComponent, SafePipe]
})
export class DeviconModule { }
