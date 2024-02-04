import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DarkModeService } from '@core/services/dark-mode.service';
import { ShapeData } from '@pages/home/components/intro/man-sorrow/shape/shape.interface';
import { cloud, floor, logo, man, moon, plant, sea, stars, sun } from '@pages/home/components/intro/man-sorrow/shape';
import { PlatformCheckService } from '@core/services/platform-check.service';
@Component({
  selector: 'man-sorrow',
  styleUrls: ['./man-sorrow.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `@if(platformCheck.onBrowser){
    <svg class="animated w-11/12" id="man-sorrow" viewBox="0 0 750 500">
      <g [id]="isDark() ? 'moon' : 'sun'" class="animable" [innerHTML]="isDark() ? moonPath : sunPath"></g>
      <g [id]="isDark() ? 'stars' : 'clouds'" class="animable" [innerHTML]="isDark() ? starsPath : cloudAbovePath"></g>

      @for(path of extraPaths; track $index){
        <g [innerHTML]="generatePath(path)"></g>
      }
    </svg>
    }
    `
})
export class ManSorrow {
  constructor(private sanitizer: DomSanitizer, public darkModeService: DarkModeService, public platformCheck: PlatformCheckService) { }
  public isDark = computed(() => this.darkModeService.isDark())
  public extraPaths = [floor, sea, man, logo, plant]

  get starsPath()      { return this.generatePath(stars) }
  get moonPath()       { return this.generatePath(moon)  }
  get cloudAbovePath() { return this.generatePath(cloud) }
  get sunPath()        { return this.generatePath(sun)   }

  generatePath(data: Array<ShapeData>): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      data
        .map((s: ShapeData) => {
          const colorAttribute = s.color.includes('#')
            ? `fill="${s.color}"`
            : `class="${s.color}"`;
          if (s.points) {
            return `<polygon points="${s.points}" ${colorAttribute}></polygon>`;
          } else if (s.d) {
            return `<path d="${s.d}" ${colorAttribute}></path>`;
          } else {
            return '';
          }
        })
        .join('')
    );
  }
}
