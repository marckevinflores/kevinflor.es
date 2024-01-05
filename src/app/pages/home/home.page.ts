import { Component, ViewEncapsulation } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
@Component({
  selector: 'home',
  template: `
  <intro></intro>
  <expertise-area></expertise-area>
  <language-tools></language-tools>
  <in-work></in-work>
  `,
  encapsulation: ViewEncapsulation.None
})
export class HomePage {
  constructor(private metaService: MetaService) {
    this.metaService.setMetaTags(
      `Home - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Philippines. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'marc kevin flores',
        'marc kevin',
        'marckevinflores',
        'software engineer',
        'philippines',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }
}
