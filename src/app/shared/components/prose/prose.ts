import { Component, ElementRef, Input, effect } from '@angular/core';
import { CoreModule } from '@core/core.module'
import mediumZoom from 'medium-zoom';
@Component({
  selector: 'prose',
  standalone: true,
  imports: [CoreModule],
  template: `<article class="prose lg:prose-xl max-w-full dark:prose-invert dark:prose-pre:bg-gray-700"
  [innerHTML]="data | markdown | safe: 'html'">
</article>`,
})
export class Prose {
  @Input() data!: string | null
  constructor(private el: ElementRef){
    effect(() => {
      mediumZoom(this.el.nativeElement.querySelectorAll("img"), {
        margin: 40,
        scrollOffset: 40
      });
    })
  }
}
