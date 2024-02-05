import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'loader',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
        <div class="flex items-center justify-center h-56">
          <div class="rounded-md h-12 w-12 border-4 border-t-4 border-black dark:border-white animate-spin absolute"></div>
        </div>
        `
})
export class Loader {
}
