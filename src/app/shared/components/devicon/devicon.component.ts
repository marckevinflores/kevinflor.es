import { Component, Input } from '@angular/core';
import { devIcon } from './devicon.data';
@Component({
  selector: 'devicon',
  templateUrl: './devicon.component.html',
  styleUrls: ['./devicon.component.scss']
})
export class DeviconComponent {
  @Input() public name!: string;
  @Input() public color!: string;
  @Input() public bordered: boolean = true;
  @Input() public showName: boolean = true;

  get setDevIcon(){
    const icon = devIcon[this.name];

    if (!icon) {
      return ''; // Handle the case where the icon is not found
    }

    const paths = icon.path.map((pathData) => {
      return `<path d="${pathData.data}" fill="${pathData.fill}" />`;
    });

    return `<svg viewBox="${icon.viewBox}" class=" w-7">
      ${paths.join('\n')}
    </svg>`;
  }
}
