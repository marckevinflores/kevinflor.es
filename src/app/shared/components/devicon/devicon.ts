import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  computed,
  signal,
} from '@angular/core';
import { devIcon } from './devicon.data';
import { PlatformCheckService } from '../../../core/services/platform-check.service';
import { HttpClientModule } from '@angular/common/http';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { ThemeColor } from './devicon.schema';
@Component({
  selector: 'devicon',
  template: `<div
    [tooltip]="name"
    (mouseenter)="isHovered.set(true)"
    (mouseleave)="isHovered.set(false)"
    class="bg-transparent dark:text-white text-gray-600 rounded-full inline-flex items-center transition ease-in-out delay-0 hover:scale-[1.1]"
  >
    @if(icon(); as icon){
    <svg [attr.viewBox]="icon.viewBox" [class]="cssClass">
      @for(lgData of icon.linearGradient; track lgData.id){
      <linearGradient
        [attr.id]="lgData.id"
        [attr.x1]="lgData.x1"
        [attr.y1]="lgData.y1"
        [attr.x2]="lgData.x2"
        [attr.y2]="lgData.y1"
        [attr.gradientUnits]="lgData.gradientUnits"
      >
        @for(stop of lgData.stop; track $index){
        <stop
          [attr.offset]="stop.offset"
          [attr.stop-color]="stop.stopColor"
          [attr.stop-opacity]="stop.stopOpacity"
        />
        }
      </linearGradient>
      }
      @for(ellipseData of icon.ellipse; track $index){
      <ellipse
        [attr.cx]="ellipseData.cx"
        [attr.cy]="ellipseData.cy"
        [attr.rx]="ellipseData.rx"
        [attr.ry]="ellipseData.ry"
        [attr.fill]="elementColor(ellipseData)"
      />
      } @for(polygonData of icon.polygon; track $index){
      <polygon
        [attr.points]="polygonData.points"
        [attr.fill]="elementColor(polygonData)"
      ></polygon>
      } @for(circleData of icon.circle; track $index){
      <circle
        [attr.cx]="circleData.cx"
        [attr.cy]="circleData.cy"
        [attr.r]="circleData.r"
        [attr.fill]="elementColor(circleData)"
      ></circle>
      } @for(pathData of icon.path; track $index){
      <path
        fill-rule="evenodd"
        [attr.d]="pathData.data"
        [attr.fill]="elementColor(pathData)"
      />
      }
    </svg>
    }
  </div> `,
  imports: [HttpClientModule, TooltipDirective],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Devicon {
  @Input() public name!: string;
  @Input() public key!: number;
  @Input() public cssClass: string = 'w-8'
  @Input() public colored: boolean = false;
  icon = computed(() => devIcon[this.name]);
  isHovered = signal<boolean>(false);

  constructor(
    public platformCheck: PlatformCheckService,
    private darkModeService: DarkModeService
  ) {}

  elementColor(data: ThemeColor & { fill: string }): string{
    return this.colored ?  data.fill : this.fillColor(data);
  }

  fillColor(data: ThemeColor & { fill: string }): string{
   return this.isHovered() ? data.fill : this.darkLight(data)
  }
  darkLight(data: ThemeColor): string {
    return this.darkModeService.isDark() ? data.dark : data.light;
  }

}
