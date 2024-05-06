import { NgClass, NgStyle } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import themeColorData from '@data/theme-color.data'
@Component({
  selector: 'toolbar-color',
  standalone: true,
  imports: [NgClass, NgStyle],
  encapsulation: ViewEncapsulation.None,
  template: `
       <div [ngClass]="{'max-h-full visible': themeColor.openColor(), 'max-h-0 invisible': !themeColor.openColor()}">
        <ul class="flex flex-wrap items-center gap-5 p-4 mx-auto justify-center">
          @for(color of colors; track $index){
            <li class="p-2.5 rounded-full border-2 cursor-pointer"
                [ngClass]="{'dark:border-gray-300 border-gray-900': color === themeColor.getColor(), 'dark:border-gray-900 border-transparent': color !== themeColor.getColor()}"
                [ngStyle]="{'background-color': color}"
                (click)="changeColor(color)">
            </li>
            }
        </ul>
        </div>
  `
})
export class ToolbarColor {
  themeColor = inject(ThemeService)
  public colors = themeColorData
  constructor() {}
  changeColor(color: string) {
    this.themeColor.setThemeColor(color)
  }
}
