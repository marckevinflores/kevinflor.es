import { Component, Input } from '@angular/core';
import { CoreModule } from '@core/core.module'
@Component({
  selector: 'prose',
  standalone: true,
  imports: [CoreModule],
  template: `<article class="prose lg:prose-xl max-w-full dark:prose-invert dark:prose-pre:bg-gray-700"
  [innerHTML]="data | markdown">
</article>`,
})
export class Prose {
  @Input() data!: string | null
}
