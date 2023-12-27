import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'platform-tag',
  template: `
  <div class="rounded-full px-2 py-1 inline-flex items-center mr-1 transition ease-in-out delay-0"
  [ngClass]="getPlatformClasses()">
    <span class="text-xs font-medium ">{{name}}</span>
  </div>
  `,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class PlatformTag {
  @Input() name!: string;

  getPlatformClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: string }  = {
      'Web': 'sky',
      'Android': 'green',
      'IOS': 'slate',
    };

    return {
      [`dark:text-${colors[this.name]}-200`]: true,
      [`dark:bg-${colors[this.name]}-700`]: true,
      [`dark:hover:bg-${colors[this.name]}-200`]: true,
      [`dark:hover:text-${colors[this.name]}-500`]: true,
      [`hover:bg-${colors[this.name]}-700`]: true,
      [`hover:text-${colors[this.name]}-200`]: true,
      [`bg-${colors[this.name]}-200`]: true,
      [`text-${colors[this.name]}-500`]: true,
    };
  }
}
