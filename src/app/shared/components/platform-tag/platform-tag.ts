import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { appstore, github, playstore } from '@icon/brand.icon';
import { site2 } from '@icon/regular.icon';
@Component({
  selector: 'platform-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [Icon],
  template: `
  <div class="rounded-full py-1 pr-1 inline-flex items-center mr-1 transition ease-in-out delay-0 text-primary-500 dark:text-primary-400">
    <span class="text-sm capitalize">
      <icon [path]="getIcon()" [size]="20"></icon>
    </span>
  </div>
  `,
})
export class PlatformTag {
  name = input<string | any>()
  getIcon(): any {
    const icon: any = {
      'website': site2,
      'playstore': playstore,
      'appstore': appstore,
      'github': github
    }
    return icon[this.name()]

  }
}
