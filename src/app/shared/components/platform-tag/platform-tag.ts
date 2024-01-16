import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'platform-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <div class="rounded-full py-1 pr-1 inline-flex items-center mr-1 transition ease-in-out delay-0 text-primary-500 dark:text-primary-400">
    <span class="text-sm capitalize">{{name}}</span>
  </div>
  `,
})
export class PlatformTag {
  @Input() name!: string;
}
