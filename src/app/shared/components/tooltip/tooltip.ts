import { Component, ViewEncapsulation } from '@angular/core';
import { TooltipPosition, TooltipTheme } from './tooltip.enums';
import { NgClass } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
@Component({
  selector: 'tooltip',
  template: `
    <div
      class="tooltip"
      [ngClass]="['tooltip--' + position, 'tooltip--' + theme]"
      [class.tooltip--visible]="visible"
      [style.left]="left + 'px'"
      [style.top]="top + 'px'"
    >
      {{ tooltip }}
    </div>
  `,
  styleUrls: ['./tooltip.scss'],
  imports: [NgClass, TooltipDirective],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class Tooltip {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;
}
