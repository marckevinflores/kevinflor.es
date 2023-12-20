import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent {
  @Input() path!: string
  @Input() size: number = 30;
  @Input() color: string = '#000'
}
