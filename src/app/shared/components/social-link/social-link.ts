import { Component, ViewEncapsulation } from '@angular/core';
import socialLink from './social-link.data';
import { Icon} from '../icon/icon';
@Component({
  selector: 'social-link',
  standalone: true,
  imports: [Icon],
  template: `
    @for (s of socialLink; track $index) {
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
  public socialLink = socialLink;
  constructor() {}
}
