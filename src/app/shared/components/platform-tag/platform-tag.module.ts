import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { PlatformTagComponent } from './platform-tag.component';



@NgModule({
  declarations: [PlatformTagComponent],
  imports: [NgClass],
  exports: [PlatformTagComponent]
})
export class PlatformTagModule { }
