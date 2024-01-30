import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <a routerLink="/" aria-label="Brand">
    <svg class="hover:text-primary" width="25" height="25" viewBox="0 0 9 8" fill="none">
      <path d="M1 6.99999L0.999981 4L1.00001 0.999975L4.16633 0.999921L7.00004 6.99985" stroke="currentColor"
        stroke-linecap="round" />
      <path d="M7.49998 1L3.49998 3.5L3.49998 5L3.49998 6.5L7.49998 4" stroke="currentColor" stroke-linecap="round" />
    </svg>
  </a>
`
})
export class Logo {}
