import { Component, ViewEncapsulation, inject, input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'btn',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `<button
    class="flex gap-1 bg-primary rounded-lg px-5 py-2 text-white hover:bg-primary-800 dark:hover:bg-primary-400 items-center"
    (click)="redirect()"
    [attr.aria-label]="ariaLabel"
  >
    <ng-content/>
  </button> `
})
export class Button {
  link = input<string>('');
  ariaLabel = input<string>('');
  private router = inject(Router)
  redirect() {
    if (this.link()) {
      if (this.link()?.startsWith('/') && this.link()?.length === 1) {
        this.router.navigateByUrl(this.link());
      } else {
        window.open(this.link(), '_blank');
      }
    }
  }
}
