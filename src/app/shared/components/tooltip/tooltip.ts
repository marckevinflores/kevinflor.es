import { Component, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { TooltipDirective } from '@shared/components/tooltip/tooltip.directive';
@Component({
  selector: 'tooltip',
  template: `
    <div
      class="fixed bg-gray-600 before:border-gray-600 before:border-[5px] rounded text-white py-[3px] px-[6px] text-sm opacity-0 before:content-[''] before:w-0 before:h-0 before:absolute mb-2 transform -translate-x-1/2 -translate-y-full before:border-x-transparent before:border-b-0 before:-bottom-1 before:left-[calc(50%-5px)] z-[3]"
      [ngClass]="{'opacity-100 transition-opacity': visible}"
      [style.left]="left + 'px'"
      [style.top]="top + 'px'"
    >
      {{ tooltip }}
    </div>
  `,
  imports: [NgClass, TooltipDirective],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class Tooltip {
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;
}
