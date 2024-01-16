import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DarkModeService } from '@core/services/dark-mode.service';
import { ShapeData } from '@pages/home/components/intro/man-sorrow/shape/shape.interface';
import { cloud, flag, floor, logo, man, moon, plant, sea, stars, sun } from '@pages/home/components/intro/man-sorrow/shape';
import { PlatformCheckService } from '@core/services/platform-check.service';
@Component({
  selector: 'man-sorrow',
  templateUrl: './man-sorrow.html',
  styleUrls: ['./man-sorrow.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ManSorrow implements OnInit {
  constructor(private sanitizer: DomSanitizer, public darkModeService: DarkModeService, public platformCheck: PlatformCheckService) { }
  public stars!: SafeHtml;
  public man!: SafeHtml;
  public logo!: SafeHtml;

  ngOnInit() {
    this.stars = this.sanitizer.bypassSecurityTrustHtml(stars);
    this.man = this.sanitizer.bypassSecurityTrustHtml(man);
    this.logo = this.sanitizer.bypassSecurityTrustHtml(logo);
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
