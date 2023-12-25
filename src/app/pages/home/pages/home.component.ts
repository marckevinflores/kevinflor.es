import { Component, ViewEncapsulation } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent{
  constructor(private metaService: MetaService){
    this.metaService.setMetaTags(
      'Home - Marc Kevin Flores',
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
        'ios'
      ]
      )
  }
}
