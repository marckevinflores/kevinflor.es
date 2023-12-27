import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btn',
  template: `<button
    class="bg-primary rounded-lg px-5 py-2 text-white hover:bg-primary-800 dark:hover:bg-primary-400"
    (click)="redirect()"
    [attr.aria-label]="ariaLabel"
  >
    <ng-content></ng-content>
  </button> `,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})

export class Button {
  @Input() link: string = '';
  @Input() ariaLabel: string = '';
  constructor(private router: Router) {}
  redirect() {
    if (this.link) {
      if (this.link?.startsWith('/') && this.link?.length === 1) {
        this.router.navigateByUrl(this.link);
      } else {
        window.open(this.link, '_blank');
      }
    }
  }
}
