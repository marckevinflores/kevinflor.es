import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  public socialLink = [
    { name: 'facebook', link: 'https://fb.com/mkf06'},
    { name: 'github', link:'https://github.com/marckevinflores'},
    { name: 'linkedin', link: 'https://linkedin.com/in/marckevinflores'},
    { name: 'envelope', link: 'mailto:marckevinflores@gmail.com'}
  ]
}
