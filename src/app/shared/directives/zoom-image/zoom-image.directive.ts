import { Directive, ElementRef, inject } from '@angular/core';
import mediumZoom from 'medium-zoom';
import { PlatformCheckService } from '@core/services/platform-check.service';
@Directive({
  selector: 'img',
  standalone: true
})
export class ZoomImageDirective{
  el = inject(ElementRef);
  platformCheck = inject(PlatformCheckService);
  constructor() {
    if(this.platformCheck.onBrowser){
    mediumZoom(this.el.nativeElement, {
      margin: 40,
      scrollOffset: 40
    })
   }
  }

}
