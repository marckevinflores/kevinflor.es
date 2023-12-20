import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialLinkComponent {
  public socialLink = [
    { name: 'facebook', link: 'https://fb.com/mkf06'},
    { name: 'github', link:'https://github.com/marckevinflores'},
    { name: 'linkedin', link: 'https://linkedin.com/in/marckevinflores'},
    { name: 'envelope', link: 'mailto:marckevinflores@gmail.com'}
  ]
}
