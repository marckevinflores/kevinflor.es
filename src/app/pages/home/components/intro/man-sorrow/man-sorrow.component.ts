import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { ShapeData } from './shape/shape.interface';
import { cloud, flag, floor, logo, man, moon, plant, sea, stars, sun } from './shape';
@Component({
  selector: 'man-sorrow',
  templateUrl: './man-sorrow.component.html',
  styleUrls: ['./man-sorrow.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManSorrowComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer, private darkModeService: DarkModeService, @Inject(PLATFORM_ID) private platformId: Object) { }
  public stars!: SafeHtml;
  public man!: SafeHtml;
  public logo!: SafeHtml;
  public isDark!: Observable<boolean>;
  isBrowser: any;

  ngOnInit() {
    this.isDark = this.darkModeService.getDarkModeState()
    this.stars = this.sanitizer.bypassSecurityTrustHtml(stars);
    this.man = this.sanitizer.bypassSecurityTrustHtml(man);
    this.logo = this.sanitizer.bypassSecurityTrustHtml(logo);
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get seaPath() { return this.generatePath(sea) }
  get flagPath() { return this.generatePath(flag) }
  get plantPath() { return this.generatePath(plant)  }
  get floorPath() { return this.generatePath(floor); }
  get moonPath() { return this.generatePath(moon); }
  get cloudAbovePath() { return this.generatePath(cloud); }
  get sunPath() { return this.generatePath(sun); }

  private generatePath(data: Array<ShapeData>): SafeHtml {
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
