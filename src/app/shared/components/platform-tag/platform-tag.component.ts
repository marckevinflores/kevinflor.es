import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'platform-tag',
  templateUrl: './platform-tag.component.html',
  styleUrls: ['./platform-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformTagComponent {
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
