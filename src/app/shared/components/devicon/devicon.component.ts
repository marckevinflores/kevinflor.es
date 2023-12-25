import { Component, Inject, Input, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { devIcon } from './devicon.data';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'devicon',
  templateUrl: './devicon.component.html',
  styleUrls: ['./devicon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeviconComponent implements OnInit{
  @Input() public name!: string;
  @Input() public color!: string;
  @Input() public bordered: boolean = true;
  @Input() public showName: boolean = true;
  isBrowser: any
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  get setDevIcon(){
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
