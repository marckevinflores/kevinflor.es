import { Component, ViewEncapsulation } from '@angular/core';
import socialLink from './social-link.data';

@Component({
  selector: 'social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialLinkComponent {
  public socialLink = socialLink
  constructor(){
  }
}
