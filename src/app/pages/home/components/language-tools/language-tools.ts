import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { LanguageToolService } from './language-tool.service';
import { Devicon } from 'src/app/shared/components/devicon/devicon';
@Component({
  selector: 'language-tools',
  template: `
  <section class="mt-10">
    <h1 class="text-2xl dark:text-white">Languages and Tools</h1>
    <div class="flex flex-wrap h-1/2 py-6">
      @for (t of lts.languageTools(); track t.name) {
        <a [href]="t.url" [attr.aria-label]="t.name" target="_blank">
          <devicon [name]="t.name" [key]="$index"  cssClass="w-10 m-3"></devicon>
        </a>
      }
    </div>
  </section>
  `,
  imports: [Devicon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LanguageTools {
  constructor(public lts: LanguageToolService) {}
}
