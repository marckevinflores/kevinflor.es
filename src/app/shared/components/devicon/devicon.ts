import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { devIcon } from './devicon.data';
import { PlatformCheckService } from '../../../core/services/platform-check.service';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconComponent  } from 'angular-svg-icon';
@Component({
  selector: 'devicon',
  template: `<div class="tech-icon {{
      bordered ? 'dark:border-gray-500  border-gray-400 border px-4 py-2' : ''
    }}
  bg-transparent dark:text-white text-gray-600 rounded-full inline-flex items-center m-1 transition ease-in-out delay-0 hover:scale-[1.1] dark:hover:border-[{{
      color
    }}] hover:border-[{{ color }}] group"
  >
    @if (platformCheck.onBrowser) {
    <!-- <svg-icon
      src="assets/devicon/{{ name }}.svg"
      class=" dark:fill-white fill-gray-600 dark:hover:fill-[{{
        color
      }}] group-hover:fill-[{{ color }}]"
      [svgStyle]="{ 'width.px': 20 }"
    >
    </svg-icon> -->
    } @if(showName){
    <span class="text-sm font-semibold ml-1">{{ name }}</span>
    }
  </div> `,
  styles: [``],
  imports: [NgIf, HttpClientModule, SvgIconComponent ],
  // providers: [provideAngularSvgIcon()],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Devicon {
  @Input() public name!: string;
  @Input() public color!: string;
  @Input() public bordered: boolean = true;
  @Input() public showName: boolean = true;
  constructor(public platformCheck: PlatformCheckService) { }
  get setDevIcon() {
    const icon = devIcon[this.name];
    if (!icon) {
      return '';
    }
    const paths = icon.path.map((pathData) => {
      return `<path d="${pathData.data}" fill="${pathData.fill}" />`;
    });
    return `<svg viewBox="${icon.viewBox}" class=" w-7">
      ${paths.join('\n')}
    </svg>`;
  }
}
