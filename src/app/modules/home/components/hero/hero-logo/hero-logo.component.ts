import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'hero-logo',
  templateUrl: './hero-logo.component.html',
  styleUrls: ['./hero-logo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroLogoComponent {
  public color = environment.mainColor
}
