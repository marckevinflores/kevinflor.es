import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { stars } from './data/stars';
import { man } from './data/man';
import { logo } from './data/logo';
import sea from './data/sea';
import plant from './data/plant';
import moon from './data/moon';
import cloudAbove from './data/cloud-above';
import cloudBelow from './data/cloud-below';
import flag from './data/flag';
import floor from './data/floor';
import sun from './data/sun';

@Component({
  selector: 'starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarfieldComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  public stars!: SafeHtml;
  public man!: SafeHtml;
  public logo!: SafeHtml;

  ngOnInit() {
    this.stars = this.sanitizer.bypassSecurityTrustHtml(stars);
    this.man = this.sanitizer.bypassSecurityTrustHtml(man);
    this.logo = this.sanitizer.bypassSecurityTrustHtml(logo);
  }

  get seaPath() {
    return this.generatePath(sea);
  }
  get flagPath() {
    return this.generatePath(flag);
  }
  get plantPath() {
    return this.generatePath(plant);
  }
  get floorPath() {
    return this.generatePath(floor);
  }

  get moonPath() {
    return this.generatePath(moon);
  }
  get cloudAbovePath() {
    return this.generatePath(cloudAbove);
  }
  get sunPath() {
    return this.generatePath(sun);
  }

  get cloudBelowPath() {
    return this.generatePath(cloudBelow);
  }
  private generatePath(data: { d?: string; color: string; points?: string }[]) {
    return this.sanitizer.bypassSecurityTrustHtml(
      data
        .map((s) => {
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
