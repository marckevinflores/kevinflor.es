import { Component, computed, inject } from '@angular/core';
import { Devicon } from '@shared/components/devicon/devicon';
import { LanguageToolService } from '@pages/home/components/language-tools/language-tool.service';
import inWorkData from '@data/in-work.data'
@Component({
  selector: 'in-work',
  standalone: true,
  imports: [Devicon],
  template: `
    <section class="mt-10">
      <h1 class="text-2xl dark:text-white">In my work</h1>
      <div class="flex flex-wrap h-1/2 py-6">
        @for (t of workTools(); track t.name) {
        <a [href]="t.url" [attr.aria-label]="t.name" target="_blank">
          <devicon [name]="t.name" [key]="$index" cssClass="w-10 m-3"/>
        </a>
        }
      </div>
    </section>
`
})
export class InWork{
  languageToolService = inject(LanguageToolService);
  workTools = computed(() => this.languageToolService.languageTools().filter(lt => inWorkData.includes(lt.name)))
}
