import { Component, ElementRef, effect, inject, input } from '@angular/core';
import { CoreModule } from '@core/core.module'
import { PlatformCheckService } from '@core/services/platform-check.service';
import mediumZoom from 'medium-zoom';
@Component({
  selector: 'prose',
  standalone: true,
  imports: [CoreModule],
  template: `<article class="prose lg:prose-xl max-w-full dark:prose-invert dark:prose-pre:bg-gray-700"
  [innerHTML]="data() | markdown | safe: 'html'">
</article>`,
})
export class Prose {
  data = input<string | null>();
  el = inject(ElementRef);
  platformCheck = inject(PlatformCheckService);
  constructor(){
    effect(() => {
      if(this.platformCheck.onBrowser){
        mediumZoom(this.el.nativeElement.querySelectorAll("img"), {
          margin: 40,
          scrollOffset: 40
        });
      }
    })
  }
}
