import { Component, ViewEncapsulation, signal } from '@angular/core';
import { Icon} from '../icon/icon';
import socialLinkData from '../../../data/social-link.data'
import { SocialLinkSchema } from '../../../data/schema/social-links.schema'
@Component({
  selector: 'social-link',
  standalone: true,
  imports: [Icon],
  template: `
    @for (s of socialLink(); track $index) {
    <a
      [href]="s.link"
      target="_blank"
      [attr.aria-label]="s.name"
      [attr.title]="s.name"
    >
      <icon
        [path]="s.path"
        [size]="25"
        iconClass="hover:fill-[{{ s.color }}] dark:hover:fill-[{{ s.color }}]"
      ></icon>
    </a>
    }
  `,
  styles: [
    `
      social-link {
        @apply flex flex-row gap-3;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SocialLink {
  public socialLink = signal<SocialLinkSchema[]>(socialLinkData);
  constructor() {}
}
