import { Component, Input, Signal, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common'

@Component({
  selector: 'icon',
  template: `
  <svg [ngClass]="{'fill-gray-900 dark:fill-gray-200 flex' : color == ''}" class="{{iconClass}}" [attr.viewBox]="viewBox"
  [attr.fill]="color" [attr.width]="size" [attr.height]="size">
    <path [attr.d]="path" />
  </svg>
  `,
  imports: [NgClass],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class Icon {
  @Input() path!: string | Signal<string>
  @Input() size: number = 30;
  @Input() color: string = ''
  @Input() viewBox: string = '0 0 24 24';
  @Input() iconClass: string = '';
}
