import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import mediumZoom from 'medium-zoom';
import { PlatformCheckService } from '@core/services/platform-check.service';
@Directive({
  selector: 'img',
  standalone: true
})
export class ZoomImageDirective{

  constructor(private el: ElementRef, private platformCheck: PlatformCheckService) {
    if(this.platformCheck.onBrowser){
    mediumZoom(el.nativeElement, {
      margin: 40,
      scrollOffset: 40
    })
   }
  }

}
