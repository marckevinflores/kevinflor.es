import { Component, ViewEncapsulation } from '@angular/core';
import { Logo } from 'src/app/shared/components/logo/logo';
import { SocialLink } from 'src/app/shared/components/social-link/social-link';
@Component({
  selector: '[endnote]',
  template: `<div
    class="border-t border-neutral-200 dark:border-neutral-700 max-w-screen-lg mx-auto px-4"
  >
    <div
      class="flex flex-col sm:flex-row gap-4 justify-between py-4 text-gray-900 dark:text-white"
    >
      <div class="flex flex-row gap-3">
        <logo></logo>
        <span>Marc Kevin Flores</span>
      </div>
      <social-link></social-link>
    </div>
  </div> `,
  imports: [SocialLink, Logo],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class Footer {}
